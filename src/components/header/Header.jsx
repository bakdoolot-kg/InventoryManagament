import "./header.scss";
import avatarIcon from "../../assets/Ellipse_avatar.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidBell } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="mdlarge">
      <div className="box">
        <header className="header">
          <div className="nav">
            <RxHamburgerMenu className="burger-header" />
          </div>
          <div className="other-links">
            <AiOutlineSearch style={{ fontSize: "1.5rem" }} />
            <BiSolidBell style={{ fontSize: "1.5rem" }} />
            <div className="profile">
              <img className="ellipse" alt="Ellipse" src={avatarIcon} />
              <div className="text-wrapper">Ann Lee</div>
              <BsFillCaretDownFill />
            </div>
          </div>
        </header>
      </div>
    </Container>
  );
};

export default Header;
