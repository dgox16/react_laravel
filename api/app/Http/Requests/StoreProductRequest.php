<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * @property mixed $name
 * @property mixed $description
 * @property mixed $price
 */
class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'price' => 'required|numeric',
            'description' => 'required|string',
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => __('request_validation_messages.required'),
            'name.string' => __('request_validation_messages.string'),
            'price.required' => __('request_validation_messages.required'),
            'price.numeric' => __('request_validation_messages.numeric'),
            'description.required' => __('request_validation_messages.required'),
            'description.string' => __('request_validation_messages.string'),
        ];
    }
}
