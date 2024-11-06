import "./VideoUpload.scss";
import Button from "../../components/Button/Button";
import publishButton from "../../assets/images/icons/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import Divider from "../../components/Divider/Divider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postVideo } from "../../utils/apiCalls";

const VideoUpload = ({ fetchVideos }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVid = { title, description, image: "https://placecats.com/800/500" };
    uploadVideo(newVid);
    alert("Form submitted!");
    navigate("/");
  };

  const uploadVideo = async (video) => {
    await postVideo(video);
    fetchVideos();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <Divider newClass="mobile-hidden" />
      <form action="submit" className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__form-container">
          <label htmlFor="thumbnail" className="upload__label">
            Video Thumbnail
          </label>
          <img src={uploadPreview} alt="" className="upload__thumbnail" />
        </div>
        <div className="upload__desktop-container">
          <div className="upload__form-container">
            <label htmlFor="title" className="upload__label">
              Title your video
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              className="upload__form-title"
              placeholder="Add a title to your video"
              onChange={handleTitleChange}
            />
          </div>
          <div className="upload__form-container">
            <label htmlFor="description" className="upload__label">
              Add a Video Description
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={description}
              className="upload__input"
              placeholder="Add a description to your video"
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>
        <Divider newClass="mobile-hidden" />
        <div className="upload__buttons">
          <Button buttonIcon={publishButton} buttonText="Publish" />
          <button className="upload__cancel">Cancel</button>
        </div>
      </form>
    </section>
  );
};

export default VideoUpload;
