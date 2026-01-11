import StatisticsSchema from '@/schema/StatisticsSchema';
import { useQuery } from '@tanstack/react-query';

const StatsPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['stats'],
        queryFn: () =>
            fetch('/api/stats')
                .then((res) => res.json())
                .then((json) => {
                    try {
                        return StatisticsSchema.parse(json);
                    } catch (e) {
                        console.error('failed to parse stats', e);
                    }
                }),
    });

    if (isLoading) {
        return <main className="m-auto flex w-3/4 justify-center gap-2 pt-4 dark:text-white">Loading...</main>;
    }

    if (!data) {
        return (
            <main className="m-auto flex w-3/4 justify-center gap-2 pt-4 dark:text-white">
                No statistics available at this time, please try again later.
            </main>
        );
    }

    return (
        <main className="m-auto flex w-3/4 justify-center gap-2 pt-4">
            <section className="flex h-min w-full flex-col gap-4 rounded-xl border-1 p-4 shadow-md shadow-gray-700 dark:border-white dark:text-white">
                <div className="grid grid-cols-2 gap-4">
                    <div>Fastest Request Time</div>
                    <div>Slowest Request Time</div>
                    <div>
                        {Number(data.fastest_request_time).toFixed(2)}s {data.fastest_request_uri}
                    </div>
                    <div>
                        {Number(data.slowest_request_time.toFixed(2))}s {data.slowest_request_uri}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="">Fastest 5 Requests</h2>
                    {Object.values(data.top_5_requests).map((r) => (
                        <div>
                            {Number(r.elapsed).toFixed(2)}s {r.uri}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default StatsPage;
