import useSwDetails from '@/hooks/UseSwDetails';
import { Link } from 'react-router';

const CharacterLink = ({ characterUrl }: { characterUrl: string }) => {
    const uid = characterUrl.split('/').at(-1) ?? '';
    const { data } = useSwDetails({ uid, type: 'people' });
    if (!data || 'openingCrawl' in data) {
        return <></>;
    }

    return <Link to={`/details/people/${uid}`}>{data.name}</Link>;
};

export default CharacterLink;
