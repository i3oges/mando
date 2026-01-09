import useSearchResults from '@/hooks/UseSearchResults';
import { SearchResultsSchema } from '@/schema/SearchResultsSchema';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

type SearchForm = {
    searchType: 'people' | 'films';
    searchQuery: string;
};

const SearchForm = () => {
    const { updateResults } = useSearchResults();
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<SearchForm>({
        defaultValues: {
            searchType: 'people',
            searchQuery: '',
        },
        mode: 'onChange',
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (data: SearchForm) => {
            const json = await fetch('/api/star-wars-movies', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }).then((res) => res.json());
            return SearchResultsSchema.parse(json);
        },
    });

    const submit = handleSubmit(async (data) => {
        console.log({ data });
        const results = await mutateAsync(data);
        updateResults(results);
    });

    return (
        <section className="flex h-min w-full flex-col gap-4 rounded-xl border-1 p-4 shadow-md shadow-gray-700 dark:border-white">
            <header className="text-xl font-bold dark:text-gray-100">What are you searching for?</header>
            <div className="flex gap-2">
                <input type="radio" {...register('searchType')} value="people" /> <span className="dark:text-gray-100">People</span>
                <input type="radio" {...register('searchType')} value="films" /> <span className="dark:text-gray-100">Movies</span>
            </div>
            <input
                className="border-1 border-pink-100 dark:text-gray-100 dark:placeholder-white"
                {...register('searchQuery', { validate: (v) => v !== '' })}
                type="text"
                placeholder="Type your query here..."
            />
            <button
                disabled={!isValid}
                className="w-full rounded-md border-1 border-green-600 bg-green-500 shadow-md hover:bg-green-600 hover:shadow-lg disabled:border-gray-300 disabled:bg-gray-200 disabled:shadow-none [&:not(:disabled)]:cursor-pointer"
                onClick={submit}
            >
                Search
            </button>
        </section>
    );
};

export default SearchForm;
