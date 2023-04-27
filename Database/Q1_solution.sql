USE DREAMHOME;
-- Queries required by the Branch: 
-- (a) List the details of branches in a given city.
SELECT *
FROM Branches
WHERE city = 'Glasgow';

-- (b) Identify the total number of branches in each city.
SELECT city, COUNT(*) AS num_branches
FROM Branches
GROUP BY city;

-- (c) List the name, position, and salary of staff at a given branch, ordered by staff name.
SELECT fname, lname, position, salary
FROM Staff
WHERE branchNo = 'B001'
ORDER BY lname, fname;

-- (d) Identify the total number of staff and the sum of their salaries.
SELECT COUNT(*) AS num_staff, SUM(salary) AS total_salary
FROM Staff;

-- (e) Identify the total number of staff in each position at branches in Glasgow.
SELECT position, COUNT(*) AS num_staff
FROM Staff
WHERE branchNo IN (
    SELECT branchNo
    FROM Branches
    WHERE city = 'Glasgow'
)
GROUP BY position;

-- (f) List the name of each Manager at each branch, ordered by branch address.
SELECT b.street, s.fname, s.lname
FROM Branches b
INNER JOIN Staff s ON s.staffNo = (
    SELECT staffNo
    FROM Staff
    WHERE position = 'Manager' AND branchNo = b.branchNo
)
ORDER BY b.street;

-- (g) List the names of staff supervised by a named Supervisor.
SELECT CONCAT(fname, ' ', lname) AS Staff_Name
FROM Staff
WHERE supervisorNumber = (SELECT staffNo FROM Staff WHERE CONCAT(fname, ' ', lname) = 'Supervisor_Name');

-- (h) List the property number, address, type, and rent of all properties in Glasgow, ordered by rental
-- amount.
SELECT propertyNo, street, type, rent 
FROM Properties 
WHERE city = 'Glasgow' 
ORDER BY rent;

-- (i) List the details of properties for rent managed by a named member of staff.
SELECT * 
FROM Properties 
WHERE staffNo = (SELECT staffNo FROM Staff WHERE fname = 'john' AND lname = 'Smith');

-- (j) Identify the total number of properties assigned to each member of staff at a given branch.
SELECT s.fname, s.lname, COUNT(p.propertyNo) AS num_properties
FROM Staff s
LEFT JOIN Properties p ON s.staffNo = p.staffNo
WHERE s.branchNo = 'branchNo_value'
GROUP BY s.staffNo
ORDER BY COUNT(p.propertyNo) DESC;

-- (k) List the details of properties provided by business owners at a given branch.
SELECT p.propertyNo, p.type, p.rooms, p.rent, p.street, p.city, p.zipCode,
       o.ownerNo, o.lname, o.fname, o.street AS ownerStreetAddress, o.city AS ownerCity, o.zipCode AS ownerPostalCode, o.phoneNo, o.typeOfBusiness, o.contactLname, o.contactFname
FROM Properties p
JOIN PropertyOwners po ON p.propertyNo = po.propertyNo
JOIN Owner o ON po.ownerNo = o.ownerNo
WHERE p.staffNo IN (
    SELECT s.staffNo
    FROM Staff s
    WHERE s.branchNo = 'branchNo_value'
)
AND o.typeOfBusiness IS NOT NULL;

-- (l) Identify the total number of properties of each type at all branches.
SELECT type, COUNT(*) AS total_properties
FROM Properties
GROUP BY type
ORDER BY type;

-- (m) Identify the details of private property owners that provide more than one property for rent.
SELECT o.ownerNo, o.lname, o.fname, o.street, o.city, o.zipCode, o.phoneNo, COUNT(p.propertyNo) AS num_properties
FROM Owner o
JOIN PropertyOwners po ON o.ownerNo = po.ownerNo
JOIN Properties p ON po.propertyNo = p.propertyNo
WHERE o.typeOfBusiness IS NULL
GROUP BY o.ownerNo
HAVING COUNT(p.propertyNo) > 1;


-- (n) Identify flats with at least three rooms and with a monthly rent no higher than £500 in Aberdeen.
SELECT *
FROM Properties
WHERE city = 'Aberdeen' AND type = 'Flat' AND rooms >= 3 AND rent <= 500;

-- (o) List the number, name, and telephone number of clients and their property preferences at a given
-- branch.

SELECT c.clientNo, c.lname, c.fname, ct.phoneNo, cr.typeRequired
FROM Clients c
JOIN ClientRequirement cr ON c.clientNo = cr.clientNo 
join clientphoneNo ct on c.clientNo = ct.clientNo
WHERE c.branchNo = 'branch_code';


-- (p) Identify the properties that have been advertised more than the average number of times.
SELECT propertyNo
FROM Adds
GROUP BY propertyNo
HAVING COUNT(*) > (SELECT AVG(advertisementCount) 
    FROM(SELECT propertyNo,COUNT(*) as advertisementCount 
        FROM Adds 
        GROUP BY propertyNo) as counts);

-- (q) List the details of leases due to expire next month at a given branch.

SELECT l.leaseNo, l.clientNo, l.propertyNo, l.rentStartDate, l.duration, l.units, l.rentPerMonth
FROM Lease l
JOIN Properties p ON l.propertyNo = p.propertyNo
join staff s on s.staffno = p.staffno
WHERE s.branchNo = 'branch_code' AND DATE_ADD(l.rentStartDate, INTERVAL CASE units
            WHEN units = 'YEAR' THEN duration * 12
            WHEN units = 'MONTH' THEN duration
        END month) BETWEEN DATE(NOW()) AND DATE_ADD(DATE(NOW()), INTERVAL 1 MONTH);

-- (r) List the total number of leases with rental periods that are less than one year at branches in
-- London.
SELECT COUNT(*) AS totalLeases
FROM Lease
INNER JOIN Properties ON Lease.propertyNo = Properties.propertyNo
join staff s on properties.staffno = s.staffno
INNER JOIN Branches ON s.branchNo = Branches.branchNo
WHERE Lease.units = 'MONTH' AND Lease.duration < 12 AND Branches.city = 'London'
   OR Lease.units = 'YEAR' AND Lease.duration < 1 AND Branches.city = 'London';


-- (s) List the total possible daily rental for property at each branch, ordered by branch number.
SELECT b.branchNo, SUM(p.rent/30) AS daily_rental
FROM Branches b
JOIN Staff s ON b.branchNo = s.branchNo
JOIN Properties p ON s.staffNo = p.staffNo
GROUP BY b.branchNo
ORDER BY b.branchNo;
