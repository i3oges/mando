import z from 'zod';

export const PersonDetailsSchema = z.object({
    birthYear: z.string(),
    gender: z.string(),
    eyeColor: z.string(),
    hairColor: z.string(),
    height: z.string(),
    mass: z.string(),
    films: z.array(z.string()),
    name: z.string(),
    uid: z.string(),
    type: z.literal('people'),
});

export type PersonDetails = z.infer<typeof PersonDetailsSchema>;
