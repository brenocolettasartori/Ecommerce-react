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

    public function postReview(Request $request){

        $product_name = $request->input('product_name');
        $product_id = $request->input('product_id');
        $user_name = $request->input('reviewer_name');
        $reviewer_picture = $request->input('reviewer_picture');
        $reviewer_rate = $request->input('reviewer_rate');
        $reviewer_comment = $request->input('reviewer_comment');

         $result = ProductReview::insert([
            'product_name' => $product_name,
            'product_id' => $product_id,
            'reviewer_name' => $user_name,
            'reviewer_picture' => $reviewer_picture,
            'reviewer_rate' => $reviewer_rate,
            'reviewer_comment' => $reviewer_comment,

         ]);
         return $result;

    }
}
