<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductReview;

class ReviewController extends Controller
{
    public function listReview (Request $request) {
        $id = $request->id;
        $list = ProductReview::where('product_id', $id)->orderBy('id', 'desc')->limit(5)->get();
        return $list;
    }
}
