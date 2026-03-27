<?php 

require __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

// carregar env
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// resposta padrão json
header('Content-Type: application/json');

// router
require __DIR__ . '/../routes/api.php';