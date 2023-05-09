<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactsRequest;
use App\Http\Requests\UpdateContactsRequest;
use App\Models\Contacts;
use App\Http\Resources\ContactCollection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return Contacts::all();
        return new ContactCollection(Contacts::all());
    }

  
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:12',
        ]);
        
        if ($validator->fails())
        {
            return response(["status" =>"error",'message'=>$validator->errors()->all()], 422);
        }
     
        $data = Contacts::create($request->toArray());
        $response = ["status" =>"success","data"=>$data];
        return response($response, 200);
    }

    public function show(Contacts $contacts)
    {
        //
    }

  
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|int|max:100',
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:12',
        ]);

        contacts::where("id", $request->id)->update($request->toArray());
    }

   
    public function destroy(Request $request)
    {
        //
        
    }
}
