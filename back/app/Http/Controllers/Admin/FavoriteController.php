<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Favorite;
use App\Models\Product;

class FavoriteController extends Controller
{
   public function addToFavorite(Request $request) {
    $product_code = $request->product_code;
    $email = $request->email;
    $productDetails = Product::where('product_code', $product_code)->get();

    $result = Favorite::insert([
        'product_name' => $productDetails[0]['title'],
        'image' => $productDetails[0]['image'],
        'product_code' => $product_code,
        'email' => $email,  
    ]);
    return $result;
   }

   public function listFavorite(Request $request) {
    $email = $request->email;
    $result = Favorite::where('email', $email)->get();
    return $result;
   }

   public function removeFavorite(Request $request) {
    $product_code = $request->product_code;
    $email = $request->email;

    $result = Favorite::where('product_code', $product_code)->where('email', $email )->delete();
    return $result;
   }
}
