<?php

namespace App\Http\Requests;

use App\Http\Traits\ApplicantTrait;
use Illuminate\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class PersonalDetailsRequest extends FormRequest
{
    use ApplicantTrait;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|min:6',
            'email' => 'required|email',
            'phone' => 'required|min:10',
            'socialSecurityNumber' => 'required|numeric',
            'zip' => 'required|numeric|min:4',
            'city' => 'required',
            'street' => 'required',
            'gdpr' => 'accepted',
        ];
    }

    /**
     * Configure the validator instance.
     */
    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator) {
            if ($this->checkSocialSecurityNumber($validator->getData()['socialSecurityNumber'])) {
                $validator->errors()->add('socialSecurityNumber', 'Ez a Taj-szám tiltva van.');
            }
        });
    }
}
