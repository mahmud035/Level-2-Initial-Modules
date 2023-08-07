CREATE TABLE
    IF NOT EXISTS account_role (
        user_id INT NOT NULL,
        role_id INT NOT NULL,
        grant_date TIMESTAMP,
        PRIMARY KEY (user_id, role_id),
        FOREIGN KEY (role_id) REFERENCES roles (role_id),
        FOREIGN KEY (user_id) REFERENCES accounts (user_id)
    )