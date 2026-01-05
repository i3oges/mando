import SearchForm from '@/components/SearchForm';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header className="h-16 w-full border-b-1">Welcome</header>
            <div className="m-auto flex w-3/4 justify-center gap-2 pt-4">
                <SearchForm />
                <div className="w-full border-1 p-4">
                    <div>Results</div>
                    <div className="border-b-1" />
                </div>
            </div>
        </>
    );
}
