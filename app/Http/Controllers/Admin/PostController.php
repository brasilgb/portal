<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->get('q');

        $query = Post::with('categories')->where('type', 1)->orderBy('id', 'desc');

        if($search) {
            $query->where('title', 'like', '%'. $search .'%');
        }

        $posts = $query->paginate(10);

        return Inertia::render('Admin/Posts/index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Posts/adPost', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!'
        ];
        $request->validate([
            'title' => ['required'],
            'summary' => ['required'],
            'content' => ['required'],
            'category_id' => ['required'],
            'featured' => ['required']
        ],$messages,
        [
            'title' => 'título',
            'summary' => 'resumo',
            'content' => 'conteúdo',
            'category_id' => 'categoria',
            'featured' => 'imagem destacada'
        ]);

        $fileName = time().'.'.$request->featured->extension();  
        $request->featured->move(public_path('uploads'), $fileName);

        $data['slug'] = Str::slug($request->title);
        $data['featured'] = $fileName;
        Post::create($data);
        Session::flash('success', 'Postagem criada com sucesso!');
        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $categories = Category::get();
        return Inertia::render('Admin/Posts/edPost', [ 'categories' => $categories, 'post' => $post ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return Redirect::route('posts.show', ['post' => $post->id ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!'
        ];
        $request->validate([
            'title' => ['required'],
            'summary' => ['required'],
            'content' => ['required'],
            'category_id' => ['required']
        ],$messages,
        [
            'title' => 'título',
            'summary' => 'resumo',
            'content' => 'conteúdo',
            'category_id' => 'categoria'
        ]);

        if ($request->hasfile('featured')) {
            $fileName = time().'.'.$request->featured->extension();  
            $request->featured->move(public_path('uploads'), $fileName);
            if( public_path('uploads').DIRECTORY_SEPARATOR.$post->featured){
                unlink(public_path('uploads').DIRECTORY_SEPARATOR.$post->featured);
            }
        }

        $data['slug'] = Str::slug($request->title);
        $data['featured'] = $request->hasfile('featured') ? $fileName : $post->featured;
        
        $post->update($data);
        Session::flash('success', 'Postagem editada com sucesso!');
        return Redirect::route('posts.show', [ 'post' => $post->id ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        if( public_path('uploads').DIRECTORY_SEPARATOR.$post->featured){
            unlink(public_path('uploads').DIRECTORY_SEPARATOR.$post->featured);
        }
        $post->delete($post);
        Session::flash('success', 'Postagem deletada com sucesso!');
        return Redirect::route('posts.index');
    }
}
