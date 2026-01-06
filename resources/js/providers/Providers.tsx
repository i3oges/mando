import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import SearchResultsProvider from './SearchResultsProvider';
const client = new QueryClient();

const Providers = ({ children, queryClient = client }: { children: React.ReactNode; queryClient?: QueryClient }) => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SearchResultsProvider>{children}</SearchResultsProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default Providers;
