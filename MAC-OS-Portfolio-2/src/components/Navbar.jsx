import "./Navbar.scss";
import DateTime from "./DateTime";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <div className="apple-icon">
          <img src="/Nav-icons/apple.svg" />
        </div>

        <div className="nav-item">
          <p>Abhijeet</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>

        <div className="nav-item">
          <p>Window</p>
        </div>

        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        <div className="wifi">
          <img src="/Nav-icons/wifi.svg" />
        </div>

        <div className="date-time">
          <DateTime/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
