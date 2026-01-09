import DetailsPage from '@/pages/DetailsPage';
import { render, screen, waitFor } from '@testing-library/react';
import { Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import TestProviders from '../util/TestProvider';

describe('DetailsPage', () => {
    it('shows film details', async () => {
        render(
            <Routes>
                <Route path="/details/:type/:uid" element={<DetailsPage />} />
            </Routes>,
            { wrapper: TestProviders({ initialEntries: ['/details/film/2'] }) },
        );
        await waitFor(() => expect(screen.getByRole('heading', { name: /The Empire Strikes Back/i })).toBeInTheDocument());
    });

    it('shows people details', async () => {
        render(
            <Routes>
                <Route path="/details/:type/:uid" element={<DetailsPage />} />
            </Routes>,
            { wrapper: TestProviders({ initialEntries: ['/details/people/20'] }) },
        );
        await waitFor(() => expect(screen.getByRole('heading', { name: /yoda/i })).toBeInTheDocument());
    });
});
