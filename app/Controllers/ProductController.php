<?php 

namespace App\Controllers;

class ProductController
{
    public function index()
    {
        echo json_encode([
            ['id' => 1, 'name' => 'Produto A', 'price' => 100],
            ['id' => 2, 'name' => 'Produto B', 'price' => 200],
        ]);
    }
}