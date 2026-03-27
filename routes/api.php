<?php 

// routes/api.php
use App\Core\Router;
use App\Controllers\ProductController;
use App\Controllers\OrderController;

$router = new Router();

$router->get('/api/products', [ProductController::class, 'index']);
$router->post('/api/orders', [OrderController::class, 'store']);

$router->dispatch();