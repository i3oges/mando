import SearchPage from '@/pages/SearchPage';
import { waitFor } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import TestProviders from '../util/TestProvider';

describe('SearchPage', () => {
    it('can search and display results', async () => {
        render(<SearchPage />, { wrapper: TestProviders({ initialEntries: ['/'] }) });

        await userEvent.type(screen.getByRole('textbox'), 'Yoda');
        await userEvent.click(screen.getByRole('button', { name: /search/i }));
        await waitFor(() => expect(screen.getByRole('link', { name: /see details/i })).toBeVisible());
    });
});
