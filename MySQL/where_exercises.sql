# USE employees;
# SELECT * employees WHERE first_name IN ('Irena', 'Vidya', 'Maya');
# SELECT * employees WHERE last_name LIKE 'E%';
# SELECT * employees WHERE last_name LIKE '%q%';
# SELECT * employees WHERE first_name = 'Irena' OR 'Vidya' OR 'Maya';
# SELECT * employees WHERE (first_name = 'Irena' OR 'Vidya' OR 'Maya') AND (gender = 'm');
# SELECT * employees WHERE last_name LIKE 'E%' OR '%E';
# SELECT * employees WHERE last_name LIKE 'E%E';
# SELECT * employees WHERE (last_name NOT LIKE '%qu%') AND (last_name LIKE '%q%');
