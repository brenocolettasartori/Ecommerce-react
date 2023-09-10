<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductCart;
use App\Models\Product;

class CartController extends Controller
{
    public function addToCart(Request $request) {
        $email = $request->input('email');
        $size = $request->input('size');
        $color = $request->input('color');
        $quantity = $request->input('quantity');
        $product_code = $request->input('product_code');

        $productDetails = Product::where('product_code',$product_code)->get();

        $special_price = $productDetails[0]['special_price'];
        $price = $productDetails[0]['price'];

        if($special_price == "na"){
            $total_price = $price * $quantity;
            $unit_price = $price;
        }else{
            $total_price = $special_price * $quantity;
            $unit_price = $special_price;
        }

        $result = ProductCart::insert([
            'email' => $email,
            'image' => $productDetails[0]['image'],
            'product_name' => $productDetails[0]['title'],
            'product_code' => $productDetails[0]['product_code'],
            'size' => "Size: ".$size,
            'color' => "Color: ".$color,
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
}
