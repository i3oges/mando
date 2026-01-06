import SearchForm from '@/components/SearchForm';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import TestProviders from '../util/TestProvider';

describe('SearchForm', () => {
    it('should render', () => {
        render(<SearchForm />, { wrapper: TestProviders() });
        expect(screen.getByRole('button', { name: /search/i })).toBeVisible();
    });

    it('should enable submit button once form is filled', async () => {
        render(<SearchForm />, { wrapper: TestProviders() });
        expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();
        await userEvent.type(screen.getByRole('textbox'), 'Yoda');

        expect(screen.getByRole('button', { name: /search/i })).toBeEnabled();
    });
});
