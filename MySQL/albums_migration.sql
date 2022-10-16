# USE `codeup_test_db`;
USE benjamin;
DROP TABLE IF EXISTS `albums`;
CREATE TABLE `albums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `release_date` year(4) NOT NULL,
  `sales` float NOT NULL,
  `genre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) 
