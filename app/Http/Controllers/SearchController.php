<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;


class SearchController extends Controller
{
    
    private function mapFilms($item) {
        return [
            'uid' => $item['uid'],
            'title' => $item['title'],
        ];
    }

    private function mapPeople($item) {
        return [
            'uid' => $item['uid'],
            'title' => $item['name'],
        ];
    }
    public function search(Request $request) {
        $search_query = $request->json()->get("searchQuery");
        $search_type = $request->json()->get("searchType");
        $base_url = 'http://www.swapi.tech/api';
        
        if ($search_type == "films") {
            $url = $base_url . "/films";
            $response = Http::get($url, ["title" => $search_query]);
            $result = $response->json()['result'];
            return array_map(function($item) {
                return [
                    'uid' => $item['uid'],
                    'title' => $item['properties']['title'],
                    'type' => 'film',
                ];
            }, $result);
        }
        if ($search_type == "people"){
            $url = $base_url . "/people";
            $response = Http::get($url, ["name" => $search_query]);
            $result = $response->json()['result'];
            return array_map(function($item) {
                return [
                    'uid' => $item['uid'],
                    'title' => $item['properties']['name'],
                    'type' => 'people',
                ];
            }, $result);
        }
        
        return response('Invalid search criteria', 400);
    }
}
