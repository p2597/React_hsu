export default function VideoContainer({ video }) {
  return (
      <div className="video-container">
          <div className="video-wrapper">
              <img
                  src={video.snippet.thumbnails.url}
                  width="371px"
                  height="207px"
                  alt={video.title || 'Video Thumbnail'}
              />
          </div>
          <div className="content-wrapper">
              <h3>{video.title || 'Video Title'}</h3>
              <p>{video.description || 'No description available'}</p>
              <bold>{video.snippet.duration || 'Additional Info'}</bold>
          </div>
      </div>
  );
}
