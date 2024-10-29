import ActiveVideo from "../../components/ActiveVideo/ActiveVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VideoDetails.scss";

const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const apiKey = "8a82812e-7218-418d-a5ca-60255dc60063";

const VideoDetails = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  let { videoId } = useParams();

  if (!videoId) {
    videoId = videos[0].id;
  }

  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}videos/${videoId}/?api_key=${apiKey}`);
      setCurrentVideo(response.data);
    } catch (e) {
      console.error("Error fetching video details: " + e);
    }
  };

  if (!currentVideo) {
    return <>Loading current video...</>;
  }

  const nextVideos = videos.filter((video) => video.id !== currentVideo.id);

  return (
    <>
      <main className="main">
        <div className="main__video-container">
          <video className="main__video" controls poster={currentVideo.image}></video>
        </div>
        <div className="main__container">
          <ActiveVideo currentVideo={currentVideo} />
          <NextVideos nextVideos={nextVideos} />
        </div>
      </main>
    </>
  );
};

export default VideoDetails;
