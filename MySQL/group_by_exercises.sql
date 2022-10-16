# SELECT DISTINCT titles from titles;
# SELECT * FROM employees WHERE last_name LIKE 'E%E';
# SELECT last_name FROM employees WHERE last_name LIKE 'E%E' GROUP BY last_name;
# SELECT first_name, last_name AS full_name FROM employees WHERE last_name LIKE 'E%E' GROUP BY last_name;
# SELECT * FROM employees WHERE last_name LIKE '%q%' AND last_name NOT LIKE '%qu%' GROUP BY last_name;
# SELECT COUNT(last_name), last_name FROM employees WHERE last_name LIKE '%q%' AND last_name NOT LIKE '%qu%' GROUP BY last_name; 
# SELECT COUNT(*), last_name FROM employees WHERE last_name LIKE '%q%' AND last_name NOT LIKE '%qu%' GROUP BY last_name;
# SELECT COUNT(*), gender FROM employees WHERE first_name = 'Irena' OR first_name = 'Vidya' OR first_name = 'Maya' GROUP BY gender;
