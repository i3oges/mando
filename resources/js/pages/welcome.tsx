import { Link, Route, Routes } from 'react-router';
import DetailsPage from './DetailsPage';
import SearchPage from './SearchPage';
import StatsPage from './StatsPage';

export default function Welcome() {
    return (
        <div>
            <header className="shadow-l flex h-16 w-full items-center justify-between border-b-1 px-2 text-2xl font-bold shadow-gray-600 dark:text-gray-100">
                <div></div>
                <Link to="/">SFStarter</Link>
                <Link to="/stats">Stats</Link>
            </header>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/details/:type/:uid" element={<DetailsPage />} />
                <Route path="/stats" element={<StatsPage />} />
            </Routes>
        </div>
    );
}
