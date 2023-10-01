<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Ramsey\Uuid\Uuid;

class CategoryController extends Controller
{
    public function AllCategory() {
        $categories = Category::orderBy('id', 'asc')->get();
        return $categories;
    }

    public function getAllCategory(){
        $result = Category::orderBy('id', 'asc')->get();
        return view('admin.category.category_view', compact('result'));
    }

    public function addCategory(){
        return view('admin.category.category_add');
    }

    public function storeCategory(Request $request){
        // Garantir que os dados fornecidos atendam aos critérios definidos, no caso category name required
        $request->validate([
            'category_name' => 'required',
        ],[
            // Caso falhe a validação, uma mensagem de erro personalizada
            'category_name.required' => 'Please inform a name for the category'

        ]);

        $image = $request->file('category_image');
        // hexdec gera identificador único e o converte para hexadecimal decimal
        // getClientOriginalExtension obtém a extensão original do arquivo
        $name_gen = Uuid::uuid4()->toString().'.'.$image->getClientOriginalExtension();
        $image->move(public_path('upload/category'), $name_gen);
        // Constrói a URL completa da imagem e armazena na variável save_url
        $save_url = 'http://127.0.0.1:8000/upload/category/'.$name_gen;

        Category::create([
            'category_name' => $request->category_name,
            'category_image' => $save_url,
        ]);

        $notification = array(
            'message' => 'Category added succesfully',
            'alert-type' => 'success'
        );

        return redirect()->route('all.category')->with($notification);
    }

    public function editCategory($id){
        $result = Category::findOrFail($id);
        return view('admin.category.category_edit', compact('result'));
    }

    public function updateCategory(Request $request){
        $category_id = $request->id;

        if ($request->file('category_image')) {

        $image = $request->file('category_image');
        $name_gen = Uuid::uuid4()->toString().'.'.$image->getClientOriginalExtension();
        $image->move(public_path('upload/category'), $name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/category/'.$name_gen;
        // Category::findOrFail  tenta recuperar um objeto Category do banco de dados com base no $category_id, e caso não encontre lança uma exceção do tipo ModelNotFoundException 
        // Útil quando você espera que o registro exista e deseja lidar com o caso em que não é encontrado
        Category::findOrFail($category_id)->update([
            'category_name' => $request->category_name,
            'category_image' => $save_url,
        ]);

        $notification = array(
            'message' => 'Category updated successfully.',
            'alert-type' => 'success'
        );

        return redirect()->route('all.category')->with($notification);

        } else {
             Category::findOrFail($category_id)->update([
            'category_name' => $request->category_name,
        ]);

        $notification = array(
            'message' => 'Category updated successfully.',
            'alert-type' => 'success'
        );
    
        return redirect()->route('all.category')->with($notification);
        }
    }

    public function deleteCategory($id){

        Category::findOrFail($id)->delete();
    
        $notification = array(
                'message' => 'Category deleted successfully',
                'alert-type' => 'success'
            );
    
            return redirect()->back()->with($notification);    
        }

}
