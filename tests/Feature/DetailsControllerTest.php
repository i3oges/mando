<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;
use Illuminate\Support\Facades\Http;

class DetailsControllerTest extends TestCase
{
    use RefreshDatabase;
    public function test_successful_people(): void
    {
        Http::fake([
            'swapi.tech/api/*' => Http::response([
                'result' => 
                    [
                        'properties' => [
                          "name" => "Yoda",
                          "birth_year" => "896BBY",
                          "gender" => "male",
                          "eye_color" => "brown",
                          "hair_color" => "white",
                          "height" => "66",
                          "mass" => "17",
                          "films" => [
                              "https://www.swapi.tech/api/films/2",
                          ],
                        ],
                        'uid' => "20",
                    ]
                
            ])
        ]);
        
        $response = $this->get('/api/star-wars-details/people/20');

        $response->assertStatus(200)->assertJson([
            'uid' => '20',
            'name' => 'Yoda',
            'type' => 'people',
        ]);
    }

    public function test_successful_films(): void
    {
        Http::fake([
            'swapi.tech/api/*' => Http::response([
                'result' => [
                    'properties' => [
                      'title' => 'The Empire Strikes Back',
                      'opening_crawl' => "It is a dark time...",
                      'characters' => [
                        "https://www.swapi.tech/api/people/20"
                      ]
                    ],
                    'uid' => "2",
                ]
            ])
        ]);
        
        $response = $this->get('/api/star-wars-details/film/2');

        $response->assertStatus(200)->assertJson([
            'uid' => '2',
            'type' => 'film',
            'title' => 'The Empire Strikes Back'
        ]);
    }

    public function test_invalid_type(): void
    {
        $response = $this->get('/api/star-wars-details/asdf/2');

        $response->assertStatus(status: 200)->assertJson([]);
    }

    public function test_invalid_id(): void
    {
      Http::fake([
          'swapi.tech/api/*' => Http::response([], 404),
      ]);
      $response = $this->get('/api/star-wars-details/film/123123123');

      $response->assertStatus(404);
    }
}

