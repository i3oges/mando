import z from 'zod';

export const FilmDetailsSchema = z.object({
    openingCrawl: z.string(),
    title: z.string(),
    characters: z.array(z.string()),
    uid: z.string(),
});

export type FilmDetails = z.infer<typeof FilmDetailsSchema>;
