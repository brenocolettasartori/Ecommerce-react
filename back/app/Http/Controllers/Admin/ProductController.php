<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\ProductDetails;
use App\Http\Controllers\Admin\ProductDetailsController;
use Ramsey\Uuid\Uuid;

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

    public function searchByProduct (Request $request) {
        $key = $request->key;
        $productList = Product::whereRaw('title ILIKE ?', ["%{$key}%"])->get(); // procurar sequência de texto (key) em qualquer lugar
        return $productList;
    }

    public function relatedProduct (Request $request) {
        $category = $request->category;
        $productList = Product::where('category', $category)->orderBy('id', 'desc')->limit(6)->get();
        return $productList;
    }

    public function getAllProduct(){
        $result = Product::orderBy('id', 'asc')->paginate(10);
        return view('admin.product.product_view', compact('result'));
    }

    public function addProduct(){
        $category = Category::orderBy('category_name', 'ASC')->get();
        return view('admin.product.product_add', compact('category'));
    }

    public function storeProduct(Request $request){

        $request->validate([
           'product_code' => 'required',
       ], [
           'product_code.required' => 'Please inform a code for product'

       ]);

       $image = $request->file('image');
       if ($image) {
        $name_gen = Uuid::uuid4()->toString().'.'.$image->getClientOriginalExtension();
        $image->move(public_path('upload/product'), $name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/product/'.$name_gen;
        } else {
        $save_url = null;
    }

    $product_id = Product::insertGetId([
        'product_code' => $request->product_code,
        'title' => $request->title,
        'price' => $request->price,
        'discount' => $request->discount,
        'image' => $save_url,
        'category' => $request->category,
        'type' => $request->type,
    ]);   

       $image1 = $request->file('image_one');
       if($image1) {
       $name_gen1 = Uuid::uuid4()->toString().'.'.$image1->getClientOriginalExtension();
       $image1->move(public_path('upload/productdetails'), $name_gen1);
       $save_url1 = 'http://127.0.0.1:8000/upload/productdetails/'.$name_gen1;
       } else {
        $save_url1 = null;
       }
       
       $image2 = $request->file('image_two');
       if($image2){
       $name_gen2 = Uuid::uuid4()->toString().'.'.$image2->getClientOriginalExtension();
       $image2->move(public_path('upload/productdetails'), $name_gen2);
       $save_url2 = 'http://127.0.0.1:8000/upload/productdetails/'.$name_gen2;
       } else {
        $save_url2 = null;
       }

       $image3 = $request->file('image_three');
       if($image3){
       $name_gen3 = Uuid::uuid4()->toString().'.'.$image3->getClientOriginalExtension();
       $image3->move(public_path('upload/productdetails'), $name_gen3);
       $save_url3 = 'http://127.0.0.1:8000/upload/productdetails/'.$name_gen3;
       } else {
        $save_url3 = null;
       }
      
           ProductDetails::insert([
               'product_id' => $product_id,
               'image_one' => $save_url1,
               'image_two' => $save_url2,
               'image_three' => $save_url3,
               'color' =>  $request->color,
               'size' =>  $request->size,
           ]);
   
           $notification = array(
               'message' => 'Product added successfully',
               'alert-type' => 'success'
           );
   
           return redirect()->route('all.product')->with($notification);
   }
   
    public function editProduct($id){
    $product= Product::findOrFail($id);
    $details = ProductDetails::where('product_id', $id)->get();
    $category = Category::orderBy('category_name', 'ASC')->get();
    return view('admin.product.product_edit', compact('product', 'details', 'category'));
    }

    public function updateProduct(Request $request){
        $product_id = $request->id;
    
        // Atualização dos dados principais do produto
        $productData = [
            'product_code' => $request->product_code,
            'title' => $request->title,
            'price' => $request->price,
            'discount' => $request->discount,
            'category' => $request->category,
            'type' => $request->type,
        ];
    
        // Verifica se há uma nova imagem principal
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name_gen = Uuid::uuid4()->toString().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('upload/product'), $name_gen);
            $save_url = 'http://127.0.0.1:8000/upload/product/'.$name_gen;
            $productData['image'] = $save_url;
        }
    
        Product::findOrFail($product_id)->update($productData);
    
        // Atualização dos detalhes do produto
        $productDetailsData = [
            'color' => $request->color,
            'size' => $request->size,
        ];
    
        foreach (['image_one', 'image_two', 'image_three'] as $imageField) {
            if ($request->hasFile($imageField)) {
                $name_gen = Uuid::uuid4()->toString().'.'.$request->file($imageField)->getClientOriginalExtension();
                $request->file($imageField)->move(public_path('upload/productdetails'), $name_gen);
                $productDetailsData[$imageField] = 'http://127.0.0.1:8000/upload/productdetails/'.$name_gen;
            }
        }
    
        ProductDetails::where('product_id', $product_id)->update($productDetailsData);
    
        $notification = [
            'message' => 'Product updated successfully.',
            'alert-type' => 'success'
        ];
    
        return redirect()->route('all.product')->with($notification);
    }

   public function deleteProduct($id){

    Product::findOrFail($id)->delete();

    $notification = array(
            'message' => 'Product deleted successfully',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);    
    }

 }
