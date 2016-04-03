INSERT INTO `courses` (`courseId`, `courseCode`, `semester`, `description`, `name`, `credits`) VALUES

(59, 'BIOL 206', 'Winter', 'A survey of classical and contemporary developments in the study of heredity, with particular attention to human examples.', 'Elementary Genetics', 3),
(61, 'BIOL 261', 'Winter', 'Basic genetic principles, including mechanisms of meiosis and mitosis, Mendelian genetics, recombination, gene mapping, and chromosome rearrangements', 'Molecular and General Genetics', 3), 
(64, 'CHEM 221', 'Winter', 'Basic aspects of orbitals and their role in covalent bonding; delocalization of electrons.', 'Introductory Organic Chemistry I', 3),
(66, 'ELEC 321', 'Winter', 'Fundamentals underlying optical and electronic devices. The structure and growth of crystals. ', 'Introduction to Semiconductor Materials and Devices', 3.5),
(68, 'ENGR 242', 'Winter', 'Resultant of force systems; equilibrium of particles and rigid bodies; distributed forces; statically determinate systems', 'Statics', 3), 
(71, 'ENGR 243', 'Winter', 'Kinematics of a particle and rigid body; forces and accelerations; work and energy; impulse and momentum.', 'Dynamics', 3), 
(74, 'ENGR 251', 'Winter', 'Basic principles of thermodynamics and their application to various systems composed of pure substances and their homogeneous non-reactive mixtures.', 'Thermodynamics I', 3), 
(77, 'ENGR 361', 'Winter', 'Basic concepts and principles of fluid mechanics. Classification of fluid flow. Hydrostatic forces on plane and curved surfaces, buoyancy and stability, fluids in rigid body motion.', 'Fluid Mechanics I', 3), 
(79, 'MECH 221', 'Winter', 'Relationships between properties and internal structure, atomic bonding; molecular, crystalline and amorphous structures.', 'Materials Science', 3), 
(80, 'PHYS 252', 'Winter', 'Wave equation, phasors, EM waves, linear, circular and elliptical polarization, polariscope, Malus law, dichroism.', 'Optics', 3),  


 INSERT INTO `sections` VALUES
('B',1,'MB-S2.330','Winter','Lecture',13,'11:45:00','13:00:00',59,'BIOL 206',1);

('02',2,'SP-S110-Loy','Winter','Lecture',35,'11:45:00','13:00:00',61,'BIOL 261',1);
('0201',3,'CC-301-Loy','Winter','Tutorial',2,'13:30:00','15:30:00',61,'BIOL 261',1);
('0202',4,'CC-301-Loy','Winter','Tutorial',2,'15:30:00','17:30:00',61,'BIOL 261',1);
('0203',5,'CJ-1.125-Loy','Winter','Tutorial',3,'13:30:00','15:30:00',61,'BIOL 261',1);
('0204',6,'CJ-1.125-Loy','Winter','Tutorial',3,'15:30:00','17:30:00',61,'BIOL 261',1);
('0205',7,'CC-101-Loy','Winter','Tutorial',4,'13:30:00','15:30:00',61,'BIOL 261',1);
('0206',8,'CC-101-Loy','Winter','Tutorial',4,'15:30:00','17:30:00',61,'BIOL 261',1);
('0207',9,'CC-106-Loy','Winter','Tutorial',4,'13:30:00','15:30:00',61,'BIOL 261',1);
('0208',10,'CC-106-Loy','Winter','Tutorial',4,'15:30:00','17:30:00',61,'BIOL 261',1);

('ECEA',11,'H-605','Winter','Tutorial',2,'13:15:00','14:05:00',66,'ELEC 321',1);
('EI-X',12,'H-823','Winter','Lab',1,'17:45:00','20:30:00',66,'ELEC 321',1);
('EJ-X',13,'H-823','Winter','Lab',1,'17:45:00','20:30:00',66,'ELEC 321',1);
('EK-X',14,'H-823','Winter','Lab',3,'17:45:00','20:30:00',66,'ELEC 321',1);
('EL-X',15,'H-823','Winter','Lab',3,'17:45:00','20:30:00',66,'ELEC 321',1);
('H HA',16,'H-557','Winter','Tutorial',2,'13:15:00','14:05:00',66,'ELEC 321',2);
('HI-X',17,'H-823','Winter','Lab',4,'17:45:00','20:30:00',66,'ELEC 321',2);
('HJ-X',18,'H-823','Winter','Lab',4,'17:45:00','20:30:00',66,'ELEC 321',2);
('HK-X',19,'H-823','Winter','Lab',4,'13:15:00','16:00:00',66,'ELEC 321',2);
('HL-X',20,'H-823','Winter','Lab',4,'13:15:00','16:00:00',66,'ELEC 321',2);
('EC',21,'ONLINE','Winter','Lecture',0,'00:00:00','00:00:00',66,'ELEC 321',1);
('EH',22,'FG-B030','Winter','Lecture',24,'13:15:00','14:05:00',66,'ELEC 321',2);

('WWWA',23,'MB-S2.285','Winter','Tutorial',4,'20:30:00','22:10:00',68,'ENGR 242',3);
('WW',24,'MB-S2.285','Winter','Lecture',4,'17:45:00','20:15:00',68,'ENGR 242',3);
('J-JA',25,'FG-B055','Winter','Tutorial',5,'13:15:00','15:25:00',68,'ENGR 242',1);
('J-JB',26,'FG-B080','Winter','Tutorial',5,'13:15:00','15:25:00',68,'ENGR 242',1);
('L-LA',27,'FG-B055','Winter','Tutorial',5,'13:15:00','19:25:00',68,'ENGR 242',2);
('L-LB',28,'FG-B080','Winter','Tutorial',5,'13:15:00','19:25:00',68,'ENGR 242',2);
('J',29,'H-553','Winter','Lecture',24,'11:45:00','13:00:00',68,'ENGR 242',1);
('L',30,'FG-B060','Winter','Lecture',24,'11:45:00','13:00:00',68,'ENGR 242',2);

('T-TA',31,'FG-B055','Winter','Tutorial',3,'11:45:00','13:25:00',71,'ENGR 243',1);
('T-TB',32,'FG-B055','Winter','Tutorial',3,'10:05:00','11:45:00',71,'ENGR 243',1);
('T-TC',33,'FG-B080','Winter','Tutorial',3,'11:45:00','13:25:00',71,'ENGR 243',1);
('TT-TE',34,'FG-B080','Winter','Tutorial',4,'20:30:00','22:10:00',71,'ENGR 243',2);
('TT-TF',35,'FG-B080','Winter','Tutorial',3,'10:05:00','11:45:00',71,'ENGR 243',2);
('TT-TG',36,'FG-B055','Winter','Tutorial',4,'08:30:00','10:10:00',71,'ENGR 243',2);
('X-XA',37,'FG-B080','Winter','Tutorial',1,'11:45:00','13:25:00',71,'ENGR 243',4);
('X-XB',38,'FG-B080','Winter','Tutorial',3,'14:45:00','16:25:00',71,'ENGR 243',4);
('X-XC',39,'H-459','Winter','Tutorial',1,'11:45:00','13:25:00',71,'ENGR 243',4);
('T',40,'FG-C070','Winter','Lecture',24,'11:45:00','13:00:00',71,'ENGR 243',1);
('TT',41,'FG-C070','Winter','Tutorial',4,'17:45:00','20:15:00',71,'ENGR 243',1);
('X',42,'FG-C070','Winter','Lecture',24,'11:45:00','13:00:00',71,'ENGR 243',4);
('V-VA',43,'FG-B055','Winter','Tutorial',3,'14:45:00','16:25:00',71,'ENGR 243',3);
('V-VB',44,'FG-B055','Winter','Tutorial',1,'11:45:00','13:25:00',71,'ENGR 243',3);
('V-VC',45,'H-423','Winter','Tutorial',3,'14:45:00','16:25:00',71,'ENGR 243',3);
('V',46,'MB-3.210','Winter','Tutorial',35,'11:30:00','11:30:00',71,'ENGR 243',3);

('W-WA',47,'H-403','Winter','Tutorial',5,'11:45:00','13:25:00',74,'ENGR 251',1);
('W-WB',48,'H-423','Winter','Tutorial',5,'11:45:00','13:25:00',74,'ENGR 251',1);
('W',49,'H-415','Winter','Lecture',35,'8:45:00','10:00:00',74,'ENGR 251',1);
('V-VA',50,'FG-B055','Winter','Tutorial',5,'11:45:00','13:25:00',74,'ENGR 251',2);
('V-VB',51,'FG-B080','Winter','Tutorial',5,'11:45:00','13:25:00',74,'ENGR 251',2);
('XX-XE',52,'H-459','Winter','Tutorial',5,'15:30:00','17:10:00',74,'ENGR 251',3);
('XX-XF',53,'H-629','Winter','Tutorial',5,'15:30:00','17:10:00',74,'ENGR 251',3);
('V',54,'H-411','Winter','Lecture',24,'10:15:00','11:30:00',74,'ENGR 251',2);
('XX',55,'H-407','Winter','Lecture',5,'17:45:00','20:15:00',74,'ENGR 251',3);

('ECEA',56,'H-603','Winter','Tutorial',5,'15:15:00','16:05:00',77,'ENGR 361',1);
('ECEB',57,'H-403','Winter','Tutorial',5,'16:15:00','17:05:00',77,'ENGR 361',1);
('ECEC',58,'H-539','Winter','Tutorial',5,'15:15:00','16:05:00',77,'ENGR 361',1);
('ECED',59,'H-6565','Winter','Tutorial',5,'16:15:00','17:05:00',77,'ENGR 361',1);
('EC',60,'ONLINE','Winter','Lecture',0,'00:00:00','00:00:00',77,'ENGR 361',1);

('W-WA',61,'H-427','Winter','Tutorial',5,'15:15:00','16:05:00',79,'MECH 221',1);
('W-WB',62,'H-523','Winter','Tutorial',5,'15:15:00','16:05:00',79,'MECH 221',1);
('W',63,'H-531','Winter','Lecture',24,'11:30:00','11:30:00',79,'MECH 221',1);

('01',64,'CC-112-Loy','Winter','Lecture',24,'10:15:00','11:30:00',80,'PHYS 252',1);

--insert chem 221 here