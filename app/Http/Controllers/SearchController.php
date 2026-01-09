<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interface\SearchService;

class SearchController extends Controller
{
    
    public function __construct(protected SearchService $searchService) {
        $this->searchService = $searchService;
    }
    
    public function search(Request $request) {
        return $this->searchService->search($request);
    }
}
