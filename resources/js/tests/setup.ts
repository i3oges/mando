import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { server } from './util/server';

vi.mock('@inertiajs/react', () => ({
    ...vi.importActual('@inertiajs/react'),
    Head: () => null,
}));
beforeAll(() => {
    server.listen();
});

afterEach(() => {
    cleanup();
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});
