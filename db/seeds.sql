INSERT INTO department (department_name)
VALUES ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES 
('Accounting Manager', 100000, 1),
('Accountant', 80000, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Jerry', 'Simpson', 1, 1),
('Matila', 'Simpson', 2, NULL);

