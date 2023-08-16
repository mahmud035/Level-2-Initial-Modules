-- CREATE DATABASE test2;

--* 31-1: Foreign Key Constraint And Data Integrity

--* Department Table
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

--* Employee Table
-- Each employee belongs to a different
CREATE TABLE
    IF NOT EXISTS Employee (
        Employee_Id SERIAL PRIMARY KEY,
        Employee_Name VARCHAR(255) NOT NULL,
        Department_Id INT,
        CONSTRAINT fk_constraint_dept 
        FOREIGN KEY (Department_Id) 
        REFERENCES Department (Department_Id)
    );

DROP TABLE IF EXISTS Employee;

INSERT INTO Employee VALUES(1, 'John', 1) ;

DELETE FROM Employee WHERE Employee_Id = 1;

SELECT * FROM Employee;

-- WARNING: Be careful when updating and deleting. Always specify the WHERE Condition.

--* 31-2: Updation And Deletion
create table courses (
  course_id SERIAL PRIMARY KEY,
  course_name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  published_date DATE
);

DROP TABLE IF EXISTS courses;

SELECT * FROM courses;

-- Date -> YYYY-MM-DD
INSERT INTO 
  courses (course_name, description, published_date)
VALUES
  (
  'Postgres for Developer', 
  'A complete Postgres for developers', 
  '2020-07-13'
  ),
  (
  'Postgres Administration', 
  'A Postgres guide for DBA', 
  NULL
  ),
  ('Postgres High Performance', NULL, NULL),
  (
  'Postgres Bootcamp', 
  'Learn Postgres via Bootcamp', 
  '201-07-11'
  ),
  (
  'Mastering Postgres', 
  'Mastering Postgres in 21 Days', 
  '2012-06-30'
  );

TRUNCATE TABLE courses;

--* Update database table row
-- UPDATE table_name
-- SET column1 = value1,
--     column2 = value2,
--     ...
-- WHERE condition;

UPDATE courses
SET course_name= 'Postgres',
    description = 'Dummy text'
WHERE course_Id > 1 AND course_id < 5 ;

SELECT * FROM courses;

--* Delete database table row
-- DELETE FROM table_name
-- WHERE condition;

DELETE FROM courses
WHERE course_id = 1;

SELECT * FROM courses;


