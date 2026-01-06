<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class DetailsController extends Controller
{
    public function get_details($type, $uid) {
        $base_url = 'http://www.swapi.tech/api/';

        if ($type == 'people') {
            $response = Http::get($base_url . 'people/' . $uid);
            $result = $response->json()['result'];
            $properties = $result['properties'];
            return [
                'name' => $properties['name'],
                'birthYear' => $properties['birth_year'],
                'gender' => $properties['gender'],
                'eyeColor' => $properties['eye_color'],
                'hairColor' => $properties['hair_color'],
                'height' => $properties['height'],
                'mass' => $properties['mass'],
                'films' => $properties['films'],
                'uid' => $result['uid'],
            ];
        }

        if ($type == 'film') {
            $response = Http::get($base_url . 'films/'. $uid);
            $result = $response->json()['result'];
            $properties = $result['properties'];
            return [
                'openingCrawl' => $properties['opening_crawl'],
                'title' => $properties['title'],
                'characters' => $properties['characters'],
                'uid' => $result['uid'],
            ];
        }
    }
}
