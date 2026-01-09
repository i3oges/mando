import SearchResultsProvider from '@/providers/SearchResultsProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import { MemoryRouter } from 'react-router';
const client = new QueryClient();

const TestProviders =
    ({ initialEntries = [] }: { initialEntries?: string[] } = {}) =>
    ({ children, queryClient = client }: { children: React.ReactNode; queryClient?: QueryClient }) => {
        return (
            <MemoryRouter initialEntries={initialEntries}>
                <QueryClientProvider client={queryClient}>
                    <SnackbarProvider />
                    <SearchResultsProvider>{children}</SearchResultsProvider>
                </QueryClientProvider>
            </MemoryRouter>
        );
    };

export default TestProviders;
