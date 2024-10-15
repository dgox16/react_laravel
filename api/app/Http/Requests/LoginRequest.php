<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * @property mixed $email
 */
class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|string|email',
            'password' => 'required|string|min:8'
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'email.required' => __('request_validation_messages.required'),
            'email.email' => __('request_validation_messages.email'),
            'email.string' => __('request_validation_messages.string'),
            'password.required' => __('request_validation_messages.required'),
            'password.min' => __('request_validation_messages.min'),
            'password.string' => __('request_validation_messages.string'),
        ];
    }
}
