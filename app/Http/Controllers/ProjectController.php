<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255',
            'phone'=> 'required|numeric',
            'materials'=> 'required|string|max:255',
            'types'=> 'required|string|max:255',
            'colors'=> 'required|string|max:255',
            'quantity'=> 'required|numeric',
            'finishing'=> 'boolean',
            'policies'=> 'required|boolean',
            'description'=> 'string',
            'notes'=> 'string',
            'address'=> 'required|string',
            'file'=> 'required|file',
        ]);

        if($file = $request->file('file')){
            $file_name = time().'_'. $request->file->getClientOriginalName();
            $dataPath = $file->move(public_path('tasks'), $file_name);
        }

        $project = Project::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone'=> $request->phone,
            'materials'=> $request->materials,
            'types'=> $request->types,
            'colors'=> $request->colors,
            'quantity'=> $request->quantity,
            'finishing'=> $request->finishing,
            'policies'=> $request->policies,
            'description'=> $request->description,
            'notes'=> $request->notes,
            'address'=> $request->address,
            'file'=> $file_name,

        ]);
        return back()->with('message', 'The request has been registered');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
