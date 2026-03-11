import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGIF, fetchPhotos, fetchVideos } from '../api/mediaApi.js';
import { setError, setResults } from '../redux/features/searchSlice.js';
import { store } from '../redux/store.js';
import { ResultCard } from './ResultCard.jsx';

export const ResultGrid = () => {
    const dispatch = useDispatch();
    const { query, activeTabs, results, loading, error } = useSelector((store) => store.search);

    useEffect(() => {
        if (!query) return;

        const getData = async () => {
            try {
                let data = [];
                if (activeTabs === 'photos') {
                    let res = await fetchPhotos(query);
                    data = res.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full
                    }))

                } else if (activeTabs === 'videos') {
                    let res = await fetchVideos(query);
                    data = res.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link
                    }))
                } else if(activeTabs === 'GIF') {
                    let res = await fetchGIF(query);
                    data = res.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title || 'GIF',
                        thumbnail: item.images.fixed_width.url,
                        src: item.images.original.url
                    }))
                }
                dispatch(setResults(data));

            } catch (err) {
                dispatch(setError(err));
            }
        }

        getData();
    }, [activeTabs, query]);

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className='flex justify-center flex-wrap gap-5 overflow-auto px-10'>
            {results.map((item) => (
                <ResultCard key={item.id} item={item} />
            ))}
        </div>
    )
}