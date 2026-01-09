import { FilmDetailsSchema } from '@/schema/FilmDetailsSchema';
import { PersonDetailsSchema } from '@/schema/PersonDetailsSchema';
import { useSuspenseQuery } from '@tanstack/react-query';
import z from 'zod';

const SwDetailsSchema = z.discriminatedUnion('type', [FilmDetailsSchema, PersonDetailsSchema]);

const useSwDetails = ({ type, uid }: { type: string; uid: string }) => {
    return useSuspenseQuery({
        queryKey: ['details', type, uid],
        refetchOnWindowFocus: false,
        queryFn: async ({ queryKey: [, type, uid], signal }) => {
            const json = await fetch(`/api/star-wars-details/${type}/${uid}`, { signal }).then((res) => res.json());
            try {
                return SwDetailsSchema.parse(json);
            } catch (e) {
                console.error(e);
            }
        },
        refetchOnMount: false,
    });
};

export default useSwDetails;
