<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->get('q');

        $query = User::orderBy('id', 'desc');

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        $users = $query->paginate(10);

        return Inertia::render('Admin/Users/index', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Users/adUser');
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
            'required' => 'O campo :attribute deve ser preenchido!',
            'confirmed' => 'Redigite a senha, devem ser iguais.',
            'email' => 'O campo :attribute deve ser um endereço de email válido!'
        ];
        $request->validate(
            [
                'name' => 'required',
                'username' => 'required',
                'email' => 'required|email',
                'password' => 'required|confirmed',
                'password_confirmation' => 'required'
            ],
            $messages,
            [
                'name' => 'nome',
                'username' => 'nome de usuário',
                'email' => 'e-mail',
                'password_confirmation' => 'repita a senha'
            ]
        );

        $data['password'] = Hash::make($request->password);
        User::create($data);
        Session::flash('success', 'Usuário criado com sucesso!');
        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return Inertia::render('Admin/Users/edUser', ['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return Redirect::route('users.show', ['user' => $user->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!',
            'confirmed' => 'Redigite a senha, devem ser iguais.',
            'email' => 'O campo :attribute deve ser um endereço de email válido!'
        ];
        $request->validate(
            [
                'name' => 'required',
                'username' => 'required',
                'email' => 'required|email',
                'password' => 'confirmed'
            ],
            $messages,
            [
                'name' => 'nome',
                'username' => 'nome de usuário',
                'email' => 'e-mail',
                'password_confirmation' => 'repita a senha'
            ]
        );

        $data['password'] = Hash::make($request->password);
        $user->update($data);
        Session::flash('success', 'Usuário editado com sucesso!');
        return redirect()->route('users.show', ['user' => $user]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete($user);
        Session::flash('success', 'Usuário deletado com sucesso!');
        return Redirect::route('users.index');
    }
}
