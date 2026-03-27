<?php

namespace App\Controllers;

use App\Services\OrderService;

class OrderController
{
    public function store(): void
    {
        $data = json_decode(file_get_contents("php://input"), true);

        $service = new OrderService();
        $order = $service->create($data);

        echo json_encode($order);
    }
}
