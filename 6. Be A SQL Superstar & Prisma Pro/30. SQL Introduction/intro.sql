-- Active: 1691400077453@@127.0.0.1@5432@test1

-- CREATE DATABASE test2;

-- ALTER DATABASE test2 RENAME TO test3;

-- DROP DATABASE test3;

CREATE TABLE
    IF NOT EXISTS student(
        student_id INT,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        cgpa NUMERIC(1, 2)
    );

ALTER TABLE student RENAME TO new_student;

DROP TABLE IF EXISTS new_student;

-- ## 30-8: Adding Constraints In A Table

CREATE TABLE
    IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        user_name VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        age INT DEFAULT 18
    );

-- ## 30-9: Insertion

INSERT INTO
    users (user_name, email, age)
VALUES ('john', 'john@gmail.com', 20), ('alex', 'alex@gmail.com', 23), ('smith', 'smith@gmail.com', 30);

-- ## Delete all rows in a table without deleting the table

TRUNCATE TABLE users;

-- ## Delete the table

DROP TABLE IF EXISTS users;

-- ## 30-10: Alter Table

-- Add a column, drop a column, change datatype of a column

-- rename a column, set DEFAULT value for a column

-- add constraint to a column, rename a table, rename a column

-- Add a new column

ALTER TABLE users
ADD
    COLUMN password VARCHAR(255) DEFAULT 'admin123' NOT NULL;

-- Delete a column

ALTER TABLE users DROP COLUMN age;

-- Change data type of a column

ALTER TABLE users ADD COLUMN demo INT;

ALTER TABLE users ALTER COLUMN demo TYPE TEXT;

-- Set DEFAULT value

ALTER table users ALTER COLUMN demo SET DEFAULT 'Bangladesh';

-- Rename a column

ALTER table users RENAME COLUMN demo TO country;

SELECT * FROM users;