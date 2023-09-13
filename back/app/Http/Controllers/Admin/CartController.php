<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductCart;
use App\Models\Product;
use App\Models\Order;

class CartController extends Controller
{
    public function addToCart(Request $request) {
        $email = $request->input('email');
        $size = $request->input('size');
        $color = $request->input('color');
        $quantity = $request->input('quantity');
        $product_code = $request->input('product_code');

        $productDetails = Product::where('product_code',$product_code)->get();

        $special_price = $productDetails[0]['discount'];
        $price = $productDetails[0]['price'];

        if($special_price == "na"){
            setlocale(LC_NUMERIC, 'en_US.UTF-8');
            $unit_price = $price;
            (float) $total_price = (float) $price * (int)$quantity;
        }else{
            $unit_price = $special_price;
            $total_price = $special_price * $quantity;
        }

        $result = ProductCart::insert([
            'email' => $email,
            'image' => $productDetails[0]['image'],
            'product_name' => $productDetails[0]['title'],
            'product_code' => $productDetails[0]['product_code'],
            'size' => $size,
            'color' => $color,
            'quantity' => $quantity,
            'unit_price' => $unit_price,
            'total_price' => $total_price, 

        ]);

        return $result;
    }

    public function cartCount(Request $request){
        $product_code = $request->product_code;
        $count = ProductCart::count();
        return $count;
    }

    public function listCart(Request $request) {
        $email = $request->email;
        $result = ProductCart::where('email', $email)->get();
        return $result;
    }

    public function removeCart(Request $request) {
        $product_code = $request->product_code;
        $email = $request->email;
    
        $result = ProductCart::where('product_code', $product_code)->where('email', $email )->delete();
        return $result;
       }

    public function addItem(Request $request){
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity + 1; // add one by one
        $total_price = $newQuantity * $price;
        $result = ProductCart::where('id', $id)->update(['quantity' => $newQuantity, 'total_price' => $total_price]);
        return $result;
    }

    public function removeItem(Request $request){
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity - 1; // delete one by one
        $total_price = $newQuantity * $price;
        $result = ProductCart::where('id', $id)->update(['quantity' => $newQuantity, 'total_price' => $total_price]);
        return $result;
    }

    public function Order(Request $request){
        $country = $request->input('country');
        $paymentMethod = $request->input('payment_method');
        $email = $request->input('email');
        $deliveryAddress = $request->input('delivery_address');
        $invoiceNumber = $request->input('invoice_number');
        $shipment = $request->input('shipment');

        date_default_timezone_set("America/Sao_Paulo");
        $request_time = date("h:i:sa");
        $request_date = date("d-m-Y");

        $cartList = ProductCart::where('email', $email)->get();

        foreach($cartList as $cartItems){
            $cartDelete = "";

            $result = Order::insert([
                'invoice_number' => "".$invoiceNumber,
                'product_name' => $cartItems['product_name'],
                'product_code' => $cartItems['product_code'],
                'size' => $cartItems['size'],
                'color' => $cartItems['color'],
                'quantity' => $cartItems['quantity'],
                'unit_price' => $cartItems['unit_price'],
                'total_price' => $cartItems['total_price'],
                'email' => $cartItems['email'],
                'country' => $country,
                'payment_method' => $paymentMethod,
                'delivery_address' => $deliveryAddress,
                'shipment' => $shipment,
                'order_date' => $request_date,
                'order_time' => $request_time,
                'order_status' => "Pending",
            ]);
            // If result = 1 theres a order pending and it needs to be deleted to proceed
            if ($result == 1) {
               $resultOfDelete = ProductCart::where('id', $cartItems['id'])->delete();
               if ($resultOfDelete == 1) {
                   $cartDelete = 1;
               } else {
                   $cartDelete = 0;
               }
            }
        }
            return $cartDelete;
    }

    public function orderListByEmail(Request $request){
        $email = $request->email;
        $result = Order::where('email', $email)->orderBy('id', 'DESC')->get();
        return $result;
    }
   
}
