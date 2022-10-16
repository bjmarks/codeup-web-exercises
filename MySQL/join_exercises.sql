# CREATE DATABASE join_test_db;
# CREATE TABLE roles (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
# CREATE TABLE users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role_id INT UNSIGNED DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles (id)
);
# INSERT INTO roles (name) VALUES ('admin');
# INSERT INTO roles (name) VALUES ('author');
# INSERT INTO roles (name) VALUES ('reviewer');
# INSERT INTO roles (name) VALUES ('commenter');
# INSERT INTO users (name, email, role_id) VALUES ('bob', 'bob@example.com', 1), ('joe', 'joe@example.com', 2), ('sally', 'sally@example.com', 3), ('adam', 'adam@example.com', 3), ('jane', 'jane@example.com', null), ('mike', 'mike@example.com', null);
/*
Use JOIN, LEFT JOIN, and RIGHT JOIN to combine results from the users and roles tables as we did in the lesson. Before you run each query, guess the expected number of results.
Although not explicitly covered in the lesson, aggregate functions like count can be used with join queries. Use COUNT and the appropriate join type to get a list of roles along with the number of users that have a given role. Hint: You will also need to use GROUP BY in the query.
Employees Database
Create a file named join_exercises.sql to do your work in.
Using the example in the Associative Table Joins section as a guide, write a query that shows each department along with the name of the current manager for that department.
+--------------------+--------------------+
| Department Name    | Department Manager |
+--------------------+--------------------+
| Customer Service   | Yuchang Weedman    |
| Development        | Leon DasSarma      |
| Finance            | Isamu Legleitner   |
| Human Resources    | Karsten Sigstam    |
| Marketing          | Vishwani Minakawa  |
| Production         | Oscar Ghazalie     |
| Quality Management | Dung Pesch         |
| Research           | Hilary Kambil      |
| Sales              | Hauke Zhang        |
+--------------------+--------------------+
Find the name of all departments currently managed by women.

+------------------+--------------------+
| Department Name  | Department Manager |
+------------------+--------------------+
| Development      | Leon DasSarma      |
| Finance          | Isamu Legleitner   |
| Human Resources  | Karsten Sigstam    |
| Research         | Hilary Kambil      |
+------------------+--------------------+
Find the current titles of employees currently working in the Customer Service department.

+--------------------+-------+
| title              | Total |
+--------------------+-------+
| Senior Staff       | 11268 |
| Staff              |  3574 |
| Senior Engineer    |  1790 |
| Engineer           |   627 |
| Technique Leader   |   241 |
| Assistant Engineer |    68 |
| Manager            |     1 |
+--------------------+-------+
Find the current salary of all current managers.

+--------------------+--------------------+--------+
| Department Name    | Department Manager | Salary |
+--------------------+--------------------+--------+
| Customer Service   | Yuchang Weedman    |  58745 |
| Development        | Leon DasSarma      |  74510 |
| Finance            | Isamu Legleitner   |  83457 |
| Human Resources    | Karsten Sigstam    |  65400 |
| Marketing          | Vishwani Minakawa  | 106491 |
| Production         | Oscar Ghazalie     |  56654 |
| Quality Management | Dung Pesch         |  72876 |
| Research           | Hilary Kambil      |  79393 |
| Sales              | Hauke Zhang        | 101987 |
+--------------------+--------------------+--------+
Bonus Find the names of all current employees, their department name, and their current manager's name .
+----------------------+------------------+-----------------+
| Employee             | Department       | Manager         |
+----------------------+------------------+-----------------+
| Huan Lortz           | Customer Service | Yuchang Weedman |
| Basil Tramer         | Customer Service | Yuchang Weedman |
| Breannda Billingsley | Customer Service | Yuchang Weedman |
| Jungsoon Syrzycki    | Customer Service | Yuchang Weedman |
| Yuichiro Swick       | Customer Service | Yuchang Weedman |
... 240,124 Rows in total
*/





/*
Using the example in the Associative Table Joins section as a guide, 
write a query that shows each department along with the name of the current manager for that department.
Find the name of all departments currently managed by women.
Find the current titles of employees currently working in the Customer Service department.
Find the current salary of all current managers.
Bonus Find the names of all current employees, their department name, and their current manager's name .
... 240,124 Rows in total
*/





