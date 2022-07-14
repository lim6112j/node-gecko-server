CREATE DATABASE geckodb;

--       id: 1,
--       name: 'Cutey',
--       age: 2,
--       origin: 'korea',
--       color: 'yellow',
--       father: 1,
--       mother: 2,
--       thumbnail: "assets/images/yellow.jpeg",
--       images: "img1, img2",
--       ancestry: "2/",
CREATE TABLE `geckodb`.`geckos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NULL,
  `origin` VARCHAR(255) NULL,
  `color` VARCHAR(45) NULL,
  `desc` TEXT NULL,
  `father` INT NULL,
  `mother` INT NULL,
  `thumbnail` VARCHAR(255) NOT NULL,
  `images` VARCHAR(255),
  `ancestry` VARCHAR(100),
  PRIMARY KEY (`id`));

CREATE TABLE `geckodb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` int NULL,
  `desc` TEXT NULL,
  PRIMARY KEY (`id`));
