CREATE TABLE
    IF NOT EXISTS roles (
        role_id SERIAL PRIMARY KEY,
        role_name VARCHAR(255) UNIQUE NOT NULL
    )