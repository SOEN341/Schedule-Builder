-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2016 at 11:50 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `341`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `courseId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `courseCode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `semester` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `credits` double NOT NULL,
  PRIMARY KEY (`courseId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=28 ;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`courseId`, `courseCode`, `semester`, `description`, `name`, `credits`) VALUES
(1, 'COMP 248', 'Fall', 'Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.', 'Object-Oriented Programming I', 3),
(2, 'COMP 248', 'Winter', ' Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.', 'Object-Oriented Programming I', 3),
(3, 'COMP 249', 'Summer', 'Design of classes. Inheritance. Polymorphism. Static and dynamic binding.', 'Object-Oriented Programming II', 3),
(4, 'COMP 249', 'Winter', 'Design of classes. Inheritance. Polymorphism. Static and dynamic binding.', 'Object-Oriented Programming II', 3),
(5, 'COMP 335', 'Fall', 'Finite state automata and regular languages. Push-down automata and context-free languages.', 'Introduction to Theoretical Computer Science', 3),
(6, 'COMP 345', 'Fall', 'Introduction to C++. I/O with stream classes. Pointers and their uses.', 'Advanced Programming Design with C++', 4),
(7, 'COMP 345', 'Winter', 'Introduction to C++. I/O with stream classes. Pointers and their uses.', 'Advanced Programming Design with C++', 4),
(8, 'COMP 346', 'Winter', 'Fundamentals of operating system functionalities, design and implementation.', 'Operating Systems', 4),
(9, 'COMP 348', 'Summer', 'Survey of programming paradigms: Imperative, functional, and logic programming', 'Principles of Programming Languages', 3),
(10, 'COMP 348', 'Fall', 'Survey of programming paradigms: Imperative, functional, and logic programming', 'Principles of Programming Languages', 3),
(11, 'COMP 352', 'Summer', 'Abstract data types: stacks and queues, trees, priority queues, dictionaries', 'Data Structures and Algorithms', 3),
(12, 'COMP 352', 'Fall', 'Abstract data types: stacks and queues, trees, priority queues, dictionaries', 'Data Structures and Algorithms', 3),
(13, 'SOEN 228', 'Winter', 'Processor structure, Data and Instructions, Instruction Set Processor', 'System Hardware', 4),
(14, 'SOEN 287', 'Summer', 'Internet architecture and protocols. Web applications through clients and servers.', 'Web Programming', 3),
(15, 'SOEN 287', 'Winter', 'Internet architecture and protocols. Web applications through clients and servers.', 'Web Programming', 3),
(16, 'SOEN 321', 'Fall', 'Protocol layers and security protocols. Intranets and extranets.', 'Information Systems Security', 3),
(17, 'SOEN 331', 'Winter', 'Static and dynamic checking. Method specification using preconditions and postconditions.', 'Introduction to Formal Methods for Software Engineering', 3),
(18, 'SOEN 341', 'Winter', 'Basic principles of software engineering. Introduction to software process models.', 'Software Process', 3),
(19, 'SOEN 342', 'Fall', 'Requirements engineering. Functional and non-functional requirements.', 'Software Requirements and Specifications', 3),
(20, 'SOEN 343', 'Fall', 'From requirements to design to implementation. Planned vs. evolutionary design and refactoring.', 'Software Architecture and Design I', 3),
(21, 'SOEN 344', 'Winter', 'Architectural activities, roles, and deliverables. Architectural view models.', 'Software Architecture and Design II', 3),
(22, 'SOEN 345', 'Winter', 'Testing strategies. Specification-based vs. code-based, black-box vs. white-box, functional vs. structural testing', 'Software Testing, Verification and Quality Assurance', 3),
(23, 'SOEN 384', 'Fall', 'Organization of large software development. Roles of team members, leaders, managers and etc', 'Management, Measurement and Quality Control', 3),
(24, 'SOEN 385', 'Winter', 'Mathematical modelling of dynamical systems; block diagrams; feedback; open and closed loops.', 'Control Systems and Applications', 3),
(25, 'SOEN 390', 'Winter', 'Students work in teams to design and implement a software project from requirements provided by the coordinator.', 'Software Engineering Team Design Project', 3.5),
(26, 'SOEN 422', 'Fall', 'Characteristics of embedded systems. Microcontroller architectures and their software.', 'Embedded Systems and Software', 4),
(27, 'SOEN 490', 'Whole Year', 'Students work in teams of between six and nine members to construct a significant software application.', 'Capstone Software Engineering Design Project', 4);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
