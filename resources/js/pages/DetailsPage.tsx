import FilmDetails from '@/components/FilmDetails';
import PersonDetails from '@/components/PersonDetails';
import { Head } from '@inertiajs/react';
import { enqueueSnackbar } from 'notistack';
import { JSX, Suspense } from 'react';
import { Link, Navigate, useParams } from 'react-router';

const DetailsPage = () => {
    const { type } = useParams();

    let SelectedDetails: () => JSX.Element;
    if (type === 'film') {
        SelectedDetails = FilmDetails;
    } else if (type === 'people') {
        SelectedDetails = PersonDetails;
    } else {
        enqueueSnackbar({ message: 'invalid url', variant: 'error' });
        return <Navigate to="/" replace />;
    }
    return (
        <div>
            <Head title="Details">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Suspense fallback={<div className="m-auto flex w-3/4 justify-center gap-2 pt-4">Loading...</div>}>
                <SelectedDetails />
                <section className="m-auto flex w-3/4 justify-start gap-2 pt-4">
                    <Link to="/" className="rounded-md bg-green-500 p-2">
                        Return to Search
                    </Link>
                </section>
            </Suspense>
        </div>
    );
};

export default DetailsPage;
