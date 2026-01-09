<?php
namespace App\Interface;

interface SwApi {
  public function get_people_details(string $uid): mixed;
  public function get_film_details(string $uid): mixed;
  public function get_people_by_query(string $query): mixed;
  public function get_films_by_query(string $query): mixed;
}