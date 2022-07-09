<?php

namespace App\Http\Requests;

use App\Rules\AlphaSpaces;
use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return auth()->user()->hasRole('admin');
        return true; // todo: uncomment the line above after permissions functionality created.
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', new AlphaSpaces, 'unique:products'],
            'supply' => ['required', 'numeric'],
            'price' => ['required', 'numeric', 'min:1.00'],
            'image' => ['required', 'mimes:jpeg,png,jpg,webp', 'image', 'max:1000'],
            // 'images.*' => ['required'],
            // 'images.*' => ['mimes:jpeg,png,jpg,webp', 'image', 'max:1000'],
        ];
    }
}
