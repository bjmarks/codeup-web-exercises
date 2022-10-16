# USE codeup_test_db;
use benjamin;
TRUNCATE albums;
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Michael Jackson', 'Thriller', 1982, '70', 'Pop, post-disco, funk, rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('AC/DC', 'Back in Black', 1980, '50', 'Hard rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Whitney Houston / various artists','The Bodyguard','1992','45','R&B, soul, pop, soundtrack	');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Pink Floyd','The Dark Side of the Moon','1973','45','Progressive rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Eagles','Their Greatest Hits (1971–1975)','1976','44','Country rock, soft rock, folk rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Eagles','Hotel California','1976','42','Soft rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Shania Twain','Come On Over','1997','40','Country, pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Fleetwood Mac','Rumour','1977','40','Soft rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Bee Gees / Various artists','Saturdy Night Fever','1977','40','Disco');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Led Zeppelin','Led Zepelin IV','1971','37','Hard rock, heavy metal, folk rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Michael Jackson','Bad','1987','35','Pop, rhythm and blues, funk and rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Meat Loaf','Bat Ou of Hell	','1977','22','Hard rock, glam rock, progressive rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Alanis Morissette','JaggedLittle Pill','1995','33','Alternative rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Various artists	','Dirty ancing ','1987','32','Pop, rock, R&B');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Celine Dion','Fallin into You ','1996','32','Pop, soft rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Adele','21','2011','31','Pop, soul');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('The Beatles','1','2000','31','Rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Metallica','Metallica','1991','31','Heavy metal');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Celine Dion','Let''s Talk About Love','1997','31','Pop, soft rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Guns N'' Roses','Appetite for Destruction','1987','30','Hard rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Bob Marley & The Wailers','Legend: The Best of Bob Marley & The Wailers','1984','30','Reggae');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Bruce Springsteen','Born in the U.S.A.','1984','30','Heartland rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('ABBA','Gold: Greatest Hits','1992','30','Pop, disco');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Dire Straits','Brothers in Arms','1985','30','Roots rock, blues rock, soft rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Santana','Supernatural','1999','30','Latin rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Madonna','The Immaculate Collection','1990','30','Pop, dance');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Pink Floyd','The Wall','1979','30','Progressive rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('The Beatles','Sgt. Pepper''s Lonely Hearts Club Band','1967','30','Rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Michael Jackson','Dangerous','1991','30','New jack swing, R&B and pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('The Beatles','Abbey Road','1969','30','Rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Norah Jones','Come Away with Me','2002','19.9','Jazz');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Mariah Carey','Music Box','1993','17.8','Pop, R&B');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Various artists','Grease: The Original Soundtrack from the Motion Picture','1978','15','Rock and roll');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Eminem','The Eminem Show','2002','19.1','Hip hop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('James Horner','Titanic: Music from the Motion Picture','1997','18.1','Film score');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Nirvana','Nevermind','1991','17.5','Grunge, alternative rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Eric Clapton','Unplugged','1992','17','Acoustic rock, acoustic blues');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Queen','Greatest Hits','1981','20.6','Rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Britney Spears','...Baby One More Time','1999','19.9','Pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Phil Collins','No Jacket Required','1985','17.7','Pop rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Eminem','The Marshall Mathers LP','2000','17.5','Hip hop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Linkin Park','Hybrid Theory','2000','17.2','Nu metal, rap metal, alternative metal');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('U2','The Joshua Tree','1987','16.7','Rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Whitney Houston','Whitney Houston','1985','16.6','Pop, R&B');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Prince and The Revolution','Purple Rain','1984','15.7','Pop rock, new wave, R&B');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Bon Jovi','Slippery When Wet','1986','15.3','Hard rock, glam metal');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Carole King','Tapestry','1971','15.1','Pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Madonna','True Blue','1986','14.5','Pop, dance');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Simon & Garfunkel','Bridge over Troubled Water','1970','12.5','Folk rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('George Michael','Faith','1987','13.9','Pop, R&B, funk, soul');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Elton John','Greatest Hits','1974','19.1','Pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Backstreet Boys','Millennium','1999','18.4','Pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Spice Girls','Spice','1996','16.4','Pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Ace of Base','Happy Nation/The Sign','1993','14.4','Pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Adele','25','2015','19','Soul, pop, R&B');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Michael Jackson','HIStory: Past, Present and Future, Book I','1995','15.1','R&B, pop and hip hop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Celine Dion','All the Way... A Decade of Song','1999','14.4','Pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Madonna','Like a Virgin','1984','16.2','Pop, dance');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Bon Jovi','Cross Road','1994','11.6','Hard rock, glam metal');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Elvis Presley','Elvis', 'Christmas Album','1957','20.8','Christmas, pop, gospel, rock and roll');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Boston','Boston','1976','18.1','Arena rock, hard rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Mariah Carey','Daydream','1995','15.2','Pop, R&B');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Green Day','Dookie','1994','14.6','Pop punk, punk rock, alternative rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Shania Twain','The Woman in Me','1995','14.5','Country, pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Britney Spears','Oops!... I Did It Again','2000','14.4','pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Whitney Houston','Whitney','1987','14.4','Pop, R&B');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Def Leppard','Hysteria','1987','13.9','Hard rock, glam metal');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Lauryn Hill','The Miseducation of Lauryn Hill','1998','13.7','Neo Soul, R&B and Hip Hop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Tracy Chapman','Tracy Chapman','1988','13.3','Folk rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Lionel Richie','Can''t Slow Down','1983','12.3','Pop, R&B, soul');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Michael Jackson','Off the Wall','1979','11.7','Disco, pop, funk and R&B');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Fugees','The Score','1996','11.6','Alternative hip hop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Oasis','(What''s the Story) Morning Glory?','1995','11.6','Britpop, rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Celine Dion','The Colour of My Love','1993','11.1','Pop');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Elton John','Goodbye Yellow Brick Road','1973','9.6','rock, pop rock, glam rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Pink Floyd','Wish You Were Here','1975','9.2','Progressive rock, art rock, experimental rock');
# INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES ('Various artists','Flashdance: Original Soundtrack from the Motion Picture','1983','7.9','Electro, synthpop');
-- Or you can do this.
INSERT INTO albums (`artist`, `name`, `release_date`, `sales`, `genre`) VALUES 
	('Michael Jackson', 'Thriller', 1982, '70', 'Pop, post-disco, funk, rock'),
	('AC/DC', 'Back in Black', 1980, '50', 'Hard rock'),
	('Whitney Houston / various artists','The Bodyguard','1992','45','R&B, soul, pop, soundtrack'),
	('Pink Floyd','The Dark Side of the Moon','1973','45','Progressive rock'),
	('Eagles','Their Greatest Hits (1971–1975)','1976','44','Country rock, soft rock, folk rock'),
	('Eagles','Hotel California','1976','42','Soft rock'),
	('Shania Twain','Come On Over','1997','40','Country, pop'),
	('Fleetwood Mac','Rumour','1977','40','Soft rock'),
	('Bee Gees / Various artists','Saturdy Night Fever','1977','40','Disco'),
	('Led Zeppelin','Led Zepelin IV','1971','37','Hard rock, heavy metal, folk rock'),
	('Michael Jackson','Bad','1987','35','Pop, rhythm and blues, funk and rock'),
	('Meat Loaf','Bat Ou of Hell	','1977','22','Hard rock, glam rock, progressive rock'),
	('Alanis Morissette','JaggedLittle Pill','1995','33','Alternative rock'),
	('Various artists	','Dirty ancing ','1987','32','Pop, rock, R&B'),
	('Celine Dion','Fallin into You ','1996','32','Pop, soft rock'),
	('Adele','21','2011','31','Pop, soul'),
	('The Beatles','1','2000','31','Rock'),
	('Metallica','Metallica','1991','31','Heavy metal'),
	('Celine Dion','Let''s Talk About Love','1997','31','Pop, soft rock'),
	('Guns N'' Roses','Appetite for Destruction','1987','30','Hard rock'),
	('Bob Marley & The Wailers','Legend: The Best of Bob Marley & The Wailers','1984','30','Reggae'),
	('Bruce Springsteen','Born in the U.S.A.','1984','30','Heartland rock'),
	('ABBA','Gold: Greatest Hits','1992','30','Pop, disco'),
	('Dire Straits','Brothers in Arms','1985','30','Roots rock, blues rock, soft rock'),
	('Santana','Supernatural','1999','30','Latin rock'),
	('Madonna','The Immaculate Collection','1990','30','Pop, dance'),
	('Pink Floyd','The Wall','1979','30','Progressive rock'),
	('The Beatles','Sgt. Pepper''s Lonely Hearts Club Band','1967','30','Rock'),
	('Michael Jackson','Dangerous','1991','30','New jack swing, R&B and pop'),
	('The Beatles','Abbey Road','1969','30','Rock'),
	('Norah Jones','Come Away with Me','2002','19.9','Jazz'),
	('Mariah Carey','Music Box','1993','17.8','Pop, R&B'),
	('Various artists','Grease: The Original Soundtrack from the Motion Picture','1978','15','Rock and roll'),
	('Eminem','The Eminem Show','2002','19.1','Hip hop'),
	('James Horner','Titanic: Music from the Motion Picture','1997','18.1','Film score'),
	('Nirvana','Nevermind','1991','17.5','Grunge, alternative rock'),
	('Eric Clapton','Unplugged','1992','17','Acoustic rock, acoustic blues'),
	('Queen','Greatest Hits','1981','20.6','Rock'),
	('Britney Spears','...Baby One More Time','1999','19.9','Pop'),
	('Phil Collins','No Jacket Required','1985','17.7','Pop rock'),
	('Eminem','The Marshall Mathers LP','2000','17.5','Hip hop'),
	('Linkin Park','Hybrid Theory','2000','17.2','Nu metal, rap metal, alternative metal'),
	('U2','The Joshua Tree','1987','16.7','Rock'),
	('Whitney Houston','Whitney Houston','1985','16.6','Pop, R&B'),
	('Prince and The Revolution','Purple Rain','1984','15.7','Pop rock, new wave, R&B'),
	('Bon Jovi','Slippery When Wet','1986','15.3','Hard rock, glam metal'),
	('Carole King','Tapestry','1971','15.1','Pop'),
	('Madonna','True Blue','1986','14.5','Pop, dance'),
	('Simon & Garfunkel','Bridge over Troubled Water','1970','12.5','Folk rock'),
	('George Michael','Faith','1987','13.9','Pop, R&B, funk, soul'),
	('Elton John','Greatest Hits','1974','19.1','Pop'),
	('Backstreet Boys','Millennium','1999','18.4','Pop'),
	('Spice Girls','Spice','1996','16.4','Pop'),
	('Ace of Base','Happy Nation/The Sign','1993','14.4','Pop'),
	('Adele','25','2015','19','Soul, pop, R&B'),
	('Michael Jackson','HIStory: Past, Present and Future, Book I','1995','15.1','R&B, pop and hip hop'),
	('Celine Dion','All the Way... A Decade of Song','1999','14.4','Pop'),
	('Madonna','Like a Virgin','1984','16.2','Pop, dance'),
	('Bon Jovi','Cross Road','1994','11.6','Hard rock, glam metal'),
	('Elvis Presley','Elvis', 'Christmas Album','1957','20.8','Christmas, pop, gospel, rock and roll'),
	('Boston','Boston','1976','18.1','Arena rock, hard rock'),
	('Mariah Carey','Daydream','1995','15.2','Pop, R&B'),
	('Green Day','Dookie','1994','14.6','Pop punk, punk rock, alternative rock'),
	('Shania Twain','The Woman in Me','1995','14.5','Country, pop'),
	('Britney Spears','Oops!... I Did It Again','2000','14.4','pop'),
	('Whitney Houston','Whitney','1987','14.4','Pop, R&B'),
	('Def Leppard','Hysteria','1987','13.9','Hard rock, glam metal'),
	('Lauryn Hill','The Miseducation of Lauryn Hill','1998','13.7','Neo Soul, R&B and Hip Hop'),
	('Tracy Chapman','Tracy Chapman','1988','13.3','Folk rock'),
	('Lionel Richie','Can''t Slow Down','1983','12.3','Pop, R&B, soul'),
	('Michael Jackson','Off the Wall','1979','11.7','Disco, pop, funk and R&B'),
	('Fugees','The Score','1996','11.6','Alternative hip hop'),
	('Oasis','(What''s the Story) Morning Glory?','1995','11.6','Britpop, rock'),
	('Celine Dion','The Colour of My Love','1993','11.1','Pop'),
	('Elton John','Goodbye Yellow Brick Road','1973','9.6','rock, pop rock, glam rock'),
	('Pink Floyd','Wish You Were Here','1975','9.2','Progressive rock, art rock, experimental rock'),
	('Various artists','Flashdance: Original Soundtrack from the Motion Picture','1983','7.9','Electro, synthpop');
