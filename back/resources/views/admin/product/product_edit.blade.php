@extends('admin.admin_master')
@section('page_wrapper')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Edit Product</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->

            <div class="container">
                <div class="main-body">
                    <div class="row">
                        <div class="col-lg-8">
                            <form method="post" action="{{ route('product.update') }}" enctype="multipart/form-data"> 
                                @csrf
                                <div class="row">
						   <div class="col-lg-8">
                           <div class="border border-3 p-4 rounded">
							<div class="mb-3">
								<label for="inputProductTitle" class="form-label">Product Code</label>
								<input type="text" name="product_code" class="form-control" id="inputProductTitle" value="{{ $product->product_code }}"
							  </div>

							<div class="mb-3">
								<label for="inputProductTitle" class="form-label">Product Title</label>
								<input type="text" name="title" class="form-control" id="inputProductTitle" value="{{ $product->title }}">
							  </div>

                              <div class="mb-3">
                                <label for="formFile" src="{{ asset($product->image) }}" class="form-label">Thumb Image</label>
                                <input class="form-control" name="image" type="file"  >
                              </div>
                              
                              <div class="mb-3">
                                <label for="formFile" class="form-label">1st Image</label>
                                <input class="form-control" name="image_one" type="file"  >
                              </div>

                              <div class="mb-3">
                                <label for="formFile" class="form-label">2nd Image</label>
                                <input class="form-control" name="image_two" type="file"  >
                              </div>

                              <div class="mb-3">
                                <label for="formFile" class="form-label">3rd Image</label>
                                <input class="form-control" name="image_three" type="file"  >
                              </div>

                            </div>
						   </div>
						   <div class="col-lg-4">
							<div class="border border-3 p-4 rounded">
                              <div class="row g-3">
								<div class="col-md-6">
									<label for="inputPrice" class="form-label">Price</label>
									<input type="text" name="price" class="form-control" id="inputPrice" value="{{ $product->price }}">
								  </div>

								<div class="col-md-6">
									<label for="inputPrice" class="form-label">Discount</label>
									<input type="text" name="discount" class="form-control" id="inputPrice" value="{{ $product->discount }}">
								  </div>

								  <div class="col-12">
									<label for="inputProductType" class="form-label">Product Category</label>
                                    <select name="category" class="form-select" id="inputProductType">
                                        <option selected="">Select Category</option>
                                        @foreach($category as $item)
                                            <option value="{{ $item->category_name }}" {{ $item->category_name == $product->category ? 'selected' : '' }}>{{ $item->category_name }}</option>
                                        @endforeach
                                    </select>
								  </div>

                                  @foreach($details as $item)
                                  <div class="mb-3">
                                    <label class="form-label">Product Size</label>
                                    <input type="text" name="size" class="form-control visually-hidden" data-role="tagsinput" value="{{ $item->size }}">
                                  </div>

                                  <div class="mb-3">
                                    <label class="form-label">Product Color</label>
                                    <input type="text" name="color" class="form-control visually-hidden" data-role="tagsinput" value="{{ $item->color }}">
                                  </div>
                                  @endforeach

                                  <div class="form-check">
                                    <input class="form-check-input" name="type" type="checkbox" value="featured" id="flexCheckDefault1" {{ $product->type == 'featured' ? 'checked' : ''}}>
                                    <label class="form-check-label" for="flexCheckDefault">featured</label>
                                  </div>

                                  <div class="form-check">
                                    <input class="form-check-input" name="type" type="checkbox" value="new" id="flexCheckDefault2" {{ $product->type == 'new' ? 'checked' : ''}}>
                                    <label class="form-check-label" for="flexCheckDefault">new</label>
                                  </div>

                                  <div class="form-check">
                                    <input class="form-check-input" name="type" type="checkbox" value="collection" id="flexCheckDefault3" {{ $product->type == 'collection' ? 'checked' : ''}}>
                                    <label class="form-check-label" for="flexCheckDefault">collection</label>
                                  </div>

								  <div class="col-12">
									  <div class="d-grid">
                                         <button type="submit" class="btn btn-primary">Edit Product</button>
									  </div>
								  </div>
							  </div> 
						  </div>
						  </div>
					    </div><!--end row-->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        $(document).ready(function(){
            $('#image').change(function(e){
                var reader = new FileReader();
                reader.onload = function(e){
                    $('#showImage').attr('src',e.target.result);
                }
                reader.readAsDataURL(e.target.files['0']);
            });
        });	
    </script>
@endsection