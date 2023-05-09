<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ContactsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'firstName' => $this->faker->firstName(),
            'lastName' => $this->faker->unique()->lastName(),
            'phoneNumber' => $this->faker->unique()->numberBetween(1000000000,9999999999), //for random 10 digits
        ];
    }
}
