import FilmDetails from '@/components/FilmDetails';
import PersonDetails from '@/components/PersonDetails';
import { Head } from '@inertiajs/react';
import { Suspense } from 'react';
import { useParams } from 'react-router';

const DetailsPage = () => {
    const { type } = useParams();

    let SelectedDetails = PersonDetails;
    if (type === 'film') {
        SelectedDetails = FilmDetails;
    }
    return (
        <div>
            <Head title="Details">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Suspense fallback="loading...">
                <SelectedDetails />
            </Suspense>
        </div>
    );
};

export default DetailsPage;
