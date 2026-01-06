import SearchResultsContext from '@/context/SearchResultsContext';
import { SearchResults } from '@/schema/SearchResultsSchema';
import { useCallback, useMemo, useState } from 'react';

const SearchResultsProvider = ({ children }: { children: React.ReactNode }) => {
    const [results, setResults] = useState<SearchResults | null>(null);

    const clearResults = useCallback(() => setResults(null), [setResults]);
    const updateResults = useCallback((sr: SearchResults) => setResults(sr), [setResults]);

    const value = useMemo(
        () => ({
            results,
            clearResults,
            updateResults,
        }),
        [results, clearResults, updateResults],
    );

    return <SearchResultsContext.Provider value={value}>{children}</SearchResultsContext.Provider>;
};

export default SearchResultsProvider;
