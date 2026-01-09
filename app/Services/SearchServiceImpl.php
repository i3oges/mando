<?php
namespace App\Services;

use App\Enum\SearchType;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Interface\SearchService;
use App\Interface\SwApi;
use Illuminate\Validation\Rule;

class SearchServiceImpl implements SearchService {


    public function __construct(protected SwApi $swApi) {
        $this->swApi = $swApi;
    }
    public function search(Request $request): array {
        $validated = $request->validate([
            'searchQuery' => 'required|max:255',
            'searchType' => ['required', Rule::enum(SearchType::class)]
        ]);
        
        $search_query = $validated['searchQuery'];
        $search_type = $request->enum('searchType', SearchType::class);

        return match ($search_type) {
            SearchType::FILMS => $this->search_films($search_query),
            SearchType::PEOPLE => $this->search_people($search_query),
        };
    }

    private function search_films(string $search_query): array {
        $result = $this->swApi->get_films_by_query($search_query);
        return array_map(function($item) {
            return [
                'uid' => $item['uid'],
                'title' => $item['properties']['title'],
                'type' => 'film',
            ];
        }, $result);
    }

    private function search_people(string $search_query): array {
        $result = $this->swApi->get_people_by_query($search_query);
        return array_map(function($item) {
            return [
                'uid' => $item['uid'],
                'title' => $item['properties']['name'],
                'type' => 'people',
            ];
        }, $result);
    }
}