import { z } from 'zod';

export const StatisticsSchema = z.object({
    id: z.number(),
    avg_request_time: z.number(),
    top_5_requests: z.record(
        z.string(),
        z.object({
            id: z.number(),
            uri: z.string(),
            start: z.number(),
            elapsed: z.number(),
            end: z.number(),
            created_at: z.string(),
            updated_at: z.string(),
        }),
    ),
    fastest_request_time: z.number(),
    fastest_request_uri: z.string(),
    slowest_request_time: z.number(),
    slowest_request_uri: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});

export default StatisticsSchema;
