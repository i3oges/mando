import SearchForm from '@/components/SearchForm';
import SearchResults from '@/components/SearchResults';
import { Head } from '@inertiajs/react';

const SearchPage = () => {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <main className="m-auto flex w-3/4 justify-center gap-2 pt-4">
                <SearchForm />
                <SearchResults />
            </main>
        </>
    );
};

export default SearchPage;
