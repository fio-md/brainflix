import "./App.scss";
import axios from "axios";
import Header from "./components/Header/Header";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import NextVideos from "./components/NextVideos/NextVideos";
import videoData from "/src/data/video-details.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const apiKey = "8a82812e-7218-418d-a5ca-60255dc60063";

function App() {
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);
  const id = useParams();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${baseUrl}videos/?api_key=${apiKey}`);
      setVideos(response.data);
      if (!id) {
        id = response.data[0].id;
      }
    } catch (e) {
      console.error("Error fetching video array: " + e);
    }
  };
  const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}videos/${id}/?api_key=${apiKey}`);
      setVideoDetails(response.data);
    } catch (e) {
      console.error("Error fetching video details: " + e);
    }
  };

  if (!videos.length) {
    return <>Loading...</>;
  }

  return (
    <>
      <Header />
      <main className="main">
        {/* <video className="main__video" controls poster={activeVideo.image}></video> */}
        <div className="main__container">
          {/* <ActiveVideo activeVideo={activeVideo} /> */}
          {/* <NextVideos otherVideos={otherVideos} /> */}
        </div>
      </main>
    </>
  );
}

export default App;
