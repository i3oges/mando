import { useQuery } from '@tanstack/react-query';

const StatsPage = () => {
    const { data } = useQuery({
        queryKey: ['stats'],
        queryFn: () => fetch('/api/stats').then((res) => res.json()),
    });

    return (
        <main className="m-auto flex w-3/4 justify-center gap-2 pt-4">
            <pre>{JSON.stringify(data, null, '  ')}</pre>
        </main>
    );
};

export default StatsPage;
