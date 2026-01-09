import useSwDetails from '@/hooks/UseSwDetails';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const FilmLink = ({ filmUrl }: { filmUrl: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const uid = filmUrl.split('/').at(-1) ?? '';
    const { data } = useSwDetails({ uid, type: 'film' });
    if (!data || data.type !== 'film') {
        return <></>;
    }

    const navigateTo = async (to: string) => {
        await queryClient.cancelQueries({ queryKey: ['details'], exact: false });
        navigate(to);
    };

    return (
        <button className="text-blue-300 hover:cursor-pointer hover:text-blue-400" onClick={() => navigateTo(`/details/film/${uid}`)}>
            {data.title}
        </button>
    );
};

export default FilmLink;
