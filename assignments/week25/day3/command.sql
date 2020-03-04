CREATE DATABASE songsdb;
\c songsdb;
CREATE TABLE genres ( id int PRIMARY KEY, name varchar(10), origin varchar(10) );
CREATE TABLE languages ( id int PRIMARY KEY, name varchar(20), origin varchar(10) );
CREATE TABLE awards ( id int PRIMARY KEY, name varchar(20), category varchar(10) );
CREATE TABLE songs( id int PRIMARY KEY, name varchar(20), length int, year int, movie varchar(30), genre int references genres(id), award int references awards(id), language int references languages(id) );
CREATE TABLE singers( id int PRIMARY KEY, name varchar(20), age int, experience int, gender varchar(10), song int references songs(id), award int references awards(id), language int references languages(id), isclasical varchar(10) );
ALTER TABLE songs ADD COLUMN singer int references singers(id);