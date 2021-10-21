SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS student;
CREATE TABLE student (
	name varchar(100) NOT NULL DEFAULT '',
    author varchar(100) NOT NULL DEFAULT '',
    yearpublished int NOT NULL DEFAULT 0,
    publisher varchar(100) NOT NULL DEFAULT '',
    pagecount int NOT NULL DEFAULT 0,
    msrp int NOT NULL DEFAULT 0
);

INSERT INTO student (name, author, yearpublished, publisher, pagecount, msrp) VALUES 
('The Hobbit', 'JRR Tolkien', 1937, 'Random House', 231, 18),
('Harry Potter', 'JK Rowling', 1997, 'Harper Collins', 212, 18),
('The Little Prince', 'Antoine de Saint Expuery', 1943, 'Random House', 182, 14),
('Fault in Our Stars', 'John Green', 2014, 'Macmillian', 191, 12) 
;

-- SELECT * FROM students;

DROP TABLE IF EXISTS offer;
CREATE TABLE offer (
	id int PRIMARY KEY AUTO_INCREMENT,
    studentId int NOT NULL REFERENCES student(id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
	companyName VARCHAR(24) NOT NULL DEFAULT '',
    salary int NOT NULL DEFAULT 0,
    bonus int NOT NULL DEFAULT 0,
	offerDate date NOT NULL DEFAULT(CURRENT_DATE)
);

-- Student 1 has no offers, Student 2 has 3 offers, Student 3 has one offer
INSERT INTO offer(id, studentId, companyName, salary, bonus, offerDate) VALUES
  (1, 2, 'KPMG', 95000, 7000, '2021-09-30'),
  (2, 2, 'Deloitte Digital', 94000, 12000, '2021-10-03'),
  (3, 2, 'IU, ISGP', 54000, 0, '2021-10-05'),
  (4, 3, 'Amazon', 122000, 11000, '2021-10-15')
;

CREATE DATABASE IF NOT EXISTS booksdb;
USE booksdb;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
    bookname varchar(100) NOT NULL DEFAULT '',
    author varchar(100) NOT NULL DEFAULT '',
    yearpublished int NOT NULL DEFAULT 0,
    publisher varchar(100) NOT NULL DEFAULT '',
    pagecount int NOT NULL DEFAULT 0,
    msrp int NOT NULL DEFAULT 0
    
);

INSERT INTO books (bookname, author, yearpublished, publisher, pagecount, msrp) VALUES 
('The Hobbit', 'JRR Tolkien', 1937, 'Random House', 231, 18),
('Harry Potter', 'JK Rowling', 1997, 'Harper Collins', 212, 18),
('The Little Prince', 'Antoine de Saint Expuery', 1943, 'Random House', 182, 14),
('Fault in Our Stars', 'John Green', 2014, 'Macmillian', 191, 12) 
;
-- SELECT * FROM students;

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';