<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $permissions = [
//            /** Admin dashboard */
//            [
//                'name' => 'admin-dashboard-visit',
//                'display_name' => 'Visit admin dashboard',
//            ],
//
//            /** Product */
//            [
//                'name' => 'product-list',
//                'display_name' => 'See all products',
//            ],
//            [
//                'name' => 'product-detail',
//                'display_name' => 'View product details',
//            ],
//            [
//                'name' => 'product-remove',
//                'display_name' => 'Remove a product',
//            ],
//            [
//                'name' => 'product-create',
//                'display_name' => 'Create a product',
//            ],
//            [
//                'name' => 'product-update',
//                'display_name' => 'Update a product',
//            ],
//        ];
//
//        foreach ($permissions as $permission) {
//            Permission::create($permission);
//        }

        $visit_admin_dashboard = Permission::create([
            'name' => 'visit-AdminDashboard',
            'display_name' => 'Visit admin dashboard',
        ]);

        $customer_role = Role::where('name', 'customer')->first();

        $customer_role->syncPermissions([$visit_admin_dashboard]);
    }
}
