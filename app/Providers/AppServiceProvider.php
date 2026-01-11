<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interface\SwApi;
use App\Interface\DetailsService;
use App\Interface\SearchService;
use App\Services\SwApiService;
use App\Services\DetailsServiceImpl;
use App\Services\SearchServiceImpl;

class AppServiceProvider extends ServiceProvider
{

    /**
     * Register any application services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(SwApi::class, SwApiService::class);
        $this->app->bind(SearchService::class, SearchServiceImpl::class);
        $this->app->bind(DetailsService::class, DetailsServiceImpl::class);
    }
}
