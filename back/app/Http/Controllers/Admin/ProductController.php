<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function AllProducts() {
        $products = Product::all();
        return $products;      
    }

    public function ProductListByType (Request $request) {
        $type = $request->type;
        $productList = Product::where('type', $type)->get();
        return $productList;
    }

    public function ProductListByCategory (Request $request) {
        $category = $request->category;
        $productList = Product::where('category', $category)->get();
        return $productList;
    }
}
