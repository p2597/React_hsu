import { useParams, useSearchParams } from 'react-router';
import useSWR from 'swr';
import axios from 'axios';
import ReactPlayer from 'react-player';
import VideosSearch from './VideosSearch';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function VideoDetail() {
    const { videoId } = useParams(); // Get videoId from URL
    const [searchParams] = useSearchParams();
  
    const { data, error, isLoading } = useSWR(
        videoId ? `https://harbour.dev.is/api/videos/${videoId}` : null,
        fetcher
    );

    const searchValue = searchParams.get('q');

 


    if(isLoading) {
        return <p> Uno momento </p>
    }


    if (error) {
        return <p>Error loading video details. Please try again later.</p>;
    }
    return (
        <>
      <div className="video-detail">
    {/* Video Section */}
    <div className="video-v-flex">
        <ReactPlayer
            url={data.url}
           width="100%"
           height="550px"
            className="searched-video-wrapper"
            controls
        />
        <div className="searched-video-text-wrapper">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>Channel: {data.channelName}</p>
            <p>Views: {data.views}</p>
        </div>
    </div>

    {/* Featured Videos Section */}
    <div className="featured-v-flex">
        {searchValue ? <VideosSearch searchValue={searchValue} /> : null}
    </div>
</div>

        </>

    );
}

