import useSwDetails from '@/hooks/UseSwDetails';
import { useIsFetching } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useParams } from 'react-router';
import CharacterLink from './CharacterLink';

const FilmDetails = () => {
    const { type, uid } = useParams();
    const { data } = useSwDetails({ type: type ?? '', uid: uid ?? '' });
    const loadCount = useIsFetching({ queryKey: ['details', 'people'], exact: false });

    if (!data || 'birthYear' in data) {
        console.log({ data });
        return <></>;
    }
    return (
        <main className="m-auto flex w-3/4 justify-center gap-2 pt-4">
            <section className="flex h-min w-full flex-col gap-4 rounded-xl border-1 p-4 shadow-md shadow-gray-700 dark:border-white dark:text-white">
                <h2 className="text-xl font-bold">{data.title}</h2>
                <div className="border-b-1">Opening Crawl</div>
                <div>{data.openingCrawl}</div>
            </section>
            <section className="flex h-min w-full flex-col gap-4 rounded-xl border-1 p-4 shadow-md shadow-gray-700 dark:border-white dark:text-white">
                <div className="border-b-1">Characters</div>
                <div>
                    <Suspense fallback={`loading... (${loadCount} remaining)`}>
                        <div className="grid grid-cols-2">
                            {data.characters.map((char) => (
                                <div key={char}>
                                    <CharacterLink characterUrl={char} />
                                </div>
                            ))}
                        </div>
                    </Suspense>
                </div>
            </section>
        </main>
    );
};

export default FilmDetails;
