import z from 'zod';
export const SearchResultsSchema = z.array(
    z.object({
        uid: z.string(),
        type: z.literal(['people', 'film']),
        title: z.string(),
    }),
);

export type SearchResults = z.infer<typeof SearchResultsSchema>;
