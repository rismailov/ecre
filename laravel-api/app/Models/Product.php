<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Hidehalo\Nanoid\Client;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'supply',
    ];

    protected $with = [
        'category',
        'features',
        'colors',
        'images',
    ];

    # Setters
    public function setProductNameAttribute($value)
    {
        $this->attributes['name'] = ucwords($value);
    }

    # Relationships
    public function category()
    {
        return $this->belongsTo(ProductCategory::class);
    }

    public function features()
    {
        return $this->hasMany(ProductFeature::class);
    }

    public function colors()
    {
        return $this->hasMany(ProductColor::class);
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
