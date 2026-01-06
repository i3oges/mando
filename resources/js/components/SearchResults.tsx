import useSearchResults from '@/hooks/UseSearchResults';
import { useIsMutating } from '@tanstack/react-query';

const SearchResults = () => {
    const { results } = useSearchResults();
    const isMutating = useIsMutating();
    return (
        <section className="flex min-h-128 w-full flex-col gap-4 border-1 p-4 dark:border-gray-100">
            <header className="border-b-1 text-xl font-bold dark:text-gray-100">Results</header>
            {isMutating > 0 && <div className="h-full place-self-center dark:text-gray-100">Searching...</div>}
            {isMutating === 0 &&
                results?.map((result) => (
                    <div key={result.uid} className="flex justify-between">
                        <div className="dark:text-gray-100">{result.title}</div>
                        <button className="rounded-md bg-green-500 p-2">See Details</button>
                    </div>
                ))}
        </section>
    );
};

export default SearchResults;
