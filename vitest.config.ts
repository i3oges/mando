import React from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [React()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'setup.ts',
    },

    root: path.resolve(__dirname, './resources/js/tests'),

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
});
