# SELECT concat_ws(' ', first_name, last_name) as full_name FROM employees WHERE last_name LIKE 'e%e';
# SELECT * FROM employees where month(birth_date) = 12 AND day(birth_date) = 25;
# SELECT * FROM employees where month(birth_date) = 12 AND day(birth_date) = 25 and year(hire_date) like '199_';
# SELECT * FROM employees where birth_date LIKE '%12-25' and year(hire_date) between 1990 and 1999 order by birth_date, hire_date desc;
# SELECT *, datediff(now(), hire_date) AS work_days FROM employees WHERE birth_date LIKE '%12-25' AND year(hire_date) LIKE '199_';
