<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;
use Illuminate\Support\Facades\Http;

class SearchControllerTest extends TestCase
{
    public function test_successful_people(): void
    {
        Http::fake([
            'swapi.tech/api/*' => Http::response([
                'result' => [
                    [
                        'properties' => ['name' => 'Yoda'],
                        'uid' => "20",
                    ]
                ]
            ])
        ]);
        
        $response = $this->postJson('/api/star-wars-movies', [
            "searchQuery" => "Yoda",
            "searchType" => "people",
        ]);

        $response->assertStatus(200)->assertJson([[
            'uid' => '20',
            'title' => 'Yoda',
            'type' => 'people',
        ]]);
    }

    public function test_successful_films(): void
    {
        Http::fake([
            'swapi.tech/api/*' => Http::response([
                'result' => [
                    [
                        'properties' => ['title' => 'A New Hope'],
                        'uid' => "1",
                    ]
                ]
            ])
        ]);
        
        $response = $this->postJson('/api/star-wars-movies', [
            "searchQuery" => "A New Hope",
            "searchType" => "films",
        ]);

        $response->assertStatus(200)->assertJson([[
            'uid' => '1',
            'type' => 'film',
            'title' => 'A New Hope'
        ]]);
    }

    public function test_invalid_search_type(): void
    {
        $response = $this->postJson('/api/star-wars-movies', [
            "searchQuery" => "A New Hope",
            "searchType" => "stars",
        ]);

        $response->assertStatus(400)->assertContent("Invalid search criteria");
    }
}

