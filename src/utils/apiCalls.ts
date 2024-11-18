import axios from "axios";
import { PostComment, DeleteComment, PostVideo } from "./interfaces";

const baseUrl = import.meta.env.VITE_API_URL;

const getAllVideos = async () => {
  try {
    const response = await axios.get(`${baseUrl}videos`);
    return response.data;
  } catch (e) {
    console.error("Error fetching video array: " + e);
  }
};

const getOneVideo = async (id?: string) => {
  try {
    const response = await axios.get(`${baseUrl}videos/${id}`);
    return response.data;
  } catch (e) {
    console.error("Error fetching video details: " + e);
  }
};

const postComment = async ({ id, comment }: PostComment) => {
  try {
    const response = await axios.post(
      `${baseUrl}videos/${id}/comments`,
      comment
    );
    return response.data;
  } catch (e) {
    console.error("Error posting comment: " + e);
  }
};

const deleteComment = async ({ videoId, commentId }: DeleteComment) => {
  try {
    const response = await axios.delete(
      `${baseUrl}videos/${videoId}/comments/${commentId}`
    );
    return response.data;
  } catch (e) {
    console.error(`Error deleting comment with id ${commentId}`);
  }
};

const postVideo = async (newVid: PostVideo) => {
  try {
    const response = await axios.post(`${baseUrl}videos`, newVid);
    return response.data;
  } catch (e) {
    console.error(`Error adding video ${newVid}`);
  }
};

export {
  baseUrl,
  getAllVideos,
  getOneVideo,
  postComment,
  deleteComment,
  postVideo,
};
