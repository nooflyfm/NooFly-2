<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FooController extends Controller
{
    public function index()
    {
        if(!Auth::check()) 
        {
            return response()->json('0', 401);
        }

        return response()->json('1', 200);
    }
}
