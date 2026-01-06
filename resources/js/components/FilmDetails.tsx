import useSwDetails from '@/hooks/UseSwDetails';
import { Suspense } from 'react';
import { useParams } from 'react-router';
import CharacterLink from './CharacterLink';

const FilmDetails = () => {
    const { type, uid } = useParams();
    const { data } = useSwDetails({ type: type ?? '', uid: uid ?? '' });

    if (!data || 'birthYear' in data) {
        console.log({ data });
        return <></>;
    }
    return (
        <main className="m-auto flex w-3/4 justify-center gap-2 pt-4">
            <div className="flex max-w-96 flex-col gap-2">
                <div>{data.title}</div>
                <div>Opening Crawl</div>
                <div>{data.openingCrawl}</div>
            </div>
            <div className="flex max-w-64 flex-col">
                <div>Characters</div>
                <div>
                    <Suspense fallback="loading...">
                        {data.characters.map((char) => (
                            <div key={char}>
                                <CharacterLink characterUrl={char} />
                            </div>
                        ))}
                    </Suspense>
                </div>
            </div>
        </main>
    );
};

export default FilmDetails;
