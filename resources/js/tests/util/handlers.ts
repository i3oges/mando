import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/api/star-wars-details/people/20', () =>
        HttpResponse.json({
            name: 'Yoda',
            birthYear: '896BBY',
            gender: 'male',
            eyeColor: 'brown',
            hairColor: 'white',
            height: '66',
            mass: '17',
            films: ['https://www.swapi.tech/api/films/2'],
            uid: '20',
            type: 'people',
        }),
    ),
    http.get('/api/star-wars-details/film/2', () =>
        HttpResponse.json({
            openingCrawl:
                'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
            title: 'The Empire Strikes Back',
            characters: ['https://www.swapi.tech/api/people/20'],
            uid: '2',
            type: 'film',
        }),
    ),
    http.post('/api/star-wars-movies', () => HttpResponse.json([{ uid: '20', title: 'Yoda', type: 'people' }])),
    http.get('/api/stats', () =>
        HttpResponse.json({
            id: 1,
            avg_request_time: 0,
            top_5_requests: {
                '708': {
                    id: 709,
                    uri: '/details/film/2',
                    start: 1767725094.8116,
                    elapsed: 0.0020699501037598,
                    end: 1767725094.8136,
                    created_at: '2026-01-06T18:44:54.000000Z',
                    updated_at: '2026-01-06T18:44:54.000000Z',
                },
                '838': {
                    id: 839,
                    uri: '/details/film/2',
                    start: 1767725382.498,
                    elapsed: 0.0017929077148438,
                    end: 1767725382.4998,
                    created_at: '2026-01-06T18:49:42.000000Z',
                    updated_at: '2026-01-06T18:49:42.000000Z',
                },
                '908': {
                    id: 909,
                    uri: '/api/stats',
                    start: 1767726145.707,
                    elapsed: 0.0027568340301514,
                    end: 1767726145.7098,
                    created_at: '2026-01-06T19:02:25.000000Z',
                    updated_at: '2026-01-06T19:02:25.000000Z',
                },
                '926': {
                    id: 927,
                    uri: '/stats',
                    start: 1767726213.3671,
                    elapsed: 0.0024669170379639,
                    end: 1767726213.3696,
                    created_at: '2026-01-06T19:03:33.000000Z',
                    updated_at: '2026-01-06T19:03:33.000000Z',
                },
                '1442': {
                    id: 1443,
                    uri: '/details/people/33',
                    start: 1767735427.0929,
                    elapsed: 0.0010430812835693,
                    end: 1767735427.094,
                    created_at: '2026-01-06T21:37:07.000000Z',
                    updated_at: '2026-01-06T21:37:07.000000Z',
                },
            },
            fastest_request_time: 0.0010430812835693,
            fastest_request_uri: '/details/people/33',
            slowest_request_time: 26.149159908295,
            slowest_request_uri: '/api/star-wars-details/people/4',
            created_at: '2026-01-06T19:03:00.000000Z',
            updated_at: '2026-01-06T21:37:10.000000Z',
        }),
    ),
];
