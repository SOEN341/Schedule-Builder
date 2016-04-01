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
(27, 'SOEN 490', 'Whole Year','Students work in teams of between six and nine members to construct a significant software application.','Capstone Software Engineering Design Project',4),
(28, 'ENGR 201', 'Summer', 'Health and safety issues for engineering projects: Quebec and Canadian legislation; safe work practices','Professional Practice and Responsibility',1.5),
(29, 'ENGR 201', 'Summer', 'Health and safety issues for engineering projects: Quebec and Canadian legislation; safe work practices','Professional Practice and Responsibility',1.5),
(30, 'ENGR 201', 'Fall',   'Health and safety issues for engineering projects: Quebec and Canadian legislation; safe work practices','Professional Practice and Responsibility',1.5),
(31, 'ENGR 201', 'Winter', 'Health and safety issues for engineering projects: Quebec and Canadian legislation; safe work practices','Professional Practice and Responsibility',1.5),
(32, 'ENGR 202', 'Summer', 'Introduction to the concept of sustainable development and the approaches for achieving it.','Sustainable Development and Environmental Stewardship',1.5),
(33, 'ENGR 202', 'Fall',   'Introduction to the concept of sustainable development and the approaches for achieving it.','Sustainable Development and Environmental Stewardship',1.5),
(34, 'ENGR 202', 'Winter', 'Introduction to the concept of sustainable development and the approaches for achieving it.','Sustainable Development and Environmental Stewardship',1.5),
(35, 'ENGR 213', 'Summer', 'This course introduces Engineering students to the theory and application of ordinary differential equations.','Applied Ordinary Differential Equations',3),
(36, 'ENGR 213', 'Fall',   'This course introduces Engineering students to the theory and application of ordinary differential equations.','Applied Ordinary Differential Equations',3),
(37, 'ENGR 213', 'Winter', 'This course introduces Engineering students to the theory and application of ordinary differential equations.','Applied Ordinary Differential Equations',3),
(38, 'ENGR 233', 'Summer', 'This course introduces Engineering students to the theory and application of advanced calculus.','Applied Advanced Calculus',3),
(39, 'ENGR 233', 'Fall',   'This course introduces Engineering students to the theory and application of advanced calculus.','Applied Advanced Calculus',3),
(40, 'ENGR 233', 'Winter', 'This course introduces Engineering students to the theory and application of advanced calculus.','Applied Advanced Calculus',3),
(41, 'ENCS 282', 'Summer', 'Technical writing form and style. Technical and scientific papers, abstracts, reports.','Technical Writing and Communication',3),
(42, 'ENCS 282', 'Fall',   'Technical writing form and style. Technical and scientific papers, abstracts, reports.','Technical Writing and Communication',3),
(43, 'ENCS 282', 'Winter', 'Technical writing form and style. Technical and scientific papers, abstracts, reports.','Technical Writing and Communication',3),
(44, 'ELEC 275', 'Summer', 'Fundamentals of electric circuits: Kirchoff\'s laws, voltage and current sources, Ohm\'s law, series and parallel circuits.','Principles of Electrical Engineering',3.5),
(45, 'ELEC 275', 'Fall',   'Fundamentals of electric circuits: Kirchoff\'s laws, voltage and current sources, Ohm\'s law, series and parallel circuits.','Principles of Electrical Engineering',3.5),
(46, 'ELEC 275', 'Winter', 'Fundamentals of electric circuits: Kirchoff\'s laws, voltage and current sources, Ohm\'s law, series and parallel circuits.','Principles of Electrical Engineering',3.5),
(47, 'ENGR 371', 'Summer', 'Axioms of probability theory. Events. Conditional probability. Bayes theorem. Random variables. ','Probability and Statistics in Engineering',3),
(48, 'ENGR 371', 'Fall',   'Axioms of probability theory. Events. Conditional probability. Bayes theorem. Random variables. ','Probability and Statistics in Engineering',3),
(49, 'ENGR 371', 'Winter', 'Axioms of probability theory. Events. Conditional probability. Bayes theorem. Random variables. ','Probability and Statistics in Engineering',3),
(50, 'ENGR 391', 'Summer', 'Roots of algebraic and transcendental equations; function approximation; numerical differentiation; numerical integration.','Numerical Methods in Engineering',3),
(51, 'ENGR 391', 'Fall',   'Roots of algebraic and transcendental equations; function approximation; numerical differentiation; numerical integration.','Numerical Methods in Engineering',3),
(52, 'ENGR 391', 'Winter', 'Roots of algebraic and transcendental equations; function approximation; numerical differentiation; numerical integration.','Numerical Methods in Engineering',3),
(53, 'ENGR 301', 'Summer', 'Introduction to project delivery systems. Principles of project management; role and activity of a manager.','Engineering Management Principles and Economics',3),
(54, 'ENGR 301', 'Fall',   'Introduction to project delivery systems. Principles of project management; role and activity of a manager.','Engineering Management Principles and Economics',3),
(55, 'ENGR 301', 'Winter', 'Introduction to project delivery systems. Principles of project management; role and activity of a manager.','Engineering Management Principles and Economics',3),
(56, 'ENGR 392', 'Summer', 'Social history of technology and of science including the industrial revolution and modern times.','Impact of Technology on Society',3),
(57, 'ENGR 392', 'Fall',   'Social history of technology and of science including the industrial revolution and modern times.','Impact of Technology on Society',3),
(58, 'ENGR 392', 'Winter', 'Social history of technology and of science including the industrial revolution and modern times.','Impact of Technology on Society',3),
(59, 'BIOL 206', 'Winter', 'A survey of classical and contemporary developments in the study of heredity, with particular attention to human examples.','Elementary Genetics',3),
(60, 'BIOL 261', 'Fall',   'Basic genetic principles, including mechanisms of meiosis and mitosis, Mendelian genetics, recombination, gene mapping, and chromosome rearrangements','Molecular and General Genetics',3),
(61, 'BIOL 261', 'Winter', 'Basic genetic principles, including mechanisms of meiosis and mitosis, Mendelian genetics, recombination, gene mapping, and chromosome rearrangements','Molecular and General Genetics',3),
(62, 'CHEM 217', 'Fall',   'Precipitation methods and solubility products; activity, chemical equilibria and titration curves of neutralization and complexation systems','Introductory Analytical Chemistry I',3),
(63, 'CHEM 221', 'Fall',   'Basic aspects of orbitals and their role in covalent bonding; delocalization of electrons.','Introductory Organic Chemistry I',3),
(64, 'CHEM 221', 'Winter', 'Basic aspects of orbitals and their role in covalent bonding; delocalization of electrons.','Introductory Organic Chemistry I',3),
(65, 'CIVI 231', 'Fall',   'Basic principles of physical and structural geology with emphasis on topics related to civil engineering','Geology for Civil Engineers',3),
(66, 'ELEC 321', 'Winter', 'Fundamentals underlying optical and electronic devices. The structure and growth of crystals. ','Introduction to Semiconductor Materials and Devices',3.5),
(67, 'ENGR 242', 'Fall',   'Resultant of force systems; equilibrium of particles and rigid bodies; distributed forces; statically determinate systems','Statics',3),
(68, 'ENGR 242', 'Winter', 'Resultant of force systems; equilibrium of particles and rigid bodies; distributed forces; statically determinate systems','Statics',3),
(69, 'ENGR 243', 'Summer', 'Kinematics of a particle and rigid body; forces and accelerations; work and energy; impulse and momentum.','Dynamics',3),
(70, 'ENGR 243', 'Fall',   'Kinematics of a particle and rigid body; forces and accelerations; work and energy; impulse and momentum.','Dynamics',3),
(71, 'ENGR 243', 'Winter', 'Kinematics of a particle and rigid body; forces and accelerations; work and energy; impulse and momentum.','Dynamics',3),
(72, 'ENGR 251', 'Summer', 'Basic principles of thermodynamics and their application to various systems composed of pure substances and their homogeneous non-reactive mixtures.','Thermodynamics I',3),
(73, 'ENGR 251', 'Fall',   'Basic principles of thermodynamics and their application to various systems composed of pure substances and their homogeneous non-reactive mixtures.','Thermodynamics I',3),
(74, 'ENGR 251', 'Winter', 'Basic principles of thermodynamics and their application to various systems composed of pure substances and their homogeneous non-reactive mixtures.','Thermodynamics I',3),
(75, 'ENGR 361', 'Summer', 'Basic concepts and principles of fluid mechanics. Classification of fluid flow. Hydrostatic forces on plane and curved surfaces, buoyancy and stability, fluids in rigid body motion.','Fluid Mechanics I',3),
(76, 'ENGR 361', 'Fall',   'Basic concepts and principles of fluid mechanics. Classification of fluid flow. Hydrostatic forces on plane and curved surfaces, buoyancy and stability, fluids in rigid body motion.','Fluid Mechanics I',3),
(77, 'ENGR 361', 'Winter', 'Basic concepts and principles of fluid mechanics. Classification of fluid flow. Hydrostatic forces on plane and curved surfaces, buoyancy and stability, fluids in rigid body motion.','Fluid Mechanics I',3),
(78, 'MECH 221', 'Fall',   'Relationships between properties and internal structure, atomic bonding; molecular, crystalline and amorphous structures.','Materials Science',3),
(79, 'MECH 221', 'Winter', 'Relationships between properties and internal structure, atomic bonding; molecular, crystalline and amorphous structures.','Materials Science',3),
(80, 'PHYS 252', 'Winter', 'Wave equation, phasors, EM waves, linear, circular and elliptical polarization, polariscope, Malus law, dichroism.','Optics',3),
(81, 'COMP 371', 'Summer', 'Introduction to computer graphics and graphics hardware. Introduction to graphics API and graphics systems architecture.','Computer Graphics',4),
(82, 'COMP 371', 'Fall',   'Introduction to computer graphics and graphics hardware. Introduction to graphics API and graphics systems architecture.','Computer Graphics',4),
(83, 'COMP 371', 'Winter', 'Introduction to computer graphics and graphics hardware. Introduction to graphics API and graphics systems architecture.','Computer Graphics',4),
(84, 'COMP 376', 'Fall',   'Introduction to design and implementation aspects of computer gaming: basic game design, storytelling and narratives, and game genres.','Introduction to Game Development',4),
(85, 'COMP 472', 'Fall',   'Scope of AI. First-order logic. Automated reasoning. Search and heuristic search. Game-playing.','Artificial Intelligence',4),
(86, 'COMP 472', 'Winter', 'Scope of AI. First-order logic. Automated reasoning. Search and heuristic search. Game-playing.','Artificial Intelligence',4),
(87, 'COMP 476', 'Winter', 'Introduction to advanced aspects of computer games. Game engine design. Artificial Intelligence (AI): non-player character movement, coordinated movement.','Advanced Game Development',4),
(88, 'COMP 477', 'Fall',   'Introduction to the algorithms, data structures, and techniques used in modelling and rendering dynamic scenes.','Animation for Computer Games',4),
(89, 'COMP 353', 'Summer', 'Introduction to database management systems. Conceptual database design: the entity-relationship model. The relational data model and relational algebra.','Databases',4),
(90, 'COMP 353', 'Fall',   'Introduction to database management systems. Conceptual database design: the entity-relationship model. The relational data model and relational algebra.','Databases',4),
(91, 'COMP 353', 'Winter', 'Introduction to database management systems. Conceptual database design: the entity-relationship model. The relational data model and relational algebra.','Databases',4),
(92, 'COMP 445', 'Fall',   'Network architectures: OSI and Internet models. Link layer: error detection, multiple access protocols, addressing. Local area networks.','Data Communication and Computer Networks',4),
(93, 'COMP 445', 'Winter', 'Network architectures: OSI and Internet models. Link layer: error detection, multiple access protocols, addressing. Local area networks.','Data Communication and Computer Networks',4),
(94, 'COMP 479', 'Fall',   'Basics of information retrieval (IR): boolean, vector space and probabilistic models. Tokenization and creation of inverted files. Weighting schemes.','Information Retrieval and Web Search',4),
(95, 'SOEN 387', 'Fall',   'Hypertext Transfer Protocol (HTTP), web mark-up languages and encodings. Document Object Models (DOM). Client/server and layered architectures.','Web-Based Enterprise Application Design',3),
(96, 'SOEN 487', 'Winter', 'Analysis and design of web services and applications. Advanced architectures for the design, deployment, and testing of large multi-server web services and applications.','Web Services and Applications',4),
(97, 'AERO 480', 'Fall',   'Laboratory work provides an opportunity for students to become familiar with the real-time hardware-in-the-loop simulation and flight testing based on the Qball-X4 Quadrotor UAV.','Flight Control Systems',3.5),
(98, 'AERO 482', 'Fall',   '','Avionic Navigation Systems',3),
(99, 'COEN 320', 'Fall',   'Fundamentals of real-time systems: definitions, requirements, design issues and applications. Real-time operating systems (RTOS) feature.','Introduction to Real Time Systems',3),
(100,'SOEN 422', 'Fall',  'Characteristics of embedded systems. Microcontroller architectures and their software. Development environments. Operating system configuration.','Embedded Systems and Software',4),
(101,'SOEN 423', 'Fall',  'Principles of distributed computing: scalability, transparency, concurrency, consistency, fault tolerance, high availability. Client-server interaction technologies.','Distributed Systems',4),
(102,'COMP 426', 'Fall',  'Fundamental concepts of computer architecture. Architecture of the selected multicore platform. Review of shared-memory parallel programming.The difficulties inherent to parallel programming.','Multicore Programming',4),
(103,'COMP 428', 'Fall',  'Parallel programming techniques as a natural extension to sequential programming. Overview of parallel programming architectures and models. Parallel programming issues: locality, granularity, scheduling.','Parallel Programming',4),
(104,'COMP 465', 'Fall',  'Order statistics: worst-case, average-case and amortized analysis. Algorithm design techniques: greedy algorithms, dynamic programming.Selected algorithms from graph theory, linear programming.','Design and Analysis of Algorithms',3),
(105,'COMP 473', 'Fall',  'Preprocessing. Feature extraction and selection. Similarity between patterns and distance measurements. Syntactic and statistical approaches. Clustering analysis.','Pattern Recognition',4),
(106,'COMP 474', 'Winter','Rule-based expert systems, blackboard architecture, and agent-based. Knowledge acquisition and representation. Uncertainty and conflict resolution.','Intelligent Systems',4),
(107,'COMP 478', 'Fall',  'Digital image fundamentals, image transforms (Fourier, Walsh, Haar, Hotelling, wavelet), image enhancement (histogram processing, spatial filtering, high- and low-pass filtering), image restoration.','Image Processing',4),
(108,'ENGR 411', 'Summer','Students must submit a report on a topic related to the students'' discipline and approved by the Department. The report must present a review of a current engineering problem, a proposal for a design project.','Special Technical Report',1),
(109,'ENGR 411', 'Fall',  'Students must submit a report on a topic related to the students'' discipline and approved by the Department. The report must present a review of a current engineering problem, a proposal for a design project.','Special Technical Report',1),
(110,'ENGR 411', 'Winter','Students must submit a report on a topic related to the students'' discipline and approved by the Department. The report must present a review of a current engineering problem, a proposal for a design project.','Special Technical Report',1),
(111,'ECON 201', 'Summer','Introduction to the functioning of the market system; concepts of supply and demand, the role of prices in resource allocation.','Introduction to Microeconomics',3),
(112,'ECON 201', 'Fall','Introduction to the functioning of the market system; concepts of supply and demand, the role of prices in resource allocation.','Introduction to Microeconomics',3),
(113,'ECON 201', 'Winter','Introduction to the functioning of the market system; concepts of supply and demand, the role of prices in resource allocation.','Introduction to Microeconomics',3),
(114,'ECON 203', 'Summer','An introductory analysis of aggregate economic activity. The focus is on the principles of determination of the level of employment, national income, real output, inflation.','Introduction to Macroeconomics',3),
(115,'ECON 203', 'Fall','An introductory analysis of aggregate economic activity. The focus is on the principles of determination of the level of employment, national income, real output, inflation.','Introduction to Macroeconomics',3),
(116,'ECON 203', 'Winter','An introductory analysis of aggregate economic activity. The focus is on the principles of determination of the level of employment, national income, real output, inflation.','Introduction to Macroeconomics',3),
(117,'ADMI 201', 'Fall','This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.','Introduction to Administration',3),
(118,'ADMI 201', 'Winter','This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.','Introduction to Administration',3),
(119,'ADMI 202', 'Summer','This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.','Perspective on Canadian Business',3),
(120,'ADMI 202', 'Fall','This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.','Perspective on Canadian Business',3),
(121,'ADMI 202', 'Winter','This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.','Perspective on Canadian Business',3),
(122,'ADMI 202', 'Winter','This course is intended to develop a basic understanding of the role of administration in our society. The course includes a survey of different forms of organizations, their social and legal responsibilities.','Perspective on Canadian Business',3),
(123,'MANA 201', 'Summer','This course introduces students to the basic principles of management within a contemporary business context. The managerial process (e.g. planning, organizing, controlling, motivating) is explored.','Introduction to Business and Management',3),
(124,'MANA 201', 'Fall','This course introduces students to the basic principles of management within a contemporary business context. The managerial process (e.g. planning, organizing, controlling, motivating) is explored.','Introduction to Business and Management',3),
(125,'MANA 201', 'Winter','This course introduces students to the basic principles of management within a contemporary business context. The managerial process (e.g. planning, organizing, controlling, motivating) is explored.','Introduction to Business and Management',3),
(126,'MANA 202', 'Fall','This course seeks to give students an understanding of behaviour in the workplace from an individual, group, and organizational perspective.','Human Behaviour in Organizations',3),
(127,'MANA 202', 'Winter','This course seeks to give students an understanding of behaviour in the workplace from an individual, group, and organizational perspective.','Human Behaviour in Organizations',3),
(128,'MANA 300', 'Fall','This final-year course offers students the opportunity to learn how to capitalize on their domain-specific knowledge and recognize opportunities for self-employment or new venture creation.','Entrepreneurship: Launching Your Business',3),
(129,'MANA 300', 'Winter','This final-year course offers students the opportunity to learn how to capitalize on their domain-specific knowledge and recognize opportunities for self-employment or new venture creation.','Entrepreneurship: Launching Your Business',3),
(130,'MARK 201', 'Summer','This course introduces non-Commerce students to the managerial concepts and practices of marketing. The process of developing a marketing strategy is examined.','Introduction to Marketing',3),
(131,'MARK 201', 'Fall','This course introduces non-Commerce students to the managerial concepts and practices of marketing. The process of developing a marketing strategy is examined.','Introduction to Marketing',3),
(132,'MARK 201', 'Winter','This course introduces non-Commerce students to the managerial concepts and practices of marketing. The process of developing a marketing strategy is examined.','Introduction to Marketing',3);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
