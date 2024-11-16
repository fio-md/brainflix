import ActiveVideo from "../../components/ActiveVideo/ActiveVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import * as API from "../../utils/apiCalls";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VideoDetails.scss";

const VideoDetails = () => {
  let { videoId } = useParams();

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length) {
      if (!videoId) {
        videoId = videos[0].id;
      }
      fetchVideoDetails();
    }
  }, [videoId, videos]);

  async function fetchVideos() {
    const vidArray = await API.getAllVideos();
    setVideos(vidArray);
  }

  const fetchVideoDetails = async () => {
    const vidDetails = await API.getOneVideo(videoId);
    setCurrentVideo(vidDetails);
  };

  if (!videos.length || !currentVideo) {
    return <span className="loading">Loading video details...</span>;
  }

  const nextVideos = videos.filter((video) => video.id !== currentVideo.id);

  return (
    <>
      <main className="main">
        <div className="main__video-container">
          <video
            className="main__video"
            controls
            poster={`${API.baseUrl}${currentVideo.image}`}
          ></video>
        </div>
        <div className="main__container">
          <ActiveVideo currentVideo={currentVideo} fetchVideos={fetchVideos} />
          <NextVideos nextVideos={nextVideos} />
        </div>
      </main>
    </>
  );
};

export default VideoDetails;
