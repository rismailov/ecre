<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            PermissionSeeder::class,
        ]);

        Product::factory()->count(100)->create();

        $this->log('All models successfully seeded.');
    }

    private function log(string $text): void
    {
        echo "\n" . $text . "\n";
    }
}
