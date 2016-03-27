--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `courseId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `courseCode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `semester` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `credits` double NOT NULL,
  PRIMARY KEY (`courseId`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;



LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'COMP 248','Fall','Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.','Object-Oriented Programming I',3),(2,'COMP 248','Winter',' Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.','Object-Oriented Programming I',3),(3,'COMP 249','Summer','Design of classes. Inheritance. Polymorphism. Static and dynamic binding.','Object-Oriented Programming II',3),(4,'COMP 249','Winter','Design of classes. Inheritance. Polymorphism. Static and dynamic binding.','Object-Oriented Programming II',3),(5,'COMP 335','Fall','Finite state automata and regular languages. Push-down automata and context-free languages.','Introduction to Theoretical Computer Science',3),(6,'COMP 345','Fall','Introduction to C++. I/O with stream classes. Pointers and their uses.','Advanced Programming Design with C++',4),(7,'COMP 345','Winter','Introduction to C++. I/O with stream classes. Pointers and their uses.','Advanced Programming Design with C++',4),(8,'COMP 346','Winter','Fundamentals of operating system functionalities, design and implementation.','Operating Systems',4),(9,'COMP 348','Summer','Survey of programming paradigms: Imperative, functional, and logic programming','Principles of Programming Languages',3),(10,'COMP 348','Fall','Survey of programming paradigms: Imperative, functional, and logic programming','Principles of Programming Languages',3),(11,'COMP 352','Summer','Abstract data types: stacks and queues, trees, priority queues, dictionaries','Data Structures and Algorithms',3),(12,'COMP 352','Fall','Abstract data types: stacks and queues, trees, priority queues, dictionaries','Data Structures and Algorithms',3),(13,'SOEN 228','Winter','Processor structure, Data and Instructions, Instruction Set Processor','System Hardware',4),(14,'SOEN 287','Summer','Internet architecture and protocols. Web applications through clients and servers.','Web Programming',3),(15,'SOEN 287','Winter','Internet architecture and protocols. Web applications through clients and servers.','Web Programming',3),(16,'SOEN 321','Fall','Protocol layers and security protocols. Intranets and extranets.','Information Systems Security',3),(17,'SOEN 331','Winter','Static and dynamic checking. Method specification using preconditions and postconditions.','Introduction to Formal Methods for Software Engineering',3),(18,'SOEN 341','Winter','Basic principles of software engineering. Introduction to software process models.','Software Process',3),(19,'SOEN 342','Fall','Requirements engineering. Functional and non-functional requirements.','Software Requirements and Specifications',3),(20,'SOEN 343','Fall','From requirements to design to implementation. Planned vs. evolutionary design and refactoring.','Software Architecture and Design I',3),(21,'SOEN 344','Winter','Architectural activities, roles, and deliverables. Architectural view models.','Software Architecture and Design II',3),(22,'SOEN 345','Winter','Testing strategies. Specification-based vs. code-based, black-box vs. white-box, functional vs. structural testing','Software Testing, Verification and Quality Assurance',3),(23,'SOEN 384','Fall','Organization of large software development. Roles of team members, leaders, managers and etc','Management, Measurement and Quality Control',3),(24,'SOEN 385','Winter','Mathematical modelling of dynamical systems; block diagrams; feedback; open and closed loops.','Control Systems and Applications',3),(25,'SOEN 390','Winter','Students work in teams to design and implement a software project from requirements provided by the coordinator.','Software Engineering Team Design Project',3.5),(26,'SOEN 422','Fall','Characteristics of embedded systems. Microcontroller architectures and their software.','Embedded Systems and Software',4),(27,'SOEN 490','Whole Year','Students work in teams of between six and nine members to construct a significant software application.','Capstone Software Engineering Design Project',4);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;



LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES ('2016_03_27_012000_create_users_table',1),('2016_03_27_014334_create_courses_table',1),('2016_03_27_033906_create_prerequisites_table',1),('2016_03_27_035938_create_sections_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prerequisites`
--

DROP TABLE IF EXISTS `prerequisites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prerequisites` (
  `prerequisiteId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `courseId` int(10) unsigned NOT NULL,
  `prerequisiteCourseName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `typeOfPrerequisite` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`prerequisiteId`),
  KEY `prerequisites_courseid_foreign` (`courseId`),
  CONSTRAINT `prerequisites_courseid_foreign` FOREIGN KEY (`courseId`) REFERENCES `courses` (`courseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;



LOCK TABLES `prerequisites` WRITE;
/*!40000 ALTER TABLE `prerequisites` DISABLE KEYS */;
/*!40000 ALTER TABLE `prerequisites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sections` (
  `section` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sectionId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `classroom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `semester` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dayOffered` int(11) NOT NULL,
  `beginTime` time NOT NULL,
  `endTime` time NOT NULL,
  `courseId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`sectionId`),
  KEY `sections_courseid_foreign` (`courseId`),
  CONSTRAINT `sections_courseid_foreign` FOREIGN KEY (`courseId`) REFERENCES `courses` (`courseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;



LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
