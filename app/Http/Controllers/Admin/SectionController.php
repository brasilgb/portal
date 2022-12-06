<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Section;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionController extends Controller
{
    public function index(Section $layouts, Request $request)
    {
        if (Section::get()->isEmpty()) {
            Section::create(['title' => '']);
        }
        $section = Section::first();
        $categories = Category::get();
        return Inertia::render('Admin/Section/index', [ 'categories' => $categories, 'section' => $section]);
    }
}
