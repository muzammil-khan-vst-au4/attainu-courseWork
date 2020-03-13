-- FIND

-- Assume company_address as city a/q

SELECT COUNT(*), department from company_data group by department;
SELECT COUNT(gender), department from company_data WHERE gender='Male' group by department;
SELECT COUNT(gender), department from company_data WHERE gender='Female' group by department;
SELECT SUM(salary), department from company_data group by department;
SELECT SUM(salary), department from company_data WHERE gender='Male' group by department;
SELECT SUM(salary), department from company_data WHERE gender='Female' group by department;
SELECT COUNT(*), company_address from company_data group by company_address;
SELECT * from company_data LIMIT 20 OFFSET 30;
SELECT * from company_data WHERE salary > 5 AND department='Sales' AND id>50;
SELECT AVG(salary), department, company_address from company_data group by department,company_address;

-- JOIN

CREATE TABLE singers ( id int PRIMARY KEY, name varchar(20), song_name varchar(20), song_year int );
INSERT INTO singers (id , name , song_name, song_year) values (1, 'Mika Singh', 'Pungi', 2010);
INSERT INTO singers (id , name , song_name, song_year) values (2, 'Neeti Mohan', 'Jiya Re', 2011);
INSERT INTO singers (id , name , song_name, song_year) values (3, 'Neha Kakkar', 'Manali Trance', 2012);
INSERT INTO singers (id , name , song_name, song_year) values (4, 'Amit Trivedi', 'Pardesi', 2013);
INSERT INTO singers (id , name , song_name, song_year) values (5, 'A. R. Rahman', 'Vande Mataram', 2012);
INSERT INTO singers (id , name , song_name, song_year) values (6, 'Bohemia', 'Adhi Raat', 2011);
INSERT INTO singers (id , name , song_name, song_year) values (7, 'Guru Randhawa', 'Suit', 2018);
INSERT INTO singers (id , name , song_name, song_year) values (8, 'Kumar Sanu', 'Raja Ko Rani Se', 2000);
INSERT INTO singers (id , name , song_name, song_year) values (9, 'Suresh Wadkar', 'Megha re', 2019);
INSERT INTO singers (id , name , song_name, song_year) values (10, 'Arijit Singh', 'Tum hi ho', 2002);

CREATE TABLE songs ( id int PRIMARY KEY, name varchar(20), song_year int );
INSERT INTO songs (id , name , song_year) values (1, 'Pungi', 2010);
INSERT INTO songs (id , name , song_year) values (2, 'Pardesi', 2013);
INSERT INTO songs (id , name , song_year) values (3, 'Raja Ko Rani Se', 2000);
INSERT INTO songs (id , name , song_year) values (4, 'Jiya Re', 2011);
INSERT INTO songs (id , name , song_year) values (5, 'Manali Trance', 2012);
INSERT INTO songs (id , name , song_year) values (6, 'Tum hi ho', 2002);
INSERT INTO songs (id , name , song_year) values (7, 'Pardesi Pardesi', 2005);
INSERT INTO songs (id , name , song_year) values (8, 'Shayad', 2020);
INSERT INTO songs (id , name , song_year) values (9, 'Superstar', 2019);
INSERT INTO songs (id , name , song_year) values (10, 'Hui Malang', 2020);

SELECT * from singers JOIN songs on singers.song_name = songs.name;
SELECT * from singers LEFT JOIN songs on singers.song_name = songs.name;
SELECT * from singers RIGHT JOIN songs on singers.song_name = songs.name;
SELECT * from singers FULL JOIN songs on singers.song_name = songs.name;
SELECT * from singers LEFT JOIN songs on singers.song_name = songs.name WHERE songs.name is null;
SELECT * from singers RIGHT JOIN songs on singers.song_name = songs.name WHERE singers.song_name is null;
SELECT * from singers FULL JOIN songs on singers.song_name = songs.name WHERE singers.song_name is null OR songs.name is null;