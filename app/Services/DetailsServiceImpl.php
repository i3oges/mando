<?php
namespace App\Services;

use App\Interface\DetailsService;
use App\Interface\SwApi;

class DetailsServiceImpl implements DetailsService {
  public function __construct(protected SwApi $swApi) {
    $this->swApi = $swApi;
  }

  public function handle_details(string $type, string $uid): array {
    if ($type == 'people') {
        $result = $this->swApi->get_people_details($uid);
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
            'type' => "people",
        ];
    }

    if ($type == 'film') {
        $result = $this->swApi->get_film_details($uid);
        $properties = $result['properties'];
        return [
            'openingCrawl' => $properties['opening_crawl'],
            'title' => $properties['title'],
            'characters' => $properties['characters'],
            'uid' => $result['uid'],
            'type' => "film",
        ];
    }
    return [];
  }
}