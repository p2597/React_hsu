import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function VideosSearch({ searchValue }) {
    const { data, error, isLoading } = useSWR(
        searchValue ? `https://harbour.dev.is/api/search?q=${searchValue}` : null,
        fetcher
    );

    if (isLoading) {
        return <p>Uno momento...</p>;
    }

    if (error) {
        return <p>Error loading video details. Please try again later.</p>;
    }

    const videos = data?.results || data || []; // Adjust depending on API response structure

    return (
        <div className="featured-v-flex">
            {videos.length > 0 ? (
                videos.map((video, index) => (
                    <div key={index} className="featured-video-item">
                        {/* Image Wrapper */}
                        <div className="f-img-wrapper">
                            <img
                                src={video.snippet.thumbnails.url}// Replace with the correct thumbnail field
                                alt={video.title || 'Featured Video'}
                            />
                        </div>

                        {/* Text Wrapper */}
                        <div className="f-txt-wrapper">
                            <h3>{video.title || 'No Title Available'}</h3>
                            <p>{video.description || 'No Description Available'}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No videos found. Try another search query.</p>
            )}
        </div>
    );
}
