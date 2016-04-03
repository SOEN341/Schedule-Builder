-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2016 at 08:43 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `341db`
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=133 ;

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
(27, 'SOEN 490', 'Fall-Winter', 'Students work in teams of between six and nine members to construct a significant software application.', 'Capstone Software Engineering Design Project', 4),
(28, 'ENGR 201', 'Summer', 'Health and safety issues for engineering projects: Quebec and Canadian legislation; safe work practices', 'Professional Practice and Responsibility', 1.5),
(29, 'ENGR 201', 'Summer', 'Health and safety issues for engineering projects: Quebec and Canadian legislation; safe work practices', 'Professional Practice and Responsibility', 1.5),
(30, 'ENGR 201', 'Fall', 'Health and safety issues for engineering projects: Quebec and Canadian legislation; safe work practices', 'Professional Practice and Responsibility', 1.5),
(31, 'ENGR 201', 'Winter', 'Health and safety issues for engineering projects: Quebec and Canadian legislation; safe work practices', 'Professional Practice and Responsibility', 1.5),
(32, 'ENGR 202', 'Summer', 'Introduction to the concept of sustainable development and the approaches for achieving it.', 'Sustainable Development and Environmental Stewardship', 1.5),
(33, 'ENGR 202', 'Fall', 'Introduction to the concept of sustainable development and the approaches for achieving it.', 'Sustainable Development and Environmental Stewardship', 1.5),
(34, 'ENGR 202', 'Winter', 'Introduction to the concept of sustainable development and the approaches for achieving it.', 'Sustainable Development and Environmental Stewardship', 1.5),
(35, 'ENGR 213', 'Summer', 'This course introduces Engineering students to the theory and application of ordinary differential equations.', 'Applied Ordinary Differential Equations', 3),
(36, 'ENGR 213', 'Fall', 'This course introduces Engineering students to the theory and application of ordinary differential equations.', 'Applied Ordinary Differential Equations', 3),
(37, 'ENGR 213', 'Winter', 'This course introduces Engineering students to the theory and application of ordinary differential equations.', 'Applied Ordinary Differential Equations', 3),
(38, 'ENGR 233', 'Summer', 'This course introduces Engineering students to the theory and application of advanced calculus.', 'Applied Advanced Calculus', 3),
(39, 'ENGR 233', 'Fall', 'This course introduces Engineering students to the theory and application of advanced calculus.', 'Applied Advanced Calculus', 3),
(40, 'ENGR 233', 'Winter', 'This course introduces Engineering students to the theory and application of advanced calculus.', 'Applied Advanced Calculus', 3),
(41, 'ENCS 282', 'Summer', 'Technical writing form and style. Technical and scientific papers, abstracts, reports.', 'Technical Writing and Communication', 3),
(42, 'ENCS 282', 'Fall', 'Technical writing form and style. Technical and scientific papers, abstracts, reports.', 'Technical Writing and Communication', 3),
(43, 'ENCS 282', 'Winter', 'Technical writing form and style. Technical and scientific papers, abstracts, reports.', 'Technical Writing and Communication', 3),
(44, 'ELEC 275', 'Summer', 'Fundamentals of electric circuits: Kirchoff''s laws, voltage and current sources, Ohm''s law, series and parallel circuits.', 'Principles of Electrical Engineering', 3.5),
(45, 'ELEC 275', 'Fall', 'Fundamentals of electric circuits: Kirchoff''s laws, voltage and current sources, Ohm''s law, series and parallel circuits.', 'Principles of Electrical Engineering', 3.5),
(46, 'ELEC 275', 'Winter', 'Fundamentals of electric circuits: Kirchoff''s laws, voltage and current sources, Ohm''s law, series and parallel circuits.', 'Principles of Electrical Engineering', 3.5),
(47, 'ENGR 371', 'Summer', 'Axioms of probability theory. Events. Conditional probability. Bayes theorem. Random variables. ', 'Probability and Statistics in Engineering', 3),
(48, 'ENGR 371', 'Fall', 'Axioms of probability theory. Events. Conditional probability. Bayes theorem. Random variables. ', 'Probability and Statistics in Engineering', 3),
(49, 'ENGR 371', 'Winter', 'Axioms of probability theory. Events. Conditional probability. Bayes theorem. Random variables. ', 'Probability and Statistics in Engineering', 3),
(50, 'ENGR 391', 'Summer', 'Roots of algebraic and transcendental equations; function approximation; numerical differentiation; numerical integration.', 'Numerical Methods in Engineering', 3),
(51, 'ENGR 391', 'Fall', 'Roots of algebraic and transcendental equations; function approximation; numerical differentiation; numerical integration.', 'Numerical Methods in Engineering', 3),
(52, 'ENGR 391', 'Winter', 'Roots of algebraic and transcendental equations; function approximation; numerical differentiation; numerical integration.', 'Numerical Methods in Engineering', 3),
(53, 'ENGR 301', 'Summer', 'Introduction to project delivery systems. Principles of project management; role and activity of a manager.', 'Engineering Management Principles and Economics', 3),
(54, 'ENGR 301', 'Fall', 'Introduction to project delivery systems. Principles of project management; role and activity of a manager.', 'Engineering Management Principles and Economics', 3),
(55, 'ENGR 301', 'Winter', 'Introduction to project delivery systems. Principles of project management; role and activity of a manager.', 'Engineering Management Principles and Economics', 3),
(56, 'ENGR 392', 'Summer', 'Social history of technology and of science including the industrial revolution and modern times.', 'Impact of Technology on Society', 3),
(57, 'ENGR 392', 'Fall', 'Social history of technology and of science including the industrial revolution and modern times.', 'Impact of Technology on Society', 3),
(58, 'ENGR 392', 'Winter', 'Social history of technology and of science including the industrial revolution and modern times.', 'Impact of Technology on Society', 3),
(59, 'BIOL 206', 'Winter', 'A survey of classical and contemporary developments in the study of heredity, with particular attention to human examples.', 'Elementary Genetics', 3),
(60, 'BIOL 261', 'Fall', 'Basic genetic principles, including mechanisms of meiosis and mitosis, Mendelian genetics, recombination, gene mapping, and chromosome rearrangements', 'Molecular and General Genetics', 3),
(61, 'BIOL 261', 'Winter', 'Basic genetic principles, including mechanisms of meiosis and mitosis, Mendelian genetics, recombination, gene mapping, and chromosome rearrangements', 'Molecular and General Genetics', 3),
(62, 'CHEM 217', 'Fall', 'Precipitation methods and solubility products; activity, chemical equilibria and titration curves of neutralization and complexation systems', 'Introductory Analytical Chemistry I', 3),
(63, 'CHEM 221', 'Fall', 'Basic aspects of orbitals and their role in covalent bonding; delocalization of electrons.', 'Introductory Organic Chemistry I', 3),
(64, 'CHEM 221', 'Winter', 'Basic aspects of orbitals and their role in covalent bonding; delocalization of electrons.', 'Introductory Organic Chemistry I', 3),
(65, 'CIVI 231', 'Fall', 'Basic principles of physical and structural geology with emphasis on topics related to civil engineering', 'Geology for Civil Engineers', 3),
(66, 'ELEC 321', 'Winter', 'Fundamentals underlying optical and electronic devices. The structure and growth of crystals. ', 'Introduction to Semiconductor Materials and Devices', 3.5),
(67, 'ENGR 242', 'Fall', 'Resultant of force systems; equilibrium of particles and rigid bodies; distributed forces; statically determinate systems', 'Statics', 3),
(68, 'ENGR 242', 'Winter', 'Resultant of force systems; equilibrium of particles and rigid bodies; distributed forces; statically determinate systems', 'Statics', 3),
(69, 'ENGR 243', 'Summer', 'Kinematics of a particle and rigid body; forces and accelerations; work and energy; impulse and momentum.', 'Dynamics', 3),
(70, 'ENGR 243', 'Fall', 'Kinematics of a particle and rigid body; forces and accelerations; work and energy; impulse and momentum.', 'Dynamics', 3),
(71, 'ENGR 243', 'Winter', 'Kinematics of a particle and rigid body; forces and accelerations; work and energy; impulse and momentum.', 'Dynamics', 3),
(72, 'ENGR 251', 'Summer', 'Basic principles of thermodynamics and their application to various systems composed of pure substances and their homogeneous non-reactive mixtures.', 'Thermodynamics I', 3),
(73, 'ENGR 251', 'Fall', 'Basic principles of thermodynamics and their application to various systems composed of pure substances and their homogeneous non-reactive mixtures.', 'Thermodynamics I', 3),
(74, 'ENGR 251', 'Winter', 'Basic principles of thermodynamics and their application to various systems composed of pure substances and their homogeneous non-reactive mixtures.', 'Thermodynamics I', 3),
(75, 'ENGR 361', 'Summer', 'Basic concepts and principles of fluid mechanics. Classification of fluid flow. Hydrostatic forces on plane and curved surfaces, buoyancy and stability, fluids in rigid body motion.', 'Fluid Mechanics I', 3),
(76, 'ENGR 361', 'Fall', 'Basic concepts and principles of fluid mechanics. Classification of fluid flow. Hydrostatic forces on plane and curved surfaces, buoyancy and stability, fluids in rigid body motion.', 'Fluid Mechanics I', 3),
(77, 'ENGR 361', 'Winter', 'Basic concepts and principles of fluid mechanics. Classification of fluid flow. Hydrostatic forces on plane and curved surfaces, buoyancy and stability, fluids in rigid body motion.', 'Fluid Mechanics I', 3),
(78, 'MECH 221', 'Fall', 'Relationships between properties and internal structure, atomic bonding; molecular, crystalline and amorphous structures.', 'Materials Science', 3),
(79, 'MECH 221', 'Winter', 'Relationships between properties and internal structure, atomic bonding; molecular, crystalline and amorphous structures.', 'Materials Science', 3),
(80, 'PHYS 252', 'Winter', 'Wave equation, phasors, EM waves, linear, circular and elliptical polarization, polariscope, Malus law, dichroism.', 'Optics', 3),
(81, 'COMP 371', 'Summer', 'Introduction to computer graphics and graphics hardware. Introduction to graphics API and graphics systems architecture.', 'Computer Graphics', 4),
(82, 'COMP 371', 'Fall', 'Introduction to computer graphics and graphics hardware. Introduction to graphics API and graphics systems architecture.', 'Computer Graphics', 4),
(83, 'COMP 371', 'Winter', 'Introduction to computer graphics and graphics hardware. Introduction to graphics API and graphics systems architecture.', 'Computer Graphics', 4),
(84, 'COMP 376', 'Fall', 'Introduction to design and implementation aspects of computer gaming: basic game design, storytelling and narratives, and game genres.', 'Introduction to Game Development', 4),
(85, 'COMP 472', 'Fall', 'Scope of AI. First-order logic. Automated reasoning. Search and heuristic search. Game-playing.', 'Artificial Intelligence', 4),
(86, 'COMP 472', 'Winter', 'Scope of AI. First-order logic. Automated reasoning. Search and heuristic search. Game-playing.', 'Artificial Intelligence', 4),
(87, 'COMP 476', 'Winter', 'Introduction to advanced aspects of computer games. Game engine design. Artificial Intelligence (AI): non-player character movement, coordinated movement.', 'Advanced Game Development', 4),
(88, 'COMP 477', 'Fall', 'Introduction to the algorithms, data structures, and techniques used in modelling and rendering dynamic scenes.', 'Animation for Computer Games', 4),
(89, 'COMP 353', 'Summer', 'Introduction to database management systems. Conceptual database design: the entity-relationship model. The relational data model and relational algebra.', 'Databases', 4),
(90, 'COMP 353', 'Fall', 'Introduction to database management systems. Conceptual database design: the entity-relationship model. The relational data model and relational algebra.', 'Databases', 4),
(91, 'COMP 353', 'Winter', 'Introduction to database management systems. Conceptual database design: the entity-relationship model. The relational data model and relational algebra.', 'Databases', 4),
(92, 'COMP 445', 'Fall', 'Network architectures: OSI and Internet models. Link layer: error detection, multiple access protocols, addressing. Local area networks.', 'Data Communication and Computer Networks', 4),
(93, 'COMP 445', 'Winter', 'Network architectures: OSI and Internet models. Link layer: error detection, multiple access protocols, addressing. Local area networks.', 'Data Communication and Computer Networks', 4),
(94, 'COMP 479', 'Fall', 'Basics of information retrieval (IR): boolean, vector space and probabilistic models. Tokenization and creation of inverted files. Weighting schemes.', 'Information Retrieval and Web Search', 4),
(95, 'SOEN 387', 'Fall', 'Hypertext Transfer Protocol (HTTP), web mark-up languages and encodings. Document Object Models (DOM). Client/server and layered architectures.', 'Web-Based Enterprise Application Design', 3),
(96, 'SOEN 487', 'Winter', 'Analysis and design of web services and applications. Advanced architectures for the design, deployment, and testing of large multi-server web services and applications.', 'Web Services and Applications', 4),
(97, 'AERO 480', 'Fall', 'Laboratory work provides an opportunity for students to become familiar with the real-time hardware-in-the-loop simulation and flight testing based on the Qball-X4 Quadrotor UAV.', 'Flight Control Systems', 3.5),
(98, 'AERO 482', 'Fall', '', 'Avionic Navigation Systems', 3),
(99, 'COEN 320', 'Fall', 'Fundamentals of real-time systems: definitions, requirements, design issues and applications. Real-time operating systems (RTOS) feature.', 'Introduction to Real Time Systems', 3),
(100, 'SOEN 422', 'Fall', 'Characteristics of embedded systems. Microcontroller architectures and their software. Development environments. Operating system configuration.', 'Embedded Systems and Software', 4),
(101, 'SOEN 423', 'Fall', 'Principles of distributed computing: scalability, transparency, concurrency, consistency, fault tolerance, high availability. Client-server interaction technologies.', 'Distributed Systems', 4),
(102, 'COMP 426', 'Fall', 'Fundamental concepts of computer architecture. Architecture of the selected multicore platform. Review of shared-memory parallel programming.The difficulties inherent to parallel programming.', 'Multicore Programming', 4),
(103, 'COMP 428', 'Fall', 'Parallel programming techniques as a natural extension to sequential programming. Overview of parallel programming architectures and models. Parallel programming issues: locality, granularity, scheduling.', 'Parallel Programming', 4),
(104, 'COMP 465', 'Fall', 'Order statistics: worst-case, average-case and amortized analysis. Algorithm design techniques: greedy algorithms, dynamic programming.Selected algorithms from graph theory, linear programming.', 'Design and Analysis of Algorithms', 3),
(105, 'COMP 473', 'Fall', 'Preprocessing. Feature extraction and selection. Similarity between patterns and distance measurements. Syntactic and statistical approaches. Clustering analysis.', 'Pattern Recognition', 4),
(106, 'COMP 474', 'Winter', 'Rule-based expert systems, blackboard architecture, and agent-based. Knowledge acquisition and representation. Uncertainty and conflict resolution.', 'Intelligent Systems', 4),
(107, 'COMP 478', 'Fall', 'Digital image fundamentals, image transforms (Fourier, Walsh, Haar, Hotelling, wavelet), image enhancement (histogram processing, spatial filtering, high- and low-pass filtering), image restoration.', 'Image Processing', 4),
(108, 'ENGR 411', 'Summer', 'Students must submit a report on a topic related to the students'' discipline and approved by the Department. The report must present a review of a current engineering problem, a proposal for a design project.', 'Special Technical Report', 1),
(109, 'ENGR 411', 'Fall', 'Students must submit a report on a topic related to the students'' discipline and approved by the Department. The report must present a review of a current engineering problem, a proposal for a design project.', 'Special Technical Report', 1),
(110, 'ENGR 411', 'Winter', 'Students must submit a report on a topic related to the students'' discipline and approved by the Department. The report must present a review of a current engineering problem, a proposal for a design project.', 'Special Technical Report', 1),
(111, 'ECON 201', 'Summer', 'Introduction to the functioning of the market system; concepts of supply and demand, the role of prices in resource allocation.', 'Introduction to Microeconomics', 3),
(112, 'ECON 201', 'Fall', 'Introduction to the functioning of the market system; concepts of supply and demand, the role of prices in resource allocation.', 'Introduction to Microeconomics', 3),
(113, 'ECON 201', 'Winter', 'Introduction to the functioning of the market system; concepts of supply and demand, the role of prices in resource allocation.', 'Introduction to Microeconomics', 3),
(114, 'ECON 203', 'Summer', 'An introductory analysis of aggregate economic activity. The focus is on the principles of determination of the level of employment, national income, real output, inflation.', 'Introduction to Macroeconomics', 3),
(115, 'ECON 203', 'Fall', 'An introductory analysis of aggregate economic activity. The focus is on the principles of determination of the level of employment, national income, real output, inflation.', 'Introduction to Macroeconomics', 3),
(116, 'ECON 203', 'Winter', 'An introductory analysis of aggregate economic activity. The focus is on the principles of determination of the level of employment, national income, real output, inflation.', 'Introduction to Macroeconomics', 3),
(117, 'ADMI 201', 'Fall', 'This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.', 'Introduction to Administration', 3),
(118, 'ADMI 201', 'Winter', 'This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.', 'Introduction to Administration', 3),
(119, 'ADMI 202', 'Summer', 'This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.', 'Perspective on Canadian Business', 3),
(120, 'ADMI 202', 'Fall', 'This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.', 'Perspective on Canadian Business', 3),
(121, 'ADMI 202', 'Winter', 'This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.', 'Perspective on Canadian Business', 3),
(122, 'ADMI 202', 'Winter', 'This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.', 'Perspective on Canadian Business', 3),
(123, 'MANA 201', 'Summer', 'This course introduces students to the basic principles of management within a contemporary business context. The managerial process (e.g. planning, organizing, controlling, motivating) is explored.', 'Introduction to Business and Management', 3),
(124, 'MANA 201', 'Fall', 'This course introduces students to the basic principles of management within a contemporary business context. The managerial process (e.g. planning, organizing, controlling, motivating) is explored.', 'Introduction to Business and Management', 3),
(125, 'MANA 201', 'Winter', 'This course introduces students to the basic principles of management within a contemporary business context. The managerial process (e.g. planning, organizing, controlling, motivating) is explored.', 'Introduction to Business and Management', 3),
(126, 'MANA 202', 'Fall', 'This course seeks to give students an understanding of behaviour in the workplace from an individual, group, and organizational perspective.', 'Human Behaviour in Organizations', 3),
(127, 'MANA 202', 'Winter', 'This course seeks to give students an understanding of behaviour in the workplace from an individual, group, and organizational perspective.', 'Human Behaviour in Organizations', 3),
(128, 'MANA 300', 'Fall', 'This final-year course offers students the opportunity to learn how to capitalize on their domain-specific knowledge and recognize opportunities for self-employment or new venture creation.', 'Entrepreneurship: Launching Your Business', 3),
(129, 'MANA 300', 'Winter', 'This final-year course offers students the opportunity to learn how to capitalize on their domain-specific knowledge and recognize opportunities for self-employment or new venture creation.', 'Entrepreneurship: Launching Your Business', 3),
(130, 'MARK 201', 'Summer', 'This course introduces non-Commerce students to the managerial concepts and practices of marketing. The process of developing a marketing strategy is examined.', 'Introduction to Marketing', 3),
(131, 'MARK 201', 'Fall', 'This course introduces non-Commerce students to the managerial concepts and practices of marketing. The process of developing a marketing strategy is examined.', 'Introduction to Marketing', 3),
(132, 'MARK 201', 'Winter', 'This course introduces non-Commerce students to the managerial concepts and practices of marketing. The process of developing a marketing strategy is examined.', 'Introduction to Marketing', 3);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2016_03_27_012000_create_users_table', 1),
('2016_03_27_014334_create_courses_table', 1),
('2016_03_27_033906_create_prerequisites_table', 1),
('2016_03_27_035938_create_sections_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `prerequisites`
--

CREATE TABLE IF NOT EXISTS `prerequisites` (
  `prerequisiteId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `priority` int(11) NOT NULL,
  `courseId` int(10) unsigned NOT NULL,
  `prerequisiteCourseName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `typeOfPrerequisite` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`prerequisiteId`),
  KEY `prerequisites_courseid_foreign` (`courseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE IF NOT EXISTS `sections` (
  `section` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sectionId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `classroom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `semester` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dayOffered` int(11) NOT NULL,
  `beginTime` time NOT NULL,
  `endTime` time NOT NULL,
  `courseId` int(10) unsigned NOT NULL,
  `courseCode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sectionNum` int(10) unsigned NOT NULL,
  PRIMARY KEY (`sectionId`),
  KEY `sections_courseid_foreign` (`courseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

INSERT INTO `sections` (`section`, `sectionId`, `classroom`, `semester`, `type`, `dayOffered`, `beginTime`, `endTime`, `courseId`, `courseCode`, `sectionNum`) VALUES
('UI-X', 1, 'H-905', 'Winter', 'Lab', 5, '13:35:00', '14:35:00', 2, 'COMP 248', 1),
('UJ-X', 2, 'H-905', 'Winter', 'Lab', 3, '13:35:00', '14:35:00', 2, 'COMP 248', 1),
('UK-X', 3, 'H-917', 'Winter', 'Lab', 5, '13:35:00', '14:35:00', 2, 'COMP 248', 1),
('U UA', 4, 'H-905', 'Winter', 'Tutorial', 5, '11:45:00', '13:25:00', 2, 'COMP 248', 1),
('U UB', 5, 'H-905', 'Winter', 'Tutorial', 3, '11:45:00', '13:25:00', 2, 'COMP 248', 1),
('WI-X', 6, 'H-905', 'Winter', 'Lab', 1, '12:00:00', '13:00:00', 2, 'COMP 248', 2),
('WJ-X', 7, 'H-831', 'Winter', 'Lab', 5, '16:35:00', '17:35:00', 2, 'COMP 248', 2),
('WK-X', 8, 'H-917', 'Winter', 'Lab', 1, '12:00:00', '13:00:00', 2, 'COMP 248', 2),
('WL-X', 9, 'H-823', 'Winter', 'Lab', 5, '16:35:00', '17:35:00', 2, 'COMP 248', 2),
('W WA', 10, 'H-905', 'Winter', 'Tutorial', 1, '10:15:00', '11:50:00', 2, 'COMP 248', 2),
('W WB', 11, 'H-819', 'Winter', 'Tutorial', 3, '14:45:00', '16:25:00', 2, 'COMP 248', 2),
('W WC', 12, 'H-823', 'Winter', 'Tutorial', 3, '14:45:00', '16:25:00', 2, 'COMP 248', 2),
('W WD', 13, 'H-823', 'Winter', 'Tutorial', 1, '10:15:00', '11:50:00', 2, 'COMP 248', 2),
('U', 14, 'H-820', 'Winter', 'Lecture', 35, '10:15:00', '11:30:00', 2, 'COMP 248', 1),
('W', 15, 'MB-S2.210', 'Winter', 'Lecture', 35, '11:45:00', '13:00:00', 2, 'COMP 248', 2),
('PI-X', 16, 'H-917', 'Winter', 'Lab', 4, '16:30:00', '17:30:00', 4, 'COMP 249', 1),
('PJ-X', 17, 'H-917', 'Winter', 'Lab', 5, '19:35:00', '20:35:00', 4, 'COMP 249', 1),
('PK-X', 18, 'H-817', 'Winter', 'Lab', 5, '19:35:00', '20:35:00', 4, 'COMP 249', 1),
('PPPA', 19, 'H-905', 'Winter', 'Tutorial', 4, '20:30:00', '22:10:00', 4, 'COMP 249', 1),
('PPPB', 20, 'H-905', 'Winter', 'Tutorial', 5, '17:45:00', '19:25:00', 4, 'COMP 249', 1),
('QI-X', 21, 'H-811', 'Winter', 'Lab', 1, '17:45:00', '18:45:00', 4, 'COMP 249', 4),
('QJ-X', 22, 'H-831', 'Winter', 'Lab', 4, '16:30:00', '17:30:00', 4, 'COMP 249', 4),
('QQQA', 23, 'H-831', 'Winter', 'Tutorial', 4, '20:30:00', '22:10:00', 4, 'COMP 249', 4),
('QQQB', 24, 'H-849', 'Winter', 'Tutorial', 5, '17:45:00', '19:25:00', 4, 'COMP 249', 4),
('SI-X', 25, 'H-929', 'Winter', 'Lab', 1, '12:10:00', '13:10:00', 4, 'COMP 249', 2),
('SJ-X', 26, 'H-929', 'Winter', 'Lab', 3, '12:10:00', '13:10:00', 4, 'COMP 249', 2),
('S SA', 27, 'H-929', 'Winter', 'Tutorial', 3, '10:15:00', '11:55:00', 4, 'COMP 249', 2),
('S SB', 28, 'H-929', 'Winter', 'Tutorial', 1, '10:15:00', '11:55:00', 4, 'COMP 249', 2),
('UI-X', 29, 'H-967', 'Winter', 'Lab', 1, '12:10:00', '13:10:00', 4, 'COMP 249', 3),
('UJ-X', 30, 'H-967', 'Winter', 'Lab', 3, '13:35:00', '14:35:00', 4, 'COMP 249', 3),
('U UA', 31, 'H-967', 'Winter', 'Tutorial', 1, '10:15:00', '11:55:00', 4, 'COMP 249', 3),
('U UB', 32, 'H-831', 'Winter', 'Tutorial', 3, '11:45:00', '13:25:00', 4, 'COMP 249', 3),
('PP', 33, 'H-535', 'Winter', 'Lecture', 4, '17:45:00', '20:15:00', 4, 'COMP 249', 1),
('QQ', 34, 'MB-5.275', 'Winter', 'Lecture', 4, '17:45:00', '20:15:00', 4, 'COMP 249', 2),
('S', 35, 'H-820', 'Winter', 'Lecture', 13, '08:45:00', '10:00:00', 4, 'COMP 249', 3),
('U', 36, 'H-535', 'Winter', 'Lecture', 35, '10:15:00', '11:30:00', 4, 'COMP 249', 4),
('S SI', 37, 'H-929', 'Winter', 'Lab', 5, '16:15:00', '18:05:00', 7, 'COMP 345', 1),
('S SJ', 38, 'H-967', 'Winter', 'Lab', 5, '16:15:00', '18:05:00', 7, 'COMP 345', 1),
('S', 39, 'MB S2.330', 'Winter', 'Lecture', 35, '14:45:00', '16:00:00', 7, 'COMP 345', 1),
('NI-X', 40, 'H-929', 'Winter', 'Lab', 3, '21:30:00', '23:20:00', 8, 'COMP 346', 1),
('NJ-X', 41, 'H-905', 'Winter', 'Lab', 1, '14:15:00', '16:05:00', 8, 'COMP 346', 1),
('NNNA', 42, 'H-929', 'Winter', 'Tutorial', 3, '20:30:00', '21:20:00', 8, 'COMP 346', 1),
('NNNB', 43, 'H-905', 'Winter', 'Tutorial', 1, '13:15:00', '14:05:00', 8, 'COMP 346', 1),
('WI-X', 44, 'H-929', 'Winter', 'Lab', 2, '21:30:00', '23:20:00', 8, 'COMP 346', 2),
('WJ-X', 45, 'H-967', 'Winter', 'Lab', 5, '14:15:00', '16:05:00', 8, 'COMP 346', 2),
('WWWA', 46, 'H-929', 'Winter', 'Tutorial', 2, '20:30:00', '21:20:00', 8, 'COMP 346', 2),
('WWWB', 47, 'H-967', 'Winter', 'Tutorial', 5, '13:15:00', '14:05:00', 8, 'COMP 346', 2),
('NN', 48, 'FG-C070', 'Winter', 'Lecture', 3, '17:45:00', '20:15:00', 8, 'COMP 346', 1),
('WW', 49, 'H-407', 'Winter', 'Lecture', 2, '17:45:00', '20:15:00', 8, 'COMP 346', 1),
('DDDA', 50, 'H-849', 'Winter', 'Tutorial', 2, '20:30:00', '22:10:00', 13, 'SOEN 228', 1),
('DDDB', 51, 'H-917', 'Winter', 'Tutorial', 2, '20:30:00', '22:10:00', 13, 'SOEN 228', 1),
('DI-X', 52, 'N/A', 'Winter', 'Lab', 2, '10:00:00', '12:00:00', 13, 'SOEN 228', 1),
('DJ-X', 53, 'N/A', 'Winter', 'Lab', 1, '10:00:00', '12:00:00', 13, 'SOEN 228', 1),
('DK-X', 54, 'N/A', 'Winter', 'Lab', 3, '10:00:00', '12:00:00', 13, 'SOEN 228', 1),
('DL-X', 55, 'N/A', 'Winter', 'Lab', 1, '10:00:00', '12:00:00', 13, 'SOEN 228', 1),
('DM-X', 56, 'N/A', 'Winter', 'Lab', 3, '18:00:00', '20:00:00', 13, 'SOEN 228', 1),
('H HA', 57, 'H-821', 'Winter', 'Tutorial', 3, '16:15:00', '17:55:00', 13, 'SOEN 228', 2),
('H HB', 58, 'H-817', 'Winter', 'Tutorial', 3, '16:15:00', '17:55:00', 13, 'SOEN 228', 2),
('H HC', 59, 'H-825', 'Winter', 'Tutorial', 3, '16:15:00', '17:55:00', 13, 'SOEN 228', 2),
('HI-X', 60, 'N/A', 'Winter', 'Lab', 2, '10:00:00', '12:00:00', 13, 'SOEN 228', 2),
('HJ-X', 61, 'N/A', 'Winter', 'Lab', 3, '10:00:00', '12:00:00', 13, 'SOEN 228', 2),
('HK-X', 62, 'N/A', 'Winter', 'Lab', 3, '18:00:00', '20:00:00', 13, 'SOEN 228', 2),
('HL-X', 63, 'N/A', 'Winter', 'Lab', 1, '16:15:00', '18:15:00', 13, 'SOEN 228', 2),
('HM-X', 64, 'N/A', 'Winter', 'Lab', 2, '10:00:00', '12:00:00', 13, 'SOEN 228', 2),
('DD', 65, 'MB-S2.330', 'Winter', 'Lecture', 2, '17:45:00', '20:15:00', 13, 'SOEN 228', 1),
('H', 66, 'MB-S2.210', 'Winter', 'Lecture', 13, '14:45:00', '16:00:00', 13, 'SOEN 228', 2),
('S SA', 67, 'H-917', 'Winter', 'Tutorial', 2, '10:15:00', '11:55:00', 15, 'SOEN 287', 1),
('S SB', 68, 'H-917', 'Winter', 'Tutorial', 4, '10:15:00', '11:55:00', 15, 'SOEN 287', 1),
('U UA', 69, 'H-929', 'Winter', 'Tutorial', 2, '16:15:00', '17:55:00', 15, 'SOEN 287', 2),
('U UB', 70, 'H-905', 'Winter', 'Tutorial', 4, '16:15:00', '17:55:00', 15, 'SOEN 287', 2),
('WWA', 71, 'H-905', 'Winter', 'Tutorial', 5, '15:15:00', '16:55:00', 15, 'SOEN 287', 3),
('WWB', 72, 'H-905', 'Winter', 'Tutorial', 2, '16:15:00', '17:55:00', 15, 'SOEN 287', 3),
('S', 73, 'H-967', 'Winter', 'Lecture', 24, '08:45:00', '10:00:00', 15, 'SOEN 287', 1),
('U', 74, 'H-920', 'Winter', 'Lecture', 24, '14:45:00', '16:00:00', 15, 'SOEN 287', 2),
('W', 75, 'FG-B040', 'Winter', 'Lecture', 24, '14:45:00', '16:00:00', 15, 'SOEN 287', 3),
('U UA', 76, 'H-605', 'Winter', 'Tutorial', 5, '14:15:00', '16:05:00', 17, 'SOEN 331', 1),
('U UB', 77, 'H-513', 'Winter', 'Tutorial', 5, '14:15:00', '16:05:00', 17, 'SOEN 331', 1),
('W WA', 78, 'H-521', 'Winter', 'Tutorial', 5, '14:15:00', '16:05:00', 17, 'SOEN 331', 2),
('W WB', 79, 'H-611', 'Winter', 'Tutorial', 5, '14:15:00', '16:05:00', 17, 'SOEN 331', 2),
('U', 80, 'FG-C080', 'Winter', 'Lecture', 24, '16:15:00', '17:30:00', 17, 'SOEN 331', 1),
('W', 81, 'H-420', 'Winter', 'Lecture', 24, '16:15:00', '17:30:00', 17, 'SOEN 331', 2),
('S SA', 82, 'H-929', 'Winter', 'Tutorial', 5, '12:15:00', '13:05:00', 18, 'SOEN 341', 1),
('S SB', 83, 'H-929', 'Winter', 'Tutorial', 5, '13:15:00', '14:05:00', 18, 'SOEN 341', 1),
('S SC', 84, 'H-831', 'Winter', 'Tutorial', 5, '14:15:00', '15:05:00', 18, 'SOEN 341', 1),
('S', 85, 'MB-S2.210', 'Winter', 'Lecture', 35, '08:45:00', '10:00:00', 18, 'SOEN 341', 1),
('S SA', 86, 'H-435', 'Winter', 'Tutorial', 4, '14:45:00', '15:35:00', 21, 'SOEN 344', 1),
('S SB', 87, 'H-544', 'Winter', 'Tutorial', 4, '14:45:00', '15:35:00', 21, 'SOEN 344', 1),
('S', 88, 'H-407', 'Winter', 'Lecture', 24, '13:15:00', '14:30:00', 21, 'SOEN 344', 1),
('S SA', 89, 'H-905', 'Winter', 'Tutorial', 3, '16:15:00', '17:05:00', 22, 'SOEN 345', 1),
('S SB', 90, 'H-905', 'Winter', 'Tutorial', 3, '17:45:00', '18:35:00', 22, 'SOEN 345', 1),
('S', 91, 'H-620', 'Winter', 'Lecture', 13, '14:45:00', '16:00:00', 22, 'SOEN 345', 1),
('S SA', 92, 'H-831', 'Winter', 'Tutorial', 2, '10:45:00', '11:35:00', 24, 'SOEN 385', 1),
('S SB', 93, 'H-831', 'Winter', 'Tutorial', 4, '10:45:00', '11:35:00', 24, 'SOEN 385', 1),
('S SC', 94, 'H-817', 'Winter', 'Tutorial', 1, '10:45:00', '11:35:00', 24, 'SOEN 385', 1),
('S', 95, 'FG-B050', 'Winter', 'Lecture', 24, '11:45:00', '13:00:00', 24, 'SOEN 385', 1),
('SI-X', 96, 'N/A', 'Winter', 'Lab', 4, '15:45:00', '18:25:00', 25, 'SOEN 390', 1),
('SK-X', 97, 'N/A', 'Winter', 'Lab', 2, '15:45:00', '18:25:00', 25, 'SOEN 390', 1),
('S SA', 98, 'N/A', 'Winter', 'Tutorial', 1, '18:15:00', '19:05:00', 25, 'SOEN 390', 1),
('S SB', 99, 'N/A', 'Winter', 'Tutorial', 1, '18:15:00', '19:05:00', 25, 'SOEN 390', 1),
('S', 100, 'H431', 'Winter', 'Lecture', 1, '16:15:00', '17:55:00', 25, 'SOEN 390', 1),
('SSSI', 101, 'N/A', 'Winter', 'Lab', 24, '08:45:00', '10:45:00', 27, 'SOEN 490', 1),
('SSSJ', 102, 'N/A', 'Winter', 'Lab', 24, '08:45:00', '10:45:00', 27, 'SOEN 490', 1),
('SS', 103, 'H-521', 'Winter', 'Lecture', 5, '18:25:00', '19:25:00', 27, 'SOEN 490', 1),

('WWWI',104,'H-917','Winter','Lab',3,'16:15:00','18:05:00',83,'COMP 371', 1),
('WWWJ',105,'H-917','Winter','Lab',4,'20:30:00','22:20:00',83,'COMP 371', 1),
('WWWK',106,'H-811','Winter','Lab',4,'15:45:00','17:35:00',83,'COMP 371', 1),
('WW',107,'H-507','Winter','Lecture',4,'17:45:00','20:15:00',83,'COMP 371', 1),

('NNNI',108,'H-917','Winter','Lab',1,'20:25:00','22:25:00',86,'COMP 472', 1),
('NNNJ',109,'H-917','Winter','Lab',4,'17:45:00','19:45:00',86,'COMP 472', 1),
('NNNK',110,'H-849','Winter','Lab',1,'20:25:00','22:25:00',86,'COMP 472', 1),
('NN',111,'H-561','Winter','Lecture',1,'17:45:00','20:15:00',86,'COMP 472', 1),

('N NI',112,'H-849','Winter','Lab',2,'18:10:00','20:00:00',87,'COMP 476', 1),
('N NJ',113,'H-849','Winter','Lab',3,'18:10:00','20:00:00',87,'COMP 476', 1),
('N NK',114,'H-849','Winter','Lab',4,'18:10:00','20:00:00',87,'COMP 476', 1),
('N',115,'H-411','Winter','Lecture',24,'14:45:00','16:00:00',87,'COMP 476', 1),

('XI-X',116,'H-929','Winter','Lab',3,'17:15:00','19:05:00',91,'COMP 353', 1),
('XJ-X',117,'H-905','Winter','Lab',1,'17:15:00','19:05:00',91,'COMP 353', 1),
('XK-X',118,'H-967','Winter','Lab',3,'17:15:00','19:05:00',91,'COMP 353', 1),
('X XA',119,'H-443','Winter','Tutorial',3,'16:15:00','17:05:00',91,'COMP 353', 1),
('X XB',120,'H-605','Winter','Tutorial',3,'16:15:00','17:05:00',91,'COMP 353', 1),
('X',121,'FC-C070','Winter','Lecture',13,'13:15:00','14:30:00',91,'COMP 353', 1),

('W WI',122,'H-831','Winter','Lab',1,'11:10:00','13:00:00',93,'COMP 445', 1),
('W WJ',123,'H-917','Winter','Lab',3,'11:10:00','13:00:00',93,'COMP 445', 1),
('W',124,'H-521','Winter','Lecture',13,'13:15:00','14:30:00',93,'COMP 445', 1),

('NI-X',125,'H-967','Winter','Lab',3,'20:30:00','22:20:00',96,'SOEN 487', 1),
('NJ-X',126,'H-917','Winter','Lab',3,'20:30:00','22:20:00',96,'SOEN 487', 1),
('NNNA',127,'H-831','Winter','Tutorial',3,'16:15:00','17:05:00',96,'SOEN 487', 1),
('NNNB',128,'H-843','Winter','Tutorial',3,'16:15:00','17:05:00',96,'SOEN 487', 1),
('N',129,'FC-B055','Winter','Lecture',3,'17:45:00','20:15:00',96,'SOEN 487', 1),

('UUUI',130,'H-847','Winter','Lab',2,'15:00:00','17:00:00',106,'COMP 474', 1),
('UUUJ',131,'H-847','Winter','Lab',2,'18:00:00','20:00:00',106,'COMP 474', 1),
('UU',132,'H-537','Winter','Lecture',3,'17:45:00','20:15:00',106,'COMP 474', 1),

('W',133,'ONLINE','Winter','Lecture',0,'00:00:00','00:00:00',110,'ENGR 411', 1),

('EC',134,'ONLINE','Winter','Lecture',0,'00:00:00','00:00:00',113,'ECON 201', 1),
('G',135,'MB-1210','Winter','Lecture',13,'16:15:00','17:30:00',113,'ECON 201', 2),
('H',136,'MB-1210','Winter','Lecture',13,'11:45:00','13:00:00',113,'ECON 201', 3),
('I',137,'MB-1210','Winter','Lecture',13,'08:45:00','10:00:00',113,'ECON 201', 4),

('SSSA',138,'EV-1162','Winter','Tutorial',4,'17:45:00','18:35:00',55,'ENGR 301', 2),
('SSSB',139,'EV-3309','Winter','Tutorial',4,'17:45:00','18:35:00',55,'ENGR 301', 2),
('SSSC',140,'EV-1162','Winter','Tutorial',2,'18:45:00','19:35:00',55,'ENGR 301', 2),
('SSSD',141,'EV-1162','Winter','Tutorial',2,'18:45:00','19:35:00',55,'ENGR 301', 2),
('SS',142,'H-533','Winter','Lecture',1,'17:45:00','20:15:00',55,'ENGR 301', 2),
('R RA',143,'EV-1162','Winter','Tutorial',2,'17:45:00','18:35:00',55,'ENGR 301', 1),
('R RB',144,'EV-3309','Winter','Tutorial',2,'17:45:00','18:35:00',55,'ENGR 301', 1),
('R RC',145,'EV-1162','Winter','Tutorial',4,'18:45:00','19:35:00',55,'ENGR 301', 1),
('R RD',146,'EV-3309','Winter','Tutorial',4,'18:45:00','19:35:00',55,'ENGR 301', 1),
('R',147,'H-533','Winter','Lecture',24,'16:15:00','17:30:00',55,'ENGR 301', 1),

('UUUA',148,'H-929','Winter','Tutorial',4,'20:30:00','21:20:00',52,'ENGR 391', 1),
('UUUB',149,'H-967','Winter','Tutorial',4,'20:30:00','21:20:00',52,'ENGR 391', 1),
('UU',150,'H-531','Winter','Lecture',4,'17:45:00','20:15:00',52,'ENGR 391', 1),
('X XA',151,'H-929','Winter','Tutorial',4,'13:15:00','14:05:00',52,'ENGR 391', 3),
('X XB',152,'H-929','Winter','Tutorial',4,'15:15:00','16:05:00',52,'ENGR 391', 3),
('X',153,'H-535','Winter','Lecture',35,'08:45:00','10:00:00',52,'ENGR 391', 3),
('V VA',154,'H-629','Winter','Tutorial',5,'11:45:00','12:35:00',52,'ENGR 391', 2),
('V VB',155,'H-629','Winter','Tutorial',5,'13:15:00','14:05:00',52,'ENGR 391', 2),
('V',156,'H-415','Winter','Lecture',24,'13:15:00','14:05:00',52,'ENGR 391', 2),

('P',157,'H-407','Winter','Lecture',5,'08:45:00','11:30:00',58,'ENGR 392', 1),
('Q',158,'H-420','Winter','Lecture',13,'16:15:00','17:30:00',58,'ENGR 392', 2),
('RR',159,'FG-B030','Winter','Lecture',2,'17:45:00','20:15:00',58,'ENGR 392', 3),


('B',160,'MB-S2.330','Winter','Lecture',13,'11:45:00','13:00:00',59,'BIOL 206',1),

('02',161,'SP-S110-Loy','Winter','Lecture',35,'11:45:00','13:00:00',61,'BIOL 261',1),
('0201',162,'CC-301-Loy','Winter','Tutorial',2,'13:30:00','15:30:00',61,'BIOL 261',1),
('0202',163,'CC-301-Loy','Winter','Tutorial',2,'15:30:00','17:30:00',61,'BIOL 261',1),
('0203',164,'CJ-1.125-Loy','Winter','Tutorial',3,'13:30:00','15:30:00',61,'BIOL 261',1),
('0204',165,'CJ-1.125-Loy','Winter','Tutorial',3,'15:30:00','17:30:00',61,'BIOL 261',1),
('0205',166,'CC-101-Loy','Winter','Tutorial',4,'13:30:00','15:30:00',61,'BIOL 261',1),
('0206',167,'CC-101-Loy','Winter','Tutorial',4,'15:30:00','17:30:00',61,'BIOL 261',1),
('0207',168,'CC-106-Loy','Winter','Tutorial',4,'13:30:00','15:30:00',61,'BIOL 261',1),
('0208',169,'CC-106-Loy','Winter','Tutorial',4,'15:30:00','17:30:00',61,'BIOL 261',1),

('ECEA',170,'H-605','Winter','Tutorial',2,'13:15:00','14:05:00',66,'ELEC 321',1),
('EI-X',171,'H-823','Winter','Lab',1,'17:45:00','20:30:00',66,'ELEC 321',1),
('EJ-X',172,'H-823','Winter','Lab',1,'17:45:00','20:30:00',66,'ELEC 321',1),
('EK-X',173,'H-823','Winter','Lab',3,'17:45:00','20:30:00',66,'ELEC 321',1),
('EL-X',174,'H-823','Winter','Lab',3,'17:45:00','20:30:00',66,'ELEC 321',1),
('H HA',175,'H-557','Winter','Tutorial',2,'13:15:00','14:05:00',66,'ELEC 321',2),
('HI-X',176,'H-823','Winter','Lab',4,'17:45:00','20:30:00',66,'ELEC 321',2),
('HJ-X',177,'H-823','Winter','Lab',4,'17:45:00','20:30:00',66,'ELEC 321',2),
('HK-X',178,'H-823','Winter','Lab',4,'13:15:00','16:00:00',66,'ELEC 321',2),
('HL-X',179,'H-823','Winter','Lab',4,'13:15:00','16:00:00',66,'ELEC 321',2),
('EC',180,'ONLINE','Winter','Lecture',0,'00:00:00','00:00:00',66,'ELEC 321',1),
('EH',181,'FG-B030','Winter','Lecture',24,'13:15:00','14:05:00',66,'ELEC 321',2),

('WWWA',182,'MB-S2.285','Winter','Tutorial',4,'20:30:00','22:10:00',68,'ENGR 242',3),
('WW',183,'MB-S2.285','Winter','Lecture',4,'17:45:00','20:15:00',68,'ENGR 242',3),
('J-JA',184,'FG-B055','Winter','Tutorial',5,'13:15:00','15:25:00',68,'ENGR 242',1),
('J-JB',185,'FG-B080','Winter','Tutorial',5,'13:15:00','15:25:00',68,'ENGR 242',1),
('L-LA',186,'FG-B055','Winter','Tutorial',5,'13:15:00','19:25:00',68,'ENGR 242',2),
('L-LB',187,'FG-B080','Winter','Tutorial',5,'13:15:00','19:25:00',68,'ENGR 242',2),
('J',188,'H-553','Winter','Lecture',24,'11:45:00','13:00:00',68,'ENGR 242',1),
('L',189,'FG-B060','Winter','Lecture',24,'11:45:00','13:00:00',68,'ENGR 242',2),

('T-TA',190,'FG-B055','Winter','Tutorial',3,'11:45:00','13:25:00',71,'ENGR 243',1),
('T-TB',191,'FG-B055','Winter','Tutorial',3,'10:05:00','11:45:00',71,'ENGR 243',1),
('T-TC',192,'FG-B080','Winter','Tutorial',3,'11:45:00','13:25:00',71,'ENGR 243',1),
('TT-TE',193,'FG-B080','Winter','Tutorial',4,'20:30:00','22:10:00',71,'ENGR 243',2),
('TT-TF',194,'FG-B080','Winter','Tutorial',3,'10:05:00','11:45:00',71,'ENGR 243',2),
('TT-TG',195,'FG-B055','Winter','Tutorial',4,'08:30:00','10:10:00',71,'ENGR 243',2),
('X-XA',196,'FG-B080','Winter','Tutorial',1,'11:45:00','13:25:00',71,'ENGR 243',4),
('X-XB',197,'FG-B080','Winter','Tutorial',3,'14:45:00','16:25:00',71,'ENGR 243',4),
('X-XC',198,'H-459','Winter','Tutorial',1,'11:45:00','13:25:00',71,'ENGR 243',4),
('T',199,'FG-C070','Winter','Lecture',24,'11:45:00','13:00:00',71,'ENGR 243',1),
('TT',200,'FG-C070','Winter','Tutorial',4,'17:45:00','20:15:00',71,'ENGR 243',1),
('X',201,'FG-C070','Winter','Lecture',24,'11:45:00','13:00:00',71,'ENGR 243',4),
('V-VA',202,'FG-B055','Winter','Tutorial',3,'14:45:00','16:25:00',71,'ENGR 243',3),
('V-VB',203,'FG-B055','Winter','Tutorial',1,'11:45:00','13:25:00',71,'ENGR 243',3),
('V-VC',204,'H-423','Winter','Tutorial',3,'14:45:00','16:25:00',71,'ENGR 243',3),
('V',205,'MB-3.210','Winter','Tutorial',35,'11:30:00','11:30:00',71,'ENGR 243',3),

('W-WA',206,'H-403','Winter','Tutorial',5,'11:45:00','13:25:00',74,'ENGR 251',1),
('W-WB',207,'H-423','Winter','Tutorial',5,'11:45:00','13:25:00',74,'ENGR 251',1),
('W',208,'H-415','Winter','Lecture',35,'8:45:00','10:00:00',74,'ENGR 251',1),
('V-VA',209,'FG-B055','Winter','Tutorial',5,'11:45:00','13:25:00',74,'ENGR 251',2),
('V-VB',210,'FG-B080','Winter','Tutorial',5,'11:45:00','13:25:00',74,'ENGR 251',2),
('XX-XE',211,'H-459','Winter','Tutorial',5,'15:30:00','17:10:00',74,'ENGR 251',3),
('XX-XF',212,'H-629','Winter','Tutorial',5,'15:30:00','17:10:00',74,'ENGR 251',3),
('V',213,'H-411','Winter','Lecture',24,'10:15:00','11:30:00',74,'ENGR 251',2),
('XX',214,'H-407','Winter','Lecture',5,'17:45:00','20:15:00',74,'ENGR 251',3),

('ECEA',215,'H-603','Winter','Tutorial',5,'15:15:00','16:05:00',77,'ENGR 361',1),
('ECEB',216,'H-403','Winter','Tutorial',5,'16:15:00','17:05:00',77,'ENGR 361',1),
('ECEC',217,'H-539','Winter','Tutorial',5,'15:15:00','16:05:00',77,'ENGR 361',1),
('ECED',218,'H-6565','Winter','Tutorial',5,'16:15:00','17:05:00',77,'ENGR 361',1),
('EC',219,'ONLINE','Winter','Lecture',0,'00:00:00','00:00:00',77,'ENGR 361',1),

('W-WA',220,'H-427','Winter','Tutorial',5,'15:15:00','16:05:00',79,'MECH 221',1),
('W-WB',221,'H-523','Winter','Tutorial',5,'15:15:00','16:05:00',79,'MECH 221',1),
('W',222,'H-531','Winter','Lecture',24,'11:30:00','11:30:00',79,'MECH 221',1),

('01',223,'CC-112-Loy','Winter','Lecture',24,'10:15:00','11:30:00',80,'PHYS 252',1),

('E', 224, 'H-110', 'Winter','Lecture', 24, '11:45:00', '13:00:00', 116,'ECON 203', 1),
('EC', 225, 'ONLINE', 'Winter','Lecture', 0, '00:00:00', '00:00:00', 116,'ECON 203', 2),
('F', 226, 'H-110', 'Winter','Lecture', 24, '10:15:00', '11:30:00', 116,'ECON 203', 3),
('G', 227, 'MB-1.210', 'Winter','Lecture', 24, '8:45:00', '10:00:00', 116,'ECON 203', 4),
('H', 228, 'H-435', 'Winter','Lecture', 13, '13:15:00', '14:30:00', 116,'ECON 203', 5),
('AA', 229, 'MB-2.430', 'Winter','Lecture', 4, '17:45:00', '20:15:00', 118,'ADMI 201', 1),
('B', 230, 'MB-2.270', 'Winter','Lecture', 4, '14:45:00', '17:30:00', 118,'ADMI 201', 2),
('B', 231, 'MB-S1.235', 'Winter','Lecture', 1, '14:45:00', '17:30:00', 121,'ADMI 202', 1),
('Y', 232, 'ONLINE', 'Winter','Lecture', 0, '00:00:00', '00:00:00', 121,'ADMI 202', 2),
('CC', 233, 'MB-2.210', 'Winter','Lecture', 3, '17:45:00', '20:15:00', 124,'MANA 201', 1),
('BB', 234, 'MB-2.210', 'Winter','Lecture', 3, '17:45:00', '20:15:00', 126,'MANA 202', 1),
('AA', 235, 'MB-S1.235', 'Winter','Lecture', 2, '17:45:00', '20:15:00', 128,'MANA 300', 1),
('B', 236, 'MB-S1.115', 'Winter','Lecture', 2, '11:45:00', '14:30:00', 128,'MANA 300', 2),
('C', 237, 'MB-S1.430', 'Winter','Lecture', 5, '08:45:00', '11:30:00', 128,'MANA 300', 3),
('02', 238, 'HB-130-LOY', 'Winter','Lecture', 4, '14:45:00', '17:30:00', 131,'MARK 201', 1),
('BB', 239, 'MB-2.270', 'Winter','Lecture', 1, '17:45:00', '20:15:00', 131,'MARK 201', 2),
('D', 240, 'MB-2.270', 'Winter','Lecture', 1, '08:45:00', '11:30:00', 131,'MARK 201', 3),
('E', 241, 'MB-2.270', 'Winter','Lecture', 2, '11:45:00', '14:30:00', 131,'MARK 201', 4),
('F', 242, 'MB-2.270', 'Winter','Lecture', 5, '11:45:00', '14:30:00', 131,'MARK 201', 5); 


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userType` tinyint(1) NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `CoursesDones` varchar(5000) COLLATE utf8_unicode_ci NOT NULL,
  `CoursesRem` varchar(5000) COLLATE utf8_unicode_ci NOT NULL,
  `CLoad` smallint(6) NOT NULL,
  `dayOff` enum('None','Monday','Tuesday','Wednesday','Thursday','Friday') COLLATE utf8_unicode_ci NOT NULL,
  `pTime` enum('Any','Mornings','Afternoons','Evenings') COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `email`, `userType`, `password`, `CoursesDones`, `CoursesRem`, `CLoad`, `dayOff`, `pTime`) VALUES
('admin', 'admin@email.com', 1, 'Ca8/08c9onmg77QVxPXQh.w/OLRqO9e', '{"List":[]}', '{"List":[]}', 0, 'None', 'Any'),
('jason', 'jasonbourne@email.com', 0, 'pass', '{"List":[{"name":"Introduction to Theoretical Computer Science","number":"SOEN 3335"},{"name":"Software Requirements and Specifications","number":"SOEN 342"},{"name":"Software Architecture and Design I","number":"SOEN 343"},{"name":"Management Measurement and Quality Control","number":"SOEN 384"},{"name":"Numerical Methods in Engineering","number":"ENGR 391"},{"name":"Software Architecture and Design II","number":"SOEN 344"},{"name":"Software Testing, Verification and Quality Assurance","number":"SOEN 345"},{"name":"User Interface Design","number":"SOEN 357"},{"name":"Software Engineering Team Design Project","number":"SOEN 390"},{"name":"Capstone Software Engineering Design Project","number":"SOEN 490"},{"name":"Engineering Management Principles and Economics","number":"ENGR 301"},{"name":"Information Systems Security","number":"SOEN 321"},{"name":"Impact of Technology on Society","number":"ENGR 392"}]}', '{"List":[{"name":"Mathematics for Computer Science","number":"COMP 232"},{"name":"Object-Oriented Programming I","number":"COMP 248"},{"name":"Professional Practice & Responsibility","number":"ENGR 201"},{"name":"Applied Ordinary Differential Equations","number":"ENGR 213"},{"name":"Object-Oriented Programming II","number":"COMP 249"},{"name":"Applied Advanced Calculus","number":"ENGR 233"},{"name":"System Hardware","number":"SOEN 228"},{"name":"Introduction to Web Applications","number":"SOEN 287"},{"name":"Principles of Programming Languages","number":"COMP 348"},{"name":"Data Structures and Algorithms","number":"COMP 352"},{"name":"Technical Writing and Communication","number":"ENCS 282"},{"name":"Sustainable Development and Environmental Stewardship","number":"ENGR 202"},{"name":"Operating Systems","number":"COMP 346"},{"name":"Principles of Electrical Engineering","number":"ELEC 275"},{"name":"Probability and Statistics in Engineering","number":"ENGR 371"},{"name":"Introduction to Formal Methods for Software Engineering","number":"SOEN 331"},{"name":"Software Process","number":"SOEN 341"}]}', 5, 'Monday', 'Afternoons');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `prerequisites`
--
ALTER TABLE `prerequisites`
  ADD CONSTRAINT `prerequisites_courseid_foreign` FOREIGN KEY (`courseId`) REFERENCES `courses` (`courseId`);

--
-- Constraints for table `sections`
--
ALTER TABLE `sections`
  ADD CONSTRAINT `sections_courseid_foreign` FOREIGN KEY (`courseId`) REFERENCES `courses` (`courseId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;