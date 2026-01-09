import useSwDetails from '@/hooks/UseSwDetails';
import { useIsFetching } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useParams } from 'react-router';
import FilmLink from './FilmLink';

const PersonDetails = () => {
    const { uid } = useParams();
    const { data } = useSwDetails({ type: 'people', uid: uid ?? '' });
    const loadCount = useIsFetching({ queryKey: ['details', 'film'], exact: false });
    if (!data || 'openingCrawl' in data) {
        return <></>;
    }
    return (
        <main className="m-auto flex w-3/4 justify-center gap-2 pt-4">
            <section className="flex h-min w-full flex-col gap-4 rounded-xl border-1 p-4 shadow-md shadow-gray-700 dark:border-white dark:text-gray-100">
                <h2 className="text-xl font-bold">{data.name}</h2>
                <div className="border-b-1">Details</div>
                <div className="grid grid-cols-2 gap-3">
                    <div>Birth Year:</div>
                    <div>{data.birthYear}</div>
                    <div>Gender:</div>
                    <div>{data.gender}</div>
                    <div>Eye Color:</div>
                    <div>{data.eyeColor}</div>
                    <div>Hair Color:</div>
                    <div>{data.hairColor}</div>
                    <div>Height:</div>
                    <div>{data.height}</div>
                    <div>Mass:</div>
                    <div>{data.mass}</div>
                </div>
            </section>
            <section className="flex h-min w-full flex-col gap-4 rounded-xl border-1 p-4 shadow-md shadow-gray-700 dark:border-white dark:text-white">
                <div className="border-b-1">Movies</div>
                <div>
                    <Suspense fallback={`loading... (${loadCount} remaining)`}>
                        {data.films.map((film) => (
                            <div key={film}>
                                <FilmLink filmUrl={film} />
                            </div>
                        ))}
                    </Suspense>
                </div>
            </section>
        </main>
    );
};

export default PersonDetails;
