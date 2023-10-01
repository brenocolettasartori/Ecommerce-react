@extends('admin.admin_master')
@section('page_wrapper')


<div class="page-wrapper">
                    <div class="card radius-10">
						<div class="card-body">
							<div class="d-flex align-items-center">
								<div>
									<h5 class="mb-0">List Category</h5>
								</div>
								<div class="font-22 ms-auto"><a href="{{ route('add.category')}}">Add category</a>
								</div>
							</div>
							<hr>
							<div class="table-responsive">
								<table class="table align-middle mb-0">
									<thead class="table-light">
										<tr>
											<th>Category id</th>
											<th>Name</th>
											<th>Image</th>
											<th>Date</th>
											<th>Status</th>
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
														<img src="{{ $item->category_image }}" alt="">
													</div>
                                            </td>
                                            <td>
                                                <div class="ms-2">{{ $item->category_name }}</div>
                                            </td>
                                            <td>

                                            </td>
                                            <td>

                                            </td>
											<td>
                                                <a href="{{ route('category.edit', $item->id) }}" class="btn btn-info">Edit</a>	
                                                <a href="{{ route('category.delete', $item->id) }}" class="btn btn-danger" id="delete">Delete</a>	
											</td>
                                        </tr>
                                        @endforeach	
									</tbody>
								</table>
							</div>
						</div>
					</div>
</div>

@endsection