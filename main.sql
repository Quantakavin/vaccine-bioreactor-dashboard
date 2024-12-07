CREATE DATABASE  IF NOT EXISTS `vaccine_bioreactor` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vaccine_bioreactor`;
-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: vaccine_bioreactor
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pH`
--

DROP TABLE IF EXISTS `pH`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pH` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Reading` decimal(10,2) NOT NULL,
  `Read_At` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pH`
--

LOCK TABLES `pH` WRITE;
/*!40000 ALTER TABLE `pH` DISABLE KEYS */;
INSERT INTO `pH` VALUES (7,4.20,'2024-11-25 14:35:42'),(8,4.60,'2024-11-25 14:35:59'),(9,4.80,'2024-11-25 14:36:30'),(10,5.10,'2024-11-25 14:37:07'),(11,4.90,'2024-11-25 14:37:12');
/*!40000 ALTER TABLE `pH` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Stirring`
--

DROP TABLE IF EXISTS `Stirring`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Stirring` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Reading` decimal(10,2) NOT NULL,
  `Read_At` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stirring`
--

LOCK TABLES `Stirring` WRITE;
/*!40000 ALTER TABLE `Stirring` DISABLE KEYS */;
INSERT INTO `Stirring` VALUES (1,1100.00,'2024-11-25 14:40:08'),(2,1200.00,'2024-11-25 14:40:12'),(3,1100.00,'2024-11-25 14:40:15'),(4,1150.00,'2024-11-25 14:40:18'),(5,1220.00,'2024-11-25 14:40:23');
/*!40000 ALTER TABLE `Stirring` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Temperature`
--

DROP TABLE IF EXISTS `Temperature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Temperature` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Reading` decimal(10,2) NOT NULL,
  `Read_At` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Temperature`
--

LOCK TABLES `Temperature` WRITE;
/*!40000 ALTER TABLE `Temperature` DISABLE KEYS */;
INSERT INTO `Temperature` VALUES (6,20.20,'2024-11-25 14:37:50'),(7,21.60,'2024-11-25 14:38:49'),(8,22.20,'2024-11-25 14:39:02'),(9,25.30,'2024-11-25 14:39:10'),(10,24.80,'2024-11-25 14:39:15'),(14,25.60,'2024-11-25 14:39:18'),(15,27.20,'2024-11-25 14:39:42'),(16,24.80,'2024-11-25 14:40:02'),(17,22.00,'2024-11-25 14:40:38'),(18,25.50,'2024-11-25 14:41:00');
/*!40000 ALTER TABLE `Temperature` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-07 12:22:26
