import React from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [React()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/setup.ts',
        coverage: {
            exclude: ['**/actions/**', '**/routes/**', '**/wayfinder/**', '**/tests/**'],
        },
    },

    root: path.resolve(__dirname, './resources/js'),

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
});
