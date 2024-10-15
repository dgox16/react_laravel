<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * @property mixed $name
 * @property mixed $email
 * @property mixed $password
 */
class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
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
            'name.max' => __('request_validation_messages.max'),
            'email.required' => __('request_validation_messages.required'),
            'email.string' => __('request_validation_messages.string'),
            'email.email' => __('request_validation_messages.email'),
            'email.max' => __('request_validation_messages.max'),
            'email.unique' => __('request_validation_messages.unique'),
            'password.required' => __('request_validation_messages.required'),
            'password.string' => __('request_validation_messages.string'),
            'password.min' => __('request_validation_messages.min'),
        ];
    }
}
