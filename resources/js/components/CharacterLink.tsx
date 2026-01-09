import useSwDetails from '@/hooks/UseSwDetails';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const CharacterLink = ({ characterUrl }: { characterUrl: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const uid = characterUrl.split('/').at(-1) ?? '';
    const { data } = useSwDetails({ uid, type: 'people' });
    if (!data || 'openingCrawl' in data) {
        return <></>;
    }

    const navigateTo = async (to: string) => {
        await queryClient.cancelQueries({ queryKey: ['details'], exact: false });
        navigate(to);
    };

    return (
        <button onClick={() => navigateTo(`/details/people/${uid}`)} className="text-blue-300 hover:cursor-pointer hover:text-blue-400">
            {data.name}
        </button>
    );
};

export default CharacterLink;
