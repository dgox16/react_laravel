<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed $name
 * @property mixed $description
 * @property mixed $price
 * @property mixed $user_id
 * @method static where(string $string, int|string|null $userId)
 * @method static create(array $array)
 */
class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'user_id',
    ];

    use HasFactory;
}
