/*
RUN THIS WHOLE PAGE IN WORKBENCH TO CREATE THE WHOLE DATABASE..
NO NEED TO RUN FOR EACH QUERY TO SET UP DATABASE..
SET THIS DATABASE IN WORKBENCH THROUGH 1 CLICK (Ctrl-A then Flash button)
*/

drop DATABASE DREAMHOME;
CREATE DATABASE DREAMHOME;
USE DREAMHOME;

CREATE TABLE Branches (
    branchNo CHAR(4) PRIMARY KEY,
    street VARCHAR(100) not null,
    city VARCHAR(50) not null,
    zipCode VARCHAR(20) not null
); 

CREATE TABLE BranchPhoneNo (
    branchNo CHAR(4)  not null,
    phoneNo VARCHAR(20)  not null,
    primary key (branchNo, PhoneNo),
    FOREIGN KEY (branchNo) REFERENCES Branches(branchNo)
);

CREATE TABLE Staff (
    staffNo VARCHAR(10) PRIMARY KEY,
    branchNo CHAR(4) not null,
    lname VARCHAR(30) not null,
    fname VARCHAR(30) not null,
    sex ENUM('M', 'F') not null,
    dob DATE not null,
    position ENUM('Manager', 'Supervisor', 'Assistant') not null,
    salary INT not null,
    supervisorNumber VARCHAR(10),
    mgrStartDate DATE,
    mgrBonus INT,
    FOREIGN KEY (branchNo) REFERENCES Branches(branchNo)
);

CREATE TABLE Owner(
    ownerNo VARCHAR(20) PRIMARY KEY,
    lname varchar(30) not null,
    fname varchar(30)not null,
    street VARCHAR(100) not null,
    city VARCHAR(50)not null,
    zipCode varchar(20) not null,
    phoneNo VARCHAR(20) not null,
    typeOfBusiness varchar(30),
    contactLname varchar(30),
    contactFname varchar(30)
);

create table OwnerPhoneNo(
    ownerNo VARCHAR(20) not null,
    phoneNo VARCHAR(20) not null,
    primary key (ownerNo, phoneNo),
    foreign key (ownerNo) references owner(ownerNo)
);

CREATE TABLE Properties(
    propertyNo varchar(10) PRIMARY KEY,
    img_url VARCHAR(255),
    type varchar(20)  not null,
    rooms int not null,
    rent int not null,
    street VARCHAR(100) not null,
    city VARCHAR(50) not null,
    zipCode varchar(20) not null,
    staffNo VARCHAR(10) not null,
    FOREIGN KEY (staffNo) REFERENCES Staff(staffNo)
);

CREATE TABLE PropertyOwners (
    propertyNo varchar(10) not null,
    ownerNo VARCHAR(20) not null,
    PRIMARY KEY (propertyNo, ownerNo),
    FOREIGN KEY (propertyNo) REFERENCES Properties(propertyNo),
    FOREIGN KEY (ownerNo) REFERENCES Owner(ownerNo)
);

CREATE TABLE Adds (
    addId int PRIMARY KEY,
    propertyNo varchar(10) not null,
    addDate date not null,
    medium varchar(20) not null,
    cost int not null,
    FOREIGN KEY (propertyNo) REFERENCES Properties(propertyNo)
);

CREATE TABLE BranchMgrs (
    branchNo CHAR(4) not null,
    staffNo VARCHAR(10) not null,
    PRIMARY KEY (branchNo, staffNo),
    FOREIGN KEY (branchNo) REFERENCES Branches(branchNo),
    FOREIGN KEY (staffNo) REFERENCES Staff(staffNo)
); 

CREATE TABLE Clients (
    clientNo VARCHAR(10) PRIMARY KEY,
    lname VARCHAR(30) not null,
    fname VARCHAR(30) not null,
    maxRent INT not null,
    branchNo CHAR(4) not null,
    regByStaffNo VARCHAR(10) not null,
    regDate DATE not null,
    FOREIGN KEY (branchNo) REFERENCES Branches(branchNo),
    FOREIGN KEY (regByStaffNo) REFERENCES Staff(staffNo)
);

create table clientPhoneNo(
clientNo varchar(10) not null,
phoneNo varchar(20) not null,
primary key(clientNo, PhoneNo),
foreign key (clientNo) references clients(clientNo)
);

CREATE TABLE ClientRequirement(
    clientNo VARCHAR(10) not null,
    typeRequired VARCHAR(20) not null,
    PRIMARY KEY (clientNo,typeRequired),
    FOREIGN KEY (clientNo) REFERENCES Clients(ClientNo)
);

create table PropertyViewReport(
    propertyNo varchar(10) not null,
    clientNo varchar(10) not null,
    dateOfView date not null,
    comments Text,
    PRIMARY KEY (propertyNo, clientNo, dateOfView),
    FOREIGN KEY (propertyNo) REFERENCES Properties(propertyNo),
    FOREIGN KEY (clientNo) REFERENCES Clients(clientNo)
);

CREATE TABLE Lease (
    leaseNo CHAR(8) PRIMARY KEY,
    clientNo VARCHAR(10) not null,
    propertyNo VARCHAR(10) not null,
    rentStartDate DATE not null,
    duration INT not null,
    units ENUM('YEAR', 'MONTH') not null,
    rentPerMonth INT  not null,
    paymentMethod ENUM('Cheque', 'Cash', 'Online') not null,
    depositPaid ENUM('Y', 'N') not null,
    endDate DATE GENERATED ALWAYS AS (
        CASE
            WHEN units = 'MONTH' THEN DATE_ADD(rentStartDate, INTERVAL duration MONTH)
            WHEN units = 'YEAR' THEN DATE_ADD(rentStartDate, INTERVAL duration YEAR)
        END
    ),
    FOREIGN KEY (clientNo) REFERENCES Clients(clientNo),
    FOREIGN KEY (propertyNo) REFERENCES Properties(propertyNo)
);

-- ____________________________________________________________________________________________________________________________________________________
/*
Trigger to insert a lease record: 
    a) Cannot add lease record with start date before an existing lease ends.
    b) Cannot add lease record with end date after the start date of a previous lease.
*/
# drop trigger check_lease_dates;
DELIMITER //
CREATE TRIGGER check_lease_dates
BEFORE INSERT ON Lease
FOR EACH ROW
BEGIN
    DECLARE end_date DATE;
    DECLARE start_date DATE;
    SELECT MAX(endDate) INTO end_date
    FROM Lease
    WHERE propertyNo = NEW.propertyNo;
    
    IF end_date IS NOT NULL AND NEW.rentStartDate <= end_date THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot add lease record with start date before an existing lease ends';
    END IF;

    SELECT MIN(rentStartDate) INTO start_date
    FROM Lease
    WHERE propertyNo = NEW.propertyNo;
    
    IF start_date IS NOT NULL AND NEW.endDate >= start_date THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot add lease record with end date after the start date of a previous lease';
    END IF;
END//
DELIMITER ;

-- ________________________________________________________________________________________________________________________________________________________________________________-
-- Get telephone number of a branch:
DELIMITER //

CREATE FUNCTION get_branch_telephone_numbers(branch_no CHAR(4))
RETURNS VARCHAR(255)
deterministic
BEGIN
    DECLARE telephone_numbers VARCHAR(255);
    SELECT GROUP_CONCAT(phoneNo SEPARATOR ' / ')
    INTO telephone_numbers
    FROM BranchPhoneNo
    WHERE branchNo = branch_no;
    
    RETURN telephone_numbers;
END//

DELIMITER ;
SELECT get_branch_telephone_numbers('B001');


-- __________________________________________________________________________________________________________________________________________________________________
-- Get telephone number of a client:
DELIMITER //

CREATE FUNCTION get_client_telephone_numbers(clientNo VARCHAR(10))
RETURNS VARCHAR(100)
deterministic
BEGIN
    DECLARE numbers VARCHAR(100);
    SELECT GROUP_CONCAT(PhoneNo SEPARATOR ' / ') INTO numbers
    FROM clientPhoneNo
    WHERE clientNo = clientNo;
    RETURN numbers;
END //

DELIMITER ;

-- __________________________________________________________________________________________________________________________________________________________________________
-- Get telephone number of a owner.
delimiter //
CREATE FUNCTION getOwnerPhoneNos(owner_num VARCHAR(20))
RETURNS VARCHAR(200)
deterministic
BEGIN
    DECLARE tel_numbers VARCHAR(200);
    
    SELECT GROUP_CONCAT(phoneNo SEPARATOR ' / ')
    INTO tel_numbers
    FROM OwnerPhoneNo
    WHERE ownerNo = owner_num;
    
    RETURN tel_numbers;
END;
//
