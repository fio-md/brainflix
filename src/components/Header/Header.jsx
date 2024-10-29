import "./Header.scss";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import uploadIcon from "/src/assets/images/icons/upload.svg";
import searchIcon from "/src/assets/images/icons/search.svg";
import avatarPic from "/src/assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
      <Button buttonIcon={uploadIcon} buttonText="upload" />
    </header>
  );
};

export default Header;
