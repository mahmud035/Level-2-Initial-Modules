-- Active: 1691400077453@@127.0.0.1@5432@test3@public

--* 31-3: Select Basics

CREATE TABLE IF NOT EXISTS departments (
  deptID SERIAL PRIMARY KEY,
  name text NOT NULL
);

INSERT INTO 
  departments (name)
VALUES 
  ('IT'),
  ('HR'),
  ('Marketing'),
  ('Finance'),
  ('Sales');

-- Select all fields/rows
SELECT * FROM departments;

CREATE TABLE IF NOT EXISTS employees (
  empID SERIAL PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  salary INTEGER NOT NULL,
  joining_date DATE NOT NULL,
  deptID INTEGER NOT NULL,
  CONSTRAINT fk_deptID
    FOREIGN KEY (deptID)
    REFERENCES departments (deptID)
);

-- Insert 100 rows
INSERT INTO 
  employees (name, email, salary, joining_date, deptID)
SELECT
    'Employee' || generate_series(1, 100)::text AS name,
    'employee' || generate_series(1, 100)::text || '@company.com' AS email,
    floor(random() * (100000 - 5000 + 1) + 5000)::integer AS salary,
    current_date - floor(random() * 365 * 10)::integer AS joining_date,
    floor(random() * 5) + 1 AS deptID
LIMIT 100;

-- Select all fields/rows 
SELECT * FROM employees;

-- Select some COLUMN
SELECT name, email, salary, joining_date from employees;

SELECT * from employees
WHERE salary > 10000 AND salary < 15000;

-- Select based on date
SELECT * from employees
WHERE joining_date >= '2020-01-01';

-- Not equal to
SELECT * from employees
WHERE name <> 'Employee7'
AND salary > 90000
OR name = 'Employee5'; 

--* 31-4: Limit And Offset
SELECT * FROM employees 
ORDER BY name
ASC;

-- Pagination
SELECT * FROM employees
ORDER BY name
ASC LIMIT 5 OFFSET 2;

-- Height salary from employees table
SELECT * from employees
ORDER BY salary
DESC LIMIT 1;

-- Third Height salary
SELECT * from employees
ORDER BY salary
DESC LIMIT 1 OFFSET 2;

--* 31-5: More Select And Like Operator
-- IN, NOT IN, BETWEEN, LIKE

SELECT * from employees
WHERE empID IN (2, 5, 7, 101, 102); 

SELECT * from employees
WHERE empID NOT IN (2, 5, 7); 

SELECT * FROM employees
WHERE salary BETWEEN 10000 AND 15000;

-- LIKE (for searching)
SELECT * FROM employees
WHERE name LIKE 'E%';   -- First character will be E (name column)

SELECT * FROM employees
WHERE name LIKE '%E';   -- Last character will be E

SELECT * FROM employees 
WHERE name LIKE '%E%';  

-- Specific Position 
SELECT * FROM employees 
WHERE name LIKE '_m%';  -- Second character will be m

SELECT * FROM employees 
WHERE name LIKE '_m___y%';

SELECT * FROM employees 
WHERE deptId IS NULL;