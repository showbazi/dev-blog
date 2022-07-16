import axios from 'axios';
import useSWR from 'swr';

const useFetch = async (url) => {
    const {data: {totalViews}} = await axios.get(url);

    return totalViews;
};

const useGetViews = (customID, totalViews) => {
    const url = `/api/views/${customID}`;

    const config = {
        fallbackData: totalViews,
    }

    return useSWR(url, useFetch, config);
};

export default useGetViews;