import clsx from "clsx";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import "./index.styles.css";

export const FloatingButtons = () => {
  return (
    <div className="floatingButtonWrapper">
      <FacebookFloatingButton />
      <InstagramFloatingButton />
      <YoutubeFloatingButton />
    </div>
  );
};

const FacebookFloatingButton = () => {
  return (
    <div className={clsx("fab", "facebookButton")}>
      <CgFacebook className="fabIcons" />
    </div>
  );
};

const InstagramFloatingButton = () => {
  return (
    <div className={clsx("fab", "instagramButton")}>
      <AiOutlineInstagram className="fabIcons" />
    </div>
  );
};

const YoutubeFloatingButton = () => {
  return (
    <div className={clsx("fab", "youtubeButton")}>
      <AiOutlineYoutube className="fabIcons" />
    </div>
  );
};
