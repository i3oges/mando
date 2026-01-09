<?php
namespace App\Interface;
interface DetailsService {
  public function handle_details(string $type, string $uid): array;
}