-- Create a new database named testing123
# CREATE DATABASE testing123;
-- List all databases, make sure your new database is in the list.
# SHOW DATABASES;
-- Show the SQL to recreate your database.
# DROP DATABASE IF EXISTS testing123;
# CREATE DATABASE testing123;
-- Switch to your new database using the USE statement.
# USE testing123;
-- Delete your new database.
# DROP DATABASE testing123;
-- List all databases, make sure your new database is not in the list.
# SHOW DATABASES;
-- Try dropping your database again, make sure the command succeeds even though the database is now missing.
# DROP DATABASE testing123;
-- Create a new database called codeup_test_db and user codeup_test_user. 
# CREATE DATABASE codeup_test_db;
# CREATE USER 'codeup_test_user'@'localhost' IDENTIFEID BY 'codey';
-- Give codeup_test_user all permissions only on codeup_test_db.
# GRANT ALL ON codeup_test_db.* TO 'codeup_test_user'@'localhost' WITH GRANT OPTION;
-- Make sure to remember this new user's password.
