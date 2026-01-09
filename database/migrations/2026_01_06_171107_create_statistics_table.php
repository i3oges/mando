<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('statistics', function (Blueprint $table) {
            $table->id();
            $table->float('avg_request_time'); 
            $table->json('top_5_requests'); 
            $table->integer('fastest_request_time'); 
            $table->string('fastest_request_uri');
            $table->integer('slowest_request_time');
            $table->string('slowest_request_uri');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistics');
    }
};
