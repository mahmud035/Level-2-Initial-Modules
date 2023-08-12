-- CREATE DATABASE test2;

-- Department Table

-- Each department has many employees.

CREATE TABLE
    IF NOT EXISTS Department (
        Department_Id SERIAL PRIMARY KEY,
        Department_Name VARCHAR(255)
    );

DROP TABLE IF EXISTS Department;

INSERT INTO Department VALUES (1, 'IT');

DELETE FROM Department WHERE Department_Id = 1 ;

SELECT * FROM Department;

-- Employee Table

-- Each employee belongs to a different

CREATE TABLE
    IF NOT EXISTS Employee (
        Employee_Id SERIAL PRIMARY KEY,
        Employee_Name VARCHAR(255) NOT NULL,
        Department_Id INT,
        CONSTRAINT fk_constraint_dept FOREIGN KEY (Department_Id) REFERENCES Department (Department_Id)
    );

DROP TABLE IF EXISTS Employee;

INSERT INTO Employee VALUES(1, 'John', 1) ;

DELETE FROM Employee WHERE Employee_Id = 1;

SELECT * FROM Employee;