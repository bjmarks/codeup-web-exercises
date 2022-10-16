-- Log in to the MySQL server as root user
-- Create a new user called joe that can log in from localhost. Give joe a memorable password. Do not grant any privileges to joe.
# CREATE USER 'joe'@'localhost' IDENTIFIED BY 'joesSecretPass123';
-- Use the query below to make sure joe has been created and has a password.
# SELECT user, host FROM mysql.user;
-- Exit mysql and then connect again as joe.
-- Create a new user named anne. Give anne her own password.
# CREATE USER 'anne'@'localhost' IDENTIFIED BY 'annebunny69';
-- Grant all privileges to anne on mysql.user. Do not give her the ability to grant those privileges to others.
# GRANT ALL ON mysql.user TO 'anne'@'localhost';
-- Exit, and then connect as anne.
-- Create a user named sally and try to grant sally all permissions on the mysql.user table. Does this work?
# CREATE USER 'sally'@'localhost' IDENTIFIED BY 'ragdoll1996';
# GRANT ALL ON mysql.user TO 'sally'@'localhost';
-- Exit and reconnect as root.
-- Create a new user named jean. Give jean a sensible password.
# CREATE USER 'jean'@'localhost' IDENTIFIED BY 'joemama69420';
-- Give jean read-only permissions to the entire database server.
# GRANT SELECT ON *.* TO 'jean'@'localhost';
-- Refer back to the previous exercise, try those same select queries.
-- Copy and paste the following query.
# INSERT INTO mysql.user (Host, User) VALUES ('localhost', 'randal');
-- Exit and reconnect as root.
-- Drop all our previous users.
# DROP USER 'joe'@'localhost';
# DROP USER 'anne'@'localhost';
# DROP USER 'sally'@'localhost';
# DROP USER 'jean'@'localhost';
# DROP USER 'mark'@'localhost';
-- Create a new database administrator.
-- This user should have all permissions on all tables, as well as the ability to grant permissions to other users.
# CREATE USER 'admin'@'localhost' IDENTIFIED BY 'password';
# GRANT ALL ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
-- The username should be the same as the username on your mac. 
-- You can run the command whoami (from your shell, not from mysql) to find this out if you are not sure.
-- Make sure to choose a password you will remember.
/*
  If you are trying to log in to MySQL as a user that has the same username as the user you are logged in to your computer as,
  you will not need to specify the -u option.
  If you followed the above steps, you should be able to connect to MySQL with just
  # mysql -p
*/
