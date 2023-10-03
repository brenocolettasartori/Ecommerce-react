@extends('admin.admin_master')
@section('page_wrapper')


<div class="page-wrapper">
                    <div class="card radius-10">
						<div class="card-body">
							<div class="d-flex align-items-center">
								<div>
									<h5 class="mb-0">List Product</h5>
								</div>
								<div class="font-22 ms-auto"><a href="{{ route('add.product')}}">Add product</a>
								</div>
							</div>
							<hr>
							<div class="table-responsive">
								<table class="table align-middle mb-0">
									<thead class="table-light">
										<tr>
											<th>ID</th>
											<th>Image</th>
											<th>Name</th>
											<th>Price</th>
											<th>Category</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
                                        @php($i = 1)
                                        @foreach($result as $item)
										<tr>
											<td>{{ $i++ }}</td>
											<td>
												<div class="d-flex align-items-center">
													<div class="recent-product-img">
														<img src="{{ $item->image }}" alt="">
													</div>
                                            </td>
                                            <td>
                                                <div class="ms-2">{{ $item->title }}</div>
                                            </td>
                                            <td>
                                                <div class="ms-2">$ {{ $item->price }}</div>
                                            </td>
                                            <td>
                                                <div class="ms-2">{{ $item->category }}</div>
                                            </td>
											<td>
                                                <a href="{{ route('product.edit', $item->id) }}" class="btn btn-info">Edit</a>	
                                                <a href="{{ route('product.delete', $item->id) }}" class="btn btn-danger" id="delete">Delete</a>	
											</td>
                                        </tr>
                                        @endforeach	
									</tbody>
								</table>
							</div>
						</div>
					</div>
                    {{ $result->links('vendor.pagination.custom') }}                   
                </div>

@endsection