import { FilmDetailsSchema } from '@/schema/FilmDetailsSchema';
import { PersonDetailsSchema } from '@/schema/PersonDetailsSchema';
import { useSuspenseQuery } from '@tanstack/react-query';

const useSwDetails = ({ type, uid }: { type: string; uid: string }) => {
    return useSuspenseQuery({
        queryKey: ['details', type, uid],
        refetchOnWindowFocus: false,
        queryFn: async ({ queryKey: [, type, uid] }) => {
            const json = await fetch(`/api/star-wars-details/${type}/${uid}`).then((res) => res.json());
            try {
                if (type === 'people') {
                    return PersonDetailsSchema.parse(json);
                }
                return FilmDetailsSchema.parse(json);
            } catch (e) {
                console.error(e);
            }
        },
    });
};

export default useSwDetails;
