@extends('admin.admin_master')
@section('page_wrapper')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<div class="wrapper">
    <div class="authentication-reset-password d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12 col-lg-10 mx-auto">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-lg-12">
                            <div class="card-body">
                                <div class="p-5">
                                    <h4 class="mt-5 font-weight-bold">Generate New Password</h4>
                                    <p class="text-muted">We received your reset password request. Please enter your new password!</p>
                                    <form method="post" action="{{ route('change.password.update') }}" >
                                    @csrf
                                    @foreach ($errors->all() as $error)
	 	                                <p class="text-danger"> {{ $error }}  </p>
	                                @endforeach
                                        <div class="mb-3 mt-5">
                                            <label class="form-label">Current Password</label>
                                            <input type="password" name="current_password" class="form-control" placeholder="Enter your current password" />
                                        </div>
                                        <div class="mb-3 mt-5">
                                            <label class="form-label">New Password</label>
                                            <input type="password" name="password" class="form-control" placeholder="Enter new password" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Confirm Password</label>
                                            <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm password" />
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button type="submit" class="btn btn-primary">Change Password</button>
                                            <a href="{{ route('dashboard') }}" class="btn btn-light"><i class='bx bx-arrow-back mr-1'></i>Go back</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end wrapper -->

@endsection