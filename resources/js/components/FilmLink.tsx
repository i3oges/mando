import useSwDetails from '@/hooks/UseSwDetails';
import { Link } from 'react-router';

const FilmLink = ({ filmUrl }: { filmUrl: string }) => {
    const uid = filmUrl.split('/').at(-1) ?? '';
    const { data } = useSwDetails({ uid, type: 'film' });
    if (!data || 'hairColor' in data) {
        return <></>;
    }

    return <Link to={`/details/film/${uid}`}>{data.title}</Link>;
};

export default FilmLink;
