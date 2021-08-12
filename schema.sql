-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS employeeMS_db;
-- Creates the "employeeMS_db" database --
CREATE DATABASE employeeMS_db;

-- Makes it so all of the following code will affect employeeMS_db --
USE employeeMS_db;

-- Creates the table "people" within employeeMS_db --
CREATE TABLE department (
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
 
  id INT PRIMARY KEY
  
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30), 
  last_name VARCHAR(30), 
  role_id INT, 
  manager_id INT
  FOREIGN KEY (manager_id) REFERENCES employee(id)
  FOREIGN KEY (role_id) REFERENCES role(id)
);