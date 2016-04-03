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



('02', 65, 'CC-310-LOY', 'Winter', 'Lecture', 24, '10:15:00', '11:30:00', 64, 'CHEM 221',1);
('06L', 66, 'SP-116-LOY', 'Winter', 'Lab', 1, '13:30:00', '17:30:00', 64, 'CHEM 221', 1);
('07L', 67, 'SP-116-LOY', 'Winter', 'Lab', 3, '13:30:00', '17:30:00', 64, 'CHEM 221', 1);
('08L', 68, 'SP-116-LOY', 'Winter', 'Lab', 4, '13:30:00', '17:30:00', 64, 'CHEM 221', 1);
('09L', 69, 'SP-116-LOY', 'Winter', 'Lab', 5, '09:00:00', '13:00:00', 64, 'CHEM 221', 1);
('10L', 70, 'SP-112-LOY', 'Winter', 'Lab', 1, '09:30:00', '13:00:00', 64, 'CHEM 221', 1);
('52L', 71, 'SP-116-LOY', 'Winter', 'Lab', 2, '18:30:00', '22:30:00', 64, 'CHEM 221', 1);
('56L', 72, 'N/A', 'Winter', 'Lab', 0, '00:00:00', '00:00:00', 64, 'CHEM 221', 1);

('53', 73, 'CC-321-LOY', 'Winter', 'Lecture', 4, '18:00:00', '20:30:00', 64, 'CHEM 221', 2);
('06L', 74, 'SP-116-LOY', 'Winter', 'Lab', 1, '13:30:00', '17:30:00', 64, 'CHEM 221', 2);
('07L', 75, 'SP-116-LOY', 'Winter', 'Lab', 3, '13:30:00', '17:30:00', 64, 'CHEM 221', 2);
('08L', 76, 'SP-116-LOY', 'Winter', 'Lab', 4, '13:30:00', '17:30:00', 64, 'CHEM 221', 2);
('09L', 77, 'SP-116-LOY', 'Winter', 'Lab', 5, '09:00:00', '13:00:00', 64, 'CHEM 221', 2);
('10L', 78, 'SP-112-LOY', 'Winter', 'Lab', 1, '09:30:00', '13:00:00', 64, 'CHEM 221', 2);
('52L', 79, 'SP-116-LOY', 'Winter', 'Lab', 2, '18:30:00', '22:30:00', 64, 'CHEM 221', 2);
('56L', 80, 'N/A', 'Winter', 'Lab', 0, '00:00:00', '00:00:00', 64, 'CHEM 221', 2);