CREATE DATABASE  IF NOT EXISTS `siempre_limpio_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `siempre_limpio_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: siempre_limpio_db
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,1,'Calle falsa 123',123,'Ciudad falsa','Provincia falsa',12345,'Pais falso',1,'2024-05-06 10:10:33','2024-05-06 10:10:33');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Detergentes','2024-05-06 10:10:33','2024-05-06 10:10:33'),(2,'Limpiadores líquidos','2024-05-06 10:10:33','2024-05-06 10:10:33'),(3,'Accesorios','2024-05-06 10:10:33','2024-05-06 10:10:33'),(4,'Aerosoles','2024-05-06 10:10:33','2024-05-06 10:10:33'),(5,'Geles','2024-05-06 10:10:33','2024-05-06 10:10:33'),(6,'Jabones','2024-05-06 10:10:33','2024-05-06 10:10:33'),(7,'Limpiadores','2024-05-06 10:10:33','2024-05-06 10:10:33');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,1,NULL,'2024-05-06 10:10:33','2024-05-06 10:10:33');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2022-01-01 00:00:00',2,NULL,1,'2024-05-06 10:10:33','2024-05-06 10:10:33');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
INSERT INTO `payment_method` VALUES (1,'Tarjeta de Credito','2024-05-06 10:10:33','2024-05-06 10:10:33'),(2,'Tarjeta de Debito','2024-05-06 10:10:33','2024-05-06 10:10:33'),(3,'Efectivo','2024-05-06 10:10:33','2024-05-06 10:10:33');
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Detergente If',599,1,NULL,'detergente.jpg','Detergente líquido para lavar ropa, elimina manchas y deja la ropa limpia y fresca.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(2,'Limpiador multiusos',349,7,NULL,'limpiador.jpg','Limpiador multiusos para diversas superficies, elimina la suciedad y deja un agradable aroma.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(3,'Cloro',675,2,NULL,'desinfectante.jpg','Desinfectante de superficies efectivo contra gérmenes y bacterias, ideal para mantener la higiene en el hogar.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(4,'Esponja de acero',125,3,NULL,'esponjilla.jpg','Esponja resistente para fregar utensilios de cocina y superficies, facilita la limpieza de manera eficiente.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(5,'Limpiador en aerosol',499,4,NULL,'limpiador_aerosol.jpg','Limpiador en aerosol para eliminar manchas y suciedad de manera rápida y sencilla.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(6,'Gel desinfectante de manos',299,5,NULL,'desinfectante_manos.jpg','Gel desinfectante de manos para una limpieza efectiva en cualquier momento y lugar.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(7,'Jabón blanco en barra',199,6,NULL,'jabon.jpg','Jabón en barra con suave fragancia, limpia y cuida la piel dejándola suave y fresca.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(8,'Jabón líquido para ropa',425,1,NULL,'quitamanchas.jpg','Quitamanchas efectivo para eliminar manchas difíciles en prendas de vestir y textiles.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(9,'Toallitas desinfectantes',375,2,NULL,'toallitas.jpg','Toallitas desinfectantes para una limpieza rápida y conveniente de superficies y objetos.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(10,'Cepillo para pelo',249,3,NULL,'cepillo.jpg','Cepillo de limpieza con cerdas resistentes, ideal para remover la suciedad incrustada.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(11,'Ambientador en spray',399,4,NULL,'ambientador.jpg','Ambientador en spray con fragancia fresca, elimina los malos olores y deja un ambiente agradable.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(12,'Limpiador de ventanas',450,7,NULL,'limpiador_ventanas.jpg','Limpiador especialmente formulado para dejar cristales y ventanas relucientes y sin marcas.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(13,'Desengrasante',599,2,NULL,'desengrasante.jpg','Desengrasante potente para eliminar la grasa y la suciedad difícil en cocinas y superficies.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(14,'Esponjilla de metal',499,3,NULL,'esponjilla.jpg','Esponjilla de metal para multiples usos.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(15,'Bolsas de basura',325,3,NULL,'bolsas_basura.jpg','Bolsas resistentes para desechar los residuos de manera segura y conveniente.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(16,'Desodorante para ambientes',875,4,NULL,'desodorante.jpg','Desodorante en aerosol que neutraliza los olores y refresca el ambiente.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(17,'Limpiador de baños',550,7,NULL,'limpiador_banos.jpg','Limpiador especialmente formulado para eliminar la suciedad y los residuos en baños y sanitarios.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(18,'Jabón líquido para manos',325,6,NULL,'jabon_liquido.jpg','Jabón líquido suave para manos, limpia y protege la piel dejándola suave y humectada.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(19,'Desinfectante de suelos',699,2,NULL,'desinfectante_suelos.jpg','Desinfectante de suelos efectivo para eliminar gérmenes y bacterias, dejando una superficie limpia y segura.','2024-05-06 10:10:33','2024-05-06 10:10:33'),(20,'Paño de limpieza',199,3,NULL,'pano_limpieza.jpg','Paño de limpieza suave y absorbente, ideal para limpiar superficies sin dejar residuos.','2024-05-06 10:10:33','2024-05-06 10:10:33');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'usuario'),(2,'ADMIN'),(3,'ENCARGADO'),(4,'SUPERVISOR');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240427104822-create-role.js'),('20240427105234-create-user.js'),('20240427105235-create-address.js'),('20240429231920-create-category.js'),('20240429231921-create-product.js'),('20240503214120-create-payment-method.js'),('20240503215421-create-order.js'),('20240503215645-create-order-item.js'),('20240505015842-create-status.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'pendiente','2024-05-06 10:10:33','2024-05-06 10:10:33'),(2,'completada','2024-05-06 10:10:33','2024-05-06 10:10:33'),(3,'cancelada','2024-05-06 10:10:33','2024-05-06 10:10:33');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rodrigo','Ruiz','rodrigo10ruiz@hotmail.com','$2a$10$CN/ZUoChybwnA17b8o8twePgkmvxEIgJNTqdkw0KlPWWDMpzjUYva','',1,'2024-05-06 10:10:33','2024-05-06 10:10:33'),(2,'sad11111111111111','asd','jose@gmail.com','$2a$10$LO0uxJn1Lf1m.pztaNUzxOLHAjWcDMU/UUTVSORRATnmmrGdSwgxq','',1,'2024-05-06 10:10:33','2024-05-06 10:10:33'),(3,'asdasdasd','asdasd','lazarofeijoo2004@gmail.com','$2a$10$aS/ZpDImWt8.mvtPTnXhcuhPbd/9ddjQw5LzWHlsjwY.BSyLONJkW','',1,'2024-05-06 10:10:33','2024-05-06 10:10:33');
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

-- Dump completed on 2024-05-06  7:16:33
