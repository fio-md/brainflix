import axios from "axios";

const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const apiKey = "8a82812e-7218-418d-a5ca-60255dc60063";

const getAllVideos = async () => {
  try {
    const response = await axios.get(`${baseUrl}videos/?api_key=${apiKey}`);
    return response.data;
  } catch (e) {
    console.error("Error fetching video array: " + e);
  }
};

const getOneVideo = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}videos/${id}/?api_key=${apiKey}`);
    return response.data;
  } catch (e) {
    console.error("Error fetching video details: " + e);
  }
};

const postComment = async ({ id, comment }) => {
  try {
    console.log("comment: " + comment);
    const response = await axios.post(
      `${baseUrl}videos/${id}/comments/?api_key=${apiKey}`,
      comment
    );
    return response.data;
  } catch (e) {
    console.error("Error posting comment: " + e);
  }
};

export { getAllVideos, getOneVideo, postComment };
