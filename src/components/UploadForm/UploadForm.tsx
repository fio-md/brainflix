import Button from "../Button/Button";
import publishButton from "../../assets/images/icons/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import Divider from "../Divider/Divider";
import { postVideo } from "../../utils/apiCalls";
import { PostVideo } from "../../utils/interfaces";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadForm.scss";

const UploadForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const uploadVideo = async (video: PostVideo) => {
    await postVideo(video);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const newVid = { title, description, image: "./images/upload-image.jpg" };
    uploadVideo(newVid);
    alert("Video Uploaded!");
    navigate("/");
  };

  return (
    <form action="submit" className="upload__form" onSubmit={handleSubmit}>
      <div className="upload__form-container">
        <span className="upload__label">Video Thumbnail</span>
        <img
          src={uploadPreview}
          id="thumbnail"
          alt=""
          className="upload__thumbnail"
        />
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
            required
          />
        </div>
        <div className="upload__form-container">
          <label htmlFor="description" className="upload__label">
            Add a Video Description
          </label>
          <textarea
            name="description"
            id="description"
            value={description}
            className="upload__input"
            placeholder="Add a description to your video"
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
      </div>
      <Divider newClass="mobile-hidden" />
      <div className="upload__buttons">
        <Button buttonIcon={publishButton} buttonText="Publish" />
        <button className="upload__cancel">Cancel</button>
      </div>
    </form>
  );
};

export default UploadForm;
