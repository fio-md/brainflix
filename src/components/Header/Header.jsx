import "./Header.scss";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import uploadIcon from "/src/assets/images/icons/upload.svg";
import searchIcon from "/src/assets/images/icons/search.svg";
import avatarPic from "/src/assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo-container">
          <img
            src="/src/assets/images/BrainFlix-logo.svg"
            alt=""
            className="header__logo"
          />
        </Link>
        <input className="searchbar" type="search" placeholder="Search"></input>
        <Avatar picture={avatarPic} />
        <Link to="/upload" className="header__upload-link">
          <Button buttonIcon={uploadIcon} buttonText="upload" />
        </Link>
      </header>
      <Divider />
    </>
  );
};

export default Header;
