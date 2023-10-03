@extends('admin.admin_master')
@section('page_wrapper')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<div class="page-wrapper">
			<div class="page-content">

				<!--breadcrumb-->
				<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
					<div class="breadcrumb-title pe-3">eCommerce</div>
					<div class="ps-3">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb mb-0 p-0">
								<li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">Add New Product</li>
							</ol>
						</nav>
					</div>
					<div class="ms-auto">
						<div class="btn-group">
							<button type="button" class="btn btn-primary">Settings</button>
							<button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
							</button>
							<div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="javascript:;">Action</a>
								<a class="dropdown-item" href="javascript:;">Another action</a>
								<a class="dropdown-item" href="javascript:;">Something else here</a>
								<div class="dropdown-divider"></div>	<a class="dropdown-item" href="javascript:;">Separated link</a>
							</div>
						</div>
					</div>
				</div>
				<!--end breadcrumb-->

              <div class="card">
				  <div class="card-body p-4">
					  <h5 class="card-title">Add New Product</h5>
					  <hr/>
                       <div class="form-body mt-4">
                       <form method="post" action="{{ route('product.store') }}" enctype="multipart/form-data"> 
	                   @csrf
					    <div class="row">
						   <div class="col-lg-8">
                           <div class="border border-3 p-4 rounded">
							<div class="mb-3">
								<label for="inputProductTitle" class="form-label">Product Code</label>
								<input type="text" name="product_code" class="form-control" id="inputProductTitle" placeholder="Enter product code">
							  </div>

							<div class="mb-3">
								<label for="inputProductTitle" class="form-label">Product Title</label>
								<input type="text" name="title" class="form-control" id="inputProductTitle" placeholder="Enter product title">
							  </div>

                              <div class="mb-3">
                                <label for="formFile" class="form-label">Thumb Image</label>
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
									<input type="text" name="price" class="form-control" id="inputPrice" placeholder="00.00">
								  </div>

								<div class="col-md-6">
									<label for="inputPrice" class="form-label">Discount</label>
									<input type="text" name="discount" class="form-control" id="inputPrice" placeholder="00.00">
								  </div>

								  <div class="col-12">
									<label for="inputProductType" class="form-label">Product Category</label>
									<select name="category" class="form-select" id="inputProductType">
                                        <option selected="">Select Category</option>
		                                @foreach($category as $item)
		                                <option value="{{ $item->category_name }}"> {{ $item->category_name }}</option>
	 	                                @endforeach
		                            </select>
								  </div>

                                  <div class="mb-3">
                                    <label class="form-label">Product Size</label>
                                    <input type="text" name="size" class="form-control visually-hidden" data-role="tagsinput" value="S,M,L,XL">
                                  </div>

                                  <div class="mb-3">
                                    <label class="form-label">Product Color</label>
                                    <input type="text" name="color" class="form-control visually-hidden" data-role="tagsinput" value="Red,White,Black">
                                  </div>

                                  <div class="form-check">
                                    <input class="form-check-input" name="type" type="checkbox" value="featured" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">featured</label>
                                  </div>

                                  <div class="form-check">
                                    <input class="form-check-input" name="type" type="checkbox" value="new" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">new</label>
                                  </div>

                                  <div class="form-check">
                                    <input class="form-check-input" name="type" type="checkbox" value="collection" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">collection</label>
                                  </div>

								  <div class="col-12">
									  <div class="d-grid">
                                         <button type="submit" class="btn btn-primary">Save Product</button>
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