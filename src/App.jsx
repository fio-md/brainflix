import "./App.scss";
import Header from "./components/Header/Header";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const apiKey = "8a82812e-7218-418d-a5ca-60255dc60063";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${baseUrl}videos/?api_key=${apiKey}`);
      setVideos(response.data);
    } catch (e) {
      console.error("Error fetching video array: " + e);
    }
  };

  if (!videos.length) {
    return <>Loading data...</>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoDetails videos={videos} />}></Route>
        <Route path="video/:videoId" element={<VideoDetails videos={videos} />}></Route>
        <Route path="upload" element={<VideoUpload />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
