USE DREAMHOME;

-- Queries required by the Staff:
-- (a) List details of staff supervised by a named Supervisor at the branch.
SELECT s.staffNo, s.fname, s.lname, s.sex, s.dob, s.position, s.salary, b.branchNo
FROM Staff s
JOIN Branches b ON s.branchNo = b.branchNo
WHERE s.supervisorNumber = (SELECT staffNo FROM Staff WHERE fname = 'John' AND lname = 'Doe')
AND b.city = 'Manchester';

select * from staff;

-- (b) List details of all Assistants alphabetically by name at the branch.
SELECT *
FROM Staff
WHERE branchNo = 'B003'
AND position = 'Assistant'
ORDER BY lname, fname;

-- (c) List the details of property (including the rental deposit) available for rent at the branch, along
-- with the owner’s details.
SELECT p.propertyNo, p.type, p.rooms, p.rent, p.street, p.city, p.zipCode, o.lname, o.fname, o.phoneNo
FROM Properties p
JOIN PropertyOwners po ON p.propertyNo = po.propertyNo
JOIN Owner o ON po.ownerNo = o.ownerNo
WHERE p.staffNo IS NULL AND p.zipCode LIKE 'M%';


-- (d) List the details of properties managed by a named member of staff at the branch.
SELECT *
FROM Properties
join staff on properties.staffno = staff.staffno
WHERE staff.staffNo = ',vnz'
AND branchNo = ',zs';

-- (e) List the clients registering at the branch and the names of the members of staff who registered
-- the clients.
SELECT c.clientNo, c.lname, c.fname, s.fname AS staffFname, s.lname AS staffLname
FROM Clients c
JOIN Staff s ON c.regByStaffNo = s.staffNo
WHERE c.branchNo = 'mjsbvz';

-- (f) Identify properties located in Glasgow with rents no higher than £450.
SELECT *
FROM Properties
WHERE city = 'Glasgow'
AND rent <= 450;

-- (g) Identify the name and telephone number of an owner of a given property.
SELECT Owner.fname, Owner.lname, Owner.phoneNo
FROM Properties
JOIN PropertyOwners ON Properties.propertyNo = PropertyOwners.propertyNo
JOIN Owner ON PropertyOwners.ownerNo = Owner.ownerNo
WHERE Properties.propertyNo = 'given_property_number';

-- (h) List the details of comments made by clients viewing a given property.
SELECT clientNo, dateOfView, Comments
FROM propertyViewReport
WHERE propertyNo = 'given_property_number';

-- (i) Display the names and phone numbers of clients who have viewed a given property but not
-- supplied comments.
SELECT Clients.fname, Clients.lname, Clients.maxRent, Clients.clientNo, clientPhoneNo.phoneNo
FROM Clients
JOIN propertyViewReport ON Clients.clientNo = propertyViewReport.clientNo
JOIN clientPhoneNo ON Clients.clientNo = clientPhoneNo.clientNo
WHERE propertyViewReport.propertyNo = 'given_property_number'
AND propertyViewReport.Comments IS NULL;

-- (j) Display the details of a lease between a named client and a given property.
SELECT *
FROM Lease
WHERE clientNo = 'named_client_number'
AND propertyNo = 'given_property_number';

-- (k) Identify the leases due to expire next month at the branch.
SELECT *
FROM Lease
WHERE endDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 1 MONTH)
AND propertyNo IN (
    SELECT propertyNo
    FROM Properties
    WHERE staffNo IN (
        SELECT staffNo
        FROM Staff
        WHERE branchNo = 'branch_number'
    )
);

-- (l) List the details of properties that have not been rented out for more than three months.
SELECT *
FROM Properties
WHERE propertyNo NOT IN (
    SELECT DISTINCT propertyNo
    FROM Lease
    WHERE rentStartDate >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)
);

-- (m) Produce a list of clients whose preferences match a particular property.
SELECT DISTINCT Clients.fname, Clients.lname, Clients.maxRent, Clients.clientNo, clientPhoneNo.phoneNo
FROM Clients
JOIN ClientRequirement ON Clients.clientNo = ClientRequirement.clientNo
JOIN Properties ON ClientRequirement.typeRequired = Properties.type
JOIN clientPhoneNo ON Clients.clientNo = clientPhoneNo.clientNo
WHERE Properties.propertyNo = 'given_property_number';

show tables;
select * from adds;
select * from branches;
select * from branchmgrs;
select * from branchphoneno;
select * from clientphoneno;
select * from clientrequirement;
select * from clients;
select * from lease;
select * from owner;
select * from ownerphoneno;
select * from properties;
select * from propertyowners;
select * from propertyviewreport;
select * from staff;