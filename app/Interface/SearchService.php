<?php
namespace App\Interface;

use Illuminate\Http\Response;
use Illuminate\Http\Request;

interface SearchService {
  public function search(Request $request) : array;
}