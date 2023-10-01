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
								<li class="breadcrumb-item active" aria-current="page">Add New Category</li>
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
            <form method="post" action="{{ route('category.store') }}" enctype="multipart/form-data"> 
	        @csrf
              <div class="card">
				  <div class="card-body p-4">
					  <h5 class="card-title">Add New Category</h5>
					  <hr/>
                       <div class="form-body mt-4">
					    <div class="row">
						   <div class="col-lg-8">
                           <div class="border border-3 p-4 rounded">
							<div class="mb-3">
								<label for="inputProductTitle" class="form-label">Category name</label>
								<input type="text" name="category_name" class="form-control" id="inputProductTitle" placeholder="Enter product title">
                                @error('category_name')
		                        <span class="text-danger">{{ $message }}</span>
		                        @enderror
							  </div>
							  <div class="mb-3">
								<label for="formFile" class="form-label">Upload Category Image</label>
                              </div>
                              <div class="col-sm-9 text-secondary">
                                  <input id="image-uploadify" name="category_image" type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple>
                              </div>
							  </div>
                              <button type="submit" class="btn btn-primary">Add category</button>
                            </div>
						   </div>
						   
							</div> 
						  </div>
						  </div>
					   </div><!--end row-->
					</div>
				  </div>
			  </div>
            </form>
			</div>
		</div>