<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [ 'name' => 'customer', 'display_name' => 'Customer' ],
            [ 'name' => 'admin', 'display_name' => 'Admin' ],
        ];

        foreach ($roles as $role)
            Role::create($role);
    }
}
