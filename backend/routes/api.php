<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Get all contacts route
Route::get('/get_all_contacts', [ContactsController::class, 'index']);
// edit individual contacts route 
Route::patch('/edit_contact', [ContactsController::class, 'update']);
// add a contacts route 
Route::post('/store_contact', [ContactsController::class, 'store']);
 // delect a contacts route 
Route::delete('/delete_contact', [ContactsController::class, 'destroy']);
