-- For the Branches table:

INSERT INTO Branches (branchNo, street, city, zipCode)
VALUES ('B001', '123 Main St', 'Anytown', '12345'),
('B002', '456 Oak Ave', 'Othertown', '67890');

-- For the BranchPhoneNo table:

INSERT INTO BranchPhoneNo (branchNo, phoneNo)
VALUES ('B001', '555-1234'),
('B002', '555-5678');

-- For the Staff table:

INSERT INTO Staff (staffNo, branchNo, lname, fname, sex, dob, position, salary, supervisorNumber, mgrStartDate, mgrBonus)
VALUES ('S001', 'B001', 'Smith', 'John', 'M', '1980-01-01', 'Manager', 100000, NULL, NULL, NULL),
('S002', 'B001', 'Doe', 'Jane', 'F', '1985-01-01', 'Supervisor', 75000, 'S001', '2020-01-01', 5000),
('S003', 'B002', 'Jones', 'Bob', 'M', '1990-01-01', 'Assistant', 50000, 'S002', NULL, NULL);

-- For the Owner table:

INSERT INTO Owner (ownerNo, lname, fname, street, city, zipCode, phoneNo, typeOfBusiness, contactLname, contactFname)
VALUES ('O001', 'Johnson', 'Mary', '789 Elm St', 'Somecity', '54321', '555-1111', 'Retail', 'Smith', 'Tom'),
('O002', 'Garcia', 'Juan', '246 Pine St', 'Anycity', '09876', '555-2222', 'Restaurant', 'Jones', 'Sara');

-- For the OwnerPhoneNo table:

INSERT INTO OwnerPhoneNo (ownerNo, phoneNo)
VALUES ('O001', '555-1111'),
('O002', '555-2222');

-- For the Properties table:

INSERT INTO Properties (propertyNo, img_url, type, rooms, rent, street, city, zipCode, staffNo)
VALUES ('P001', 'https://example.com/image.jpg', 'Apartment', 2, 1500, '123 Main St', 'Anytown', '12345', 'S001'),
('P002', 'https://example.com/image2.jpg', 'House', 4, 3000, '456 Oak Ave', 'Othertown', '67890', 'S001');

-- For the PropertyOwners table:

INSERT INTO PropertyOwners (propertyNo, ownerNo)
VALUES ('P001', 'O001'),
('P002', 'O002');

-- For the Adds table:

INSERT INTO Adds (addId, propertyNo, addDate, medium, cost)
VALUES (1, 'P001', '2023-04-01', 'Online', 100),
(2, 'P002', '2023-04-02', 'Print', 200);

-- For the BranchMgrs table:
INSERT INTO BranchMgrs (branchNo, staffNo)
VALUES ('B001', 'S001'),
('B001', 'S002'),
('B002', 'S003');

-- For the Clients table:
INSERT INTO Clients (clientNo, lname, fname, maxRent, branchNo, regByStaffNo, regDate)
VALUES ('C001', 'Williams', 'Olivia', 2000, 'B001', 'S002', '2023-04-10'),
('C002', 'Davis', 'Emma', 2500, 'B002', 'S003', '2023-04-15');

-- For the ClientPhoneNo table:
INSERT INTO ClientPhoneNo (clientNo, phoneNo)
VALUES ('C001', '555-1111'),
('C002', '555-2222');

-- For the ClientRequirement table:
INSERT INTO ClientRequirement (clientNo, typeRequired)
VALUES ('C001', 'Apartment'),
('C002', 'House');

-- For the PropertyViewReport table:
INSERT INTO PropertyViewReport (propertyNo, clientNo, dateOfView, comments)
VALUES ('P001', 'C001', '2023-04-11', 'Liked the apartment, but it was a bit small.'),
('P002', 'C002', '2023-04-16', 'Loved the house, but it was a bit expensive.');

-- For the Lease table:
INSERT INTO Lease (leaseNo, clientNo, propertyNo, rentStartDate, duration, units, rentPerMonth, paymentMethod, depositPaid)
VALUES ('L001', 'C001', 'P001', '2023-05-01', 12, 'MONTH', 1500, 'Cheque', 'Y'),
('L002', 'C002', 'P002', '2023-06-01', 24, 'MONTH', 3000, 'Online', 'N');
