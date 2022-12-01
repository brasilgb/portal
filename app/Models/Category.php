<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'name',
        'slug',
        'title',
        'description',
        'active',
        'parent'
    ];

    public function postagens() {
        return $this->hasMany(Post::class, 'category_id');
    }

    public function subCategories()
    {
        return $this->hasMany(Category::class, 'parent', 'id');
    }
}
