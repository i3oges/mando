import { Route, Routes } from 'react-router';
import DetailsPage from './DetailsPage';
import SearchPage from './SearchPage';

export default function Welcome() {
    return (
        <div>
            <header className="h-16 w-full content-center border-b-1 text-center text-2xl font-bold dark:text-gray-100">SFStarter</header>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/details/:type/:uid" element={<DetailsPage />} />
            </Routes>
        </div>
    );
}
