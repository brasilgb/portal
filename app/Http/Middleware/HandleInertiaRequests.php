<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Post;
use App\Models\Settings;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'flash' => [
                'message' => fn () => $request->session()->get('success')
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'settings' => fn () => Settings::first()
                ? Settings::orderByDesc('id')->first(['id', 'title', 'description','logo'])
                : '',

                'categories' => fn () => Category::get()
                ? Category::with('subCategories')->get()
                : '',

            'pages' => fn () => Post::get()
                ? Post::where('type', 0)->orderByDesc('title')->get()
                : '',
           
        ]);
    }
}
