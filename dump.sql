-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql:3306
-- Tempo de geração: 11/11/2024 às 04:25
-- Versão do servidor: 9.1.0
-- Versão do PHP: 8.2.8
CREATE DATABASE IF NOT EXISTS sugestoes_preco;
USE sugestoes_preco;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sugestoes_preco`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `itens`
--

CREATE TABLE `itens` (
  `id` int NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `descricao` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `itens`
--

INSERT INTO `itens` (`id`, `preco`, `descricao`) VALUES
(1, 550.00, 'xbox'),
(2, 1400, 'nintendo'),
(3, 620.36, 'megadrive'),
(4, 1402, 'atari'),
(5, 602, 'wii'),
(6, 1260, 'gamecube');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `precoCusto` decimal(10,2) NOT NULL,
  `precoSugerido` decimal(10,2) NOT NULL,
  `usado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `descricao`, `precoCusto`, `precoSugerido`, `usado`) VALUES
(1, 'xbox 360', 500.67, 11.00, 1),
(2, 'playstation 4', 1720.25, 0.00, 0),
(3, 'nintendo', 1307.36, 0.00, 0),
(4, 'megadrive', 500.67, 0.00, 1),
(5, 'stick jogos', 1720.25, 0.00, 1),
(6, 'sega genesis', 1307.36, 0.00, 1),
(7, 'wii', 500.67, 0.00, 1),
(8, 'vita', 1720.25, 0.00, 1),
(9, 'atari', 1307.36, 0.00, 1),
(10, 'gamecube', 500.67, 0.00, 1),
(11, 'neo geo', 1720.25, 0.00, 1);


--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `itens`
--
ALTER TABLE `itens`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `itens`
--
ALTER TABLE `itens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;