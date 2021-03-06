CREATE DATABASE school;
\c school;
CREATE TABLE classes( id int PRIMARY KEY, standard int not null, strength int not null );
CREATE TABLE parents( id int PRIMARY KEY, name varchar(30) not null, phonenumber int not null );
CREATE TABLE students( id int PRIMARY KEY, name varchar(30) not null, age int not null, rollnumber int default 0, class int references classes(id), parent int references parents(id), dob varchar(12) default '01-01-2000'  );
\d students;
CREATE DATABASE school2;
\c school2;
CREATE TABLE classes();
CREATE TABLE parents();
CREATE TABLE students();
ALTER TABLE classes ADD COLUMN id int PRIMARY KEY, ADD COLUMN standard int not null, ADD COLUMN strength int not null;
ALTER TABLE parents ADD COLUMN id int PRIMARY KEY, ADD COLUMN name varchar(30) not null, ADD COLUMN phonenumber int not null;
ALTER TABLE students ADD COLUMN id int PRIMARY KEY, ADD COLUMN name varchar(30) not null, ADD COLUMN age int not null, ADD COLUMN rollnumber int default 0, ADD COLUMN class int references classes(id), ADD COLUMN parent int references parents(id), ADD COLUMN dob varchar(12) default '01-01-2000';
\d students;