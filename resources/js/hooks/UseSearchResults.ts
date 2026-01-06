import SearchResultsContext from '@/context/SearchResultsContext';
import { useContext } from 'react';

const useSearchResults = () => {
    const ctx = useContext(SearchResultsContext);
    if (!ctx) {
        throw new Error('Search Results Context is null');
    }
    return ctx;
};

export default useSearchResults;
