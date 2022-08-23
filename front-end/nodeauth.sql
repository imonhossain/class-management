-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2020 at 07:53 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `class_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `assigns`
--

CREATE TABLE `assigns` (
  `assign_id` int(5) NOT NULL,
  `semister` varchar(15) NOT NULL,
  `section` varchar(3) NOT NULL,
  `register_student` int(3) NOT NULL,
  `course_id` int(11) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assigns`
--

INSERT INTO `assigns` (`assign_id`, `semister`, `section`, `register_student`, `course_id`, `teacher_id`) VALUES
(39, '4', '', 20, 4, 12),
(40, '4', '', 65, 6, 12),
(41, '2', '', 20, 7, 10),
(42, '10', '', 12, 10, 14),
(43, '12', '', 10, 7, 14),
(44, '9', '', 35, 6, 12),
(45, '11', '', 20, 6, 12),
(46, '12', '', 20, 15, 12),
(47, '1', '', 55, 4, 12),
(48, '12', '', 35, 6, 14);

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `booking_id` int(5) NOT NULL,
  `day` varchar(11) DEFAULT NULL,
  `startDate` varchar(20) NOT NULL,
  `endDate` varchar(20) NOT NULL,
  `room_id` int(11) DEFAULT NULL,
  `assign_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`booking_id`, `day`, `startDate`, `endDate`, `room_id`, `assign_id`) VALUES
(32, 'Friday', '08:45:00', '10:45:00', 1, 39),
(33, 'Friday', '10:45:00', '12:45:00', 10, 40),
(34, 'Friday', '10:45:00', '11:45:00', 1, 41),
(35, 'Friday', '14:30:00', '16:30:00', 1, 42),
(36, 'Friday', '11:45:00', '12:45:00', 1, 43),
(38, 'Friday', '16:30:00', '18:30:00', 1, 45),
(39, 'Friday', '18:30:00', '20:30:00', 1, 46),
(40, 'Friday', '08:45:00', '10:45:00', 10, 47),
(41, 'Friday', '08:45:00', '10:45:00', 7, 48);

-- --------------------------------------------------------

--
-- Table structure for table `booking_slots`
--

CREATE TABLE `booking_slots` (
  `id` int(11) UNSIGNED NOT NULL,
  `booking_id` int(11) NOT NULL,
  `time_slot_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking_slots`
--

INSERT INTO `booking_slots` (`id`, `booking_id`, `time_slot_id`) VALUES
(32, 28, 1),
(33, 28, 2),
(34, 29, 3),
(35, 30, 1),
(36, 30, 2),
(37, 31, 3),
(38, 32, 1),
(39, 32, 2),
(40, 33, 3),
(41, 33, 4),
(42, 34, 3),
(43, 35, 5),
(44, 35, 6),
(45, 36, 4),
(46, 37, 1),
(47, 37, 2),
(48, 38, 7),
(49, 38, 8),
(50, 39, 9),
(51, 39, 10),
(52, 40, 1),
(53, 40, 2),
(54, 41, 1),
(55, 41, 2);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(5) NOT NULL,
  `course_code` varchar(10) NOT NULL,
  `course_name` varchar(150) NOT NULL,
  `course_credit` int(1) NOT NULL,
  `semester` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_code`, `course_name`, `course_credit`, `semester`) VALUES
(1, 'MATH 2204', 'Mathematics IV (Complex Variable &\r\nLaplace Transformation)', 2, 42),
(4, 'CSE 2109', 'Electronic Engineering', 3, 10),
(5, 'CSE 2161', 'Electronic Engineering Lab Work', 1, 42),
(6, 'CSE 3168', 'Numerical Methods', 3, 45),
(7, 'CSE 3186', 'Numerical Methods Lab work', 1, 45),
(10, 'CSE 3124', 'Microprocessor and Assembly Language\r\nprogramming', 3, NULL),
(11, 'CSE 3171', 'Microprocessor and Assembly Language\r\nprogramming Lab Work', 1, NULL),
(13, ' CSE 2291', 'Software Development II (Database\r\nProgramming)', 1, NULL),
(15, 'XSE252', 'Database programming', 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(5) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `number` int(15) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`, `role`) VALUES
(1, 'Imon', 'Hossain', 'm', 'imon@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 25555, 'admin'),
(2, 'Sadmin', 'Rashik', 'm', 'sadman@gmail.com', '123456', 1562555, 'Teacher'),
(3, 'Imon', 'Hossain', 'm', 'abc@gmail.com', '$2b$10$mhrl/.FAaUN7gwTL7JitXOSCQ.DTK4Xt4jgMPOvlLg9OlvYIl1sze', 25555, 'admin'),
(4, 'Taskin', 'Fatema', 'f', 'taskin.fatema@gmail.com', '$2b$10$HGuvuKevRUzhsKCPfl.U..YApUrCgJCjvlQV6Nz0TuVBkk2790YOS', 25555, 'teacher'),
(5, 'Taskin', 'Fatema', 'f', 'taskin.fatema@gmail.com', '$2b$10$AzSwv.3oKadubXkrKIlK8OUDddUxAbnMLdo9Yhip9Dl4mERn477im', 25555, '');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_id` int(5) NOT NULL,
  `number` varchar(11) NOT NULL,
  `capacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_id`, `number`, `capacity`) VALUES
(1, '601', 25),
(4, '501', 30),
(7, '602', 35),
(8, '503', 40),
(9, '502', 45),
(10, '603', 70);

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `teacher_id` int(5) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`teacher_id`, `name`, `phone`, `email`) VALUES
(10, 'towfique hasan', '01939318003', 'towfiquehasan02@gmail.com'),
(11, 'Taskin Fatema', '04155445512', 'TaskinFatema@gmail.com'),
(12, 'Abul Al Arabi', '01555852558', 'abulAlArabi@gmail.com'),
(13, 'Tajnin Rahman', '12555444555', 'tajninRahman@gmail.com'),
(14, 'Arefeen Sultan', '01939318001', 'arefeenSultan@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `time_slots`
--

CREATE TABLE `time_slots` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `day_group` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `time_slots`
--

INSERT INTO `time_slots` (`id`, `name`, `start_time`, `end_time`, `day_group`) VALUES
(1, '08:45 AM - 09-45 AM', '08:45:00', '09:45:00', 1),
(2, '09:45 AM - 10-45 AM', '09:45:00', '10:45:00', 1),
(3, '10:45 AM - 11-45 AM', '10:45:00', '11:45:00', 1),
(4, '11:45 AM - 12-45 AM', '11:45:00', '12:45:00', 1),
(5, '14:30 PM - 15-30 PM', '14:30:00', '15:30:00', 2),
(6, '15:30 PM - 16-30 PM', '15:30:00', '16:30:00', 2),
(7, '16:30 PM - 17-30 PM', '16:30:00', '17:30:00', 2),
(8, '17:30 PM - 18-30 PM', '17:30:00', '18:30:00', 2),
(9, '18:30 PM - 19-30 PM', '18:30:00', '19:30:00', 2),
(10, '19:30 PM - 20-30 PM', '19:30:00', '20:30:00', 2),
(11, '18:00 PM - 19-00 PM', '18:00:00', '19:00:00', 3),
(12, '19:00 PM - 20-00 PM', '19:00:00', '20:00:00', 3),
(13, '20:00 PM - 21-00 PM', '20:00:00', '21:00:00', 3),
(14, '21:00 PM - 22-00 PM', '21:00:00', '22:00:00', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assigns`
--
ALTER TABLE `assigns`
  ADD PRIMARY KEY (`assign_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `assign_id` (`assign_id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `booking_slots`
--
ALTER TABLE `booking_slots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD UNIQUE KEY `course_code` (`course_code`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_id`),
  ADD UNIQUE KEY `number` (`number`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`teacher_id`);

--
-- Indexes for table `time_slots`
--
ALTER TABLE `time_slots`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assigns`
--
ALTER TABLE `assigns`
  MODIFY `assign_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `booking_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `booking_slots`
--
ALTER TABLE `booking_slots`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `room_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `teacher_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `time_slots`
--
ALTER TABLE `time_slots`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assigns`
--
ALTER TABLE `assigns`
  ADD CONSTRAINT `assigns_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  ADD CONSTRAINT `assigns_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`);

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`assign_id`) REFERENCES `assigns` (`assign_id`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
