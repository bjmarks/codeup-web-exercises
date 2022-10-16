CREATE TABLE `movies`.`theater_room` (
  `room_id` INT NOT NULL,
  `movie_id` INT NULL,
  `show_time` INT NULL,
  `seats_in_room` INT NULL,
  `tickets_sold` INT NULL,
  PRIMARY KEY (`room_id`));

CREATE TABLE `movies`.`seats` (
  `seats_id` INT NOT NULL,
  `seat_row` INT NULL,
  `seat_letter` VARCHAR(45) NULL,
  `seat_region` VARCHAR(45) NULL,
  PRIMARY KEY (`seats_id`));

CREATE TABLE `movies`.`tickets` (
  `ticket_id` INT NOT NULL,
  `ticket_type` ENUM('MATINEE', 'CHILD', 'SENIOR', '3D', 'ADULT', 'MILITARY') NULL DEFAULT 'ADULT',
  `price` FLOAT NULL,
  PRIMARY KEY (`ticket_id`));
  ALTER TABLE `movies`.`tickets` 
ADD COLUMN `show_id` INT NULL AFTER `price`,
ADD COLUMN `seat_id` VARCHAR(45) NULL AFTER `show_id`;


CREATE TABLE `movies`.`showtimes` (
  `show_time` INT NOT NULL,
  `movie_id` INT NULL,
  PRIMARY KEY (`show_time`));
  ALTER TABLE `movies`.`showtimes` 
ADD COLUMN `show_date` DATE NULL AFTER `movie_id`,
CHANGE COLUMN `show_time` `show_id` INT NOT NULL ;


CREATE TABLE `movies`.`theater` (
  `theater_room` INT NOT NULL,
  `room_availibe` TINYINT NULL,
  `seats_in_room` VARCHAR(45) NULL,
  PRIMARY KEY (`theater_room`));

CREATE TABLE `movies_users`.`orders` (
  `order_id` INT NOT NULL,
  `user_id` INT NULL,
  `ticket_type` INT NULL,
  `purchase_date` DATETIME NULL,
  `show_time` TIME NULL,
  `seats_id` INT NULL,
  `theater_room` INT NULL,
  PRIMARY KEY (`order_id`));

CREATE TABLE `movies_users`.`users` (
  `user_id` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

CREATE TABLE `movies`.`movies` (
  `movie_id` INT NOT NULL,
  `movie_name` VARCHAR(45) NULL,
  `run_time` FLOAT NULL,
  `year_release` YEAR(4) NULL,
  `release_date` DATE NULL,
  `days_in_box_office` INT NULL,
  `pull_date` DATE NULL,
  `is_box_office` ENUM('YES', 'NO') NULL DEFAULT 'NO',
  PRIMARY KEY (`movie_id`));
/*
For each of these exercises, we'll be designing a database. You should use scratch paper or take notes for the database design, but you don't need to actually create these databases in MySQL. Similarly, you should write out the example queries, but you don't need to actually run them.

Adlister Application

We'll be building out the entire AdLister project in a later module, but for now, let's design the database! The AdLister is a small scale Craigslist clone where users can post ads for items.

Specifications

Users sign up for the site with an email and password
Users create ads with a title and description and category.
Each ad is associated with the user that created it.
An ad can be in one or more categories (for example, "help wanted", "giveaway", or "furniture")
Queries

Write SQL queries to answer the following questions:

For a given ad, what is the email address of the user that created it?
For a given ad, what category, or categories, does it belong to?
For a given category, show all the ads that are in that category.
For a given user, show all the ads they have posted.
Bonus: Quiz Application

Design a database for a quiz-taking application.

Specifications

Administrators create questions
Administrators create answers for each question
Each question should have one correct answer
Administrators create quizzes
Quizzes have one or more questions associated with them
Students (users) take quizzes
The application should record a student's answers for each question on the quiz
Queries

For a given student, calculate their score on a given quiz.
For a given quiz, find how many students have taken it.
Bonus

Allow questions to have multiple correct answers
*/
