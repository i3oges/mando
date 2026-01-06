import { SearchResults } from '@/schema/SearchResultsSchema';
import { createContext } from 'react';

type Ctx = {
    updateResults: (sr: SearchResults) => void;
    clearResults: () => void;
    results: SearchResults | null;
};
const SearchResultsContext = createContext<Ctx | null>(null);

export default SearchResultsContext;
