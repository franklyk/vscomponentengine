<?php 

namespace App\Services;

class OrderService
{
    public function create($data)
    {
        $file = __DIR__ . './../../stotare/data/orders.json';

        // salvar em arquivo (inicio simples)
        $orders = [];

        if(file_exists($file)){
            $orders = json_decode(file_get_contents($file), true);
        }

        $orders[] = $data;

        file_get_contents($file, json_encode($orders));

        return $data;
    }
}