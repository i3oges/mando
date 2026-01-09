<?php

namespace App\Http\Controllers;

use App\Interface\DetailsService;

class DetailsController extends Controller
{
    public function __construct(protected DetailsService $detailsService) {
        $this->detailsService = $detailsService;
    }
    
    public function get_details($type, $uid) {
       return $this->detailsService->handle_details($type, $uid);
    }
}
