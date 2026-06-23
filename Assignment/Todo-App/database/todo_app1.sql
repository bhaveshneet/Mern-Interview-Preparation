-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: todo_app1
-- ------------------------------------------------------
-- Server version	8.4.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `task_name` varchar(255) NOT NULL,
  `description` text,
  `priority` enum('High','Medium','Low') DEFAULT 'Medium',
  `due_date` datetime DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `status` enum('Pending','In Progress','Completed') DEFAULT 'Pending',
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `todos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` VALUES (2,'Learn Ts','skill','Medium','2026-06-23 12:22:00','Personal','In Progress',1,'2026-06-23 07:04:58','2026-06-23 07:51:43'),(3,'Learn Js','skills','Medium','2026-06-23 15:31:00','Personal','In Progress',1,'2026-06-23 10:01:32','2026-06-23 10:01:32'),(4,'Learn Java','Skill','Low','2026-06-23 15:32:00','Personal','Pending',1,'2026-06-23 10:02:15','2026-06-23 10:02:15'),(5,' Study','Prepare for exam.','Medium','2026-06-25 15:49:00','Personal','In Progress',1,'2026-06-23 10:20:04','2026-06-23 10:20:04'),(6,'Learn Js','study','Medium','2026-06-24 16:08:00','Personal','In Progress',1,'2026-06-23 10:38:35','2026-06-23 10:38:35'),(7,'Learn Ts','skill','Low','2026-06-23 16:31:00','Work','In Progress',1,'2026-06-23 11:01:35','2026-06-23 11:01:35'),(8,'Learn Js','skill','Medium','2026-06-24 11:17:00','Personal','Pending',1,'2026-06-23 11:18:08','2026-06-23 12:34:38'),(9,'Learn Ts','Skills','Low','2026-06-23 12:14:00','Study','In Progress',2,'2026-06-23 12:11:45','2026-06-23 12:33:11'),(11,'Learn Java','Study','Medium','2026-06-23 18:03:00','Study','Pending',2,'2026-06-23 12:33:42','2026-06-23 12:33:42'),(12,'Learn Ts','study','Low','2026-06-23 18:44:00','Work','Pending',1,'2026-06-23 13:14:41','2026-06-23 13:14:41');
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Bhavesh','bhavesh@gmail.com','$2b$10$67WE3tIw0O5Oa2iQmPPLU.s4AbRYn24by9qXIMPQ0t1lqfqa9a.I6','2026-06-22 04:57:36'),(2,'Om','om@gmail.com','$2b$10$77qMsZ00nMANTsKBct0YDu5Mohf9m9OrJgyx3./GDHsB1Wq.Zp6tm','2026-06-23 12:10:18');
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

-- Dump completed on 2026-06-23 19:24:58
