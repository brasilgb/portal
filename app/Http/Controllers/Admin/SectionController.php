<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class SectionController extends Controller
{
    public function index()
    {
        if (Section::get()->isEmpty()) {
            Section::create(['title' => '']);
        }
        $section = Section::first();
        $categories = Category::get();
        return Inertia::render('Admin/Section/index', [ 'categories' => $categories, 'section' => $section]);
    }

    public function update(Request $request, Section $section) {
        $data = $request->all();
        $section->update($data);
        Session::flash('success', 'Seções editada com sucesso!');
        return Redirect::route('sections.index');
    }
}
