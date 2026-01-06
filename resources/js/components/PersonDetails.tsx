import useSwDetails from '@/hooks/UseSwDetails';
import { Suspense } from 'react';
import { useParams } from 'react-router';
import FilmLink from './FilmLink';

const PersonDetails = () => {
    const { uid } = useParams();
    const { data } = useSwDetails({ type: 'people', uid: uid ?? '' });
    if (!data || 'openingCrawl' in data) {
        return <></>;
    }
    return (
        <main className="m-auto flex w-3/4 justify-center gap-2 pt-4">
            <div className="flex flex-col gap-2">
                <div>{data.name}</div>
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
            </div>
            <div className="flex flex-col gap-2">
                <div className="border-b-1">Movies</div>
                <div>
                    <Suspense fallback="loading...">
                        {data.films.map((film) => (
                            <div key={film}>
                                <FilmLink filmUrl={film} />
                            </div>
                        ))}
                    </Suspense>
                </div>
            </div>
        </main>
    );
};

export default PersonDetails;
