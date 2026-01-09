<?php
namespace App\Services;

use App\Interface\SwApi;
use Illuminate\Support\Facades\Http;

class SwApiService implements SwApi {
  private string $base_url = 'http://www.swapi.tech/api/';

  public function get_people_details(string $uid): mixed {
    $response = Http::get($this->base_url . 'people/' . $uid);
    if ($response->getStatusCode() >= 400) {
      abort(404, 'person not found');
    }
    return $response->json()['result'];
  }

  public function get_film_details(string $uid): mixed {
    $response = Http::get($this->base_url . 'films/' . $uid);
    if ($response->getStatusCode() >= 400) {
      abort(404, 'film not found');
    }
    return $response->json()['result'];
  }
  public function get_people_by_query(string $query): mixed {
    $response = Http::get($this->base_url . 'people', ["name" => $query]);
    return $response->json()['result'];
  }

  public function get_films_by_query(string $query): mixed {
    $response = Http::get($this->base_url . 'films', ['title1' => $query]);
    return $response->json()['result'];
  }
}