import { Link } from "react-router-dom";
import "../index.css";

const Footer = () => {
  return (
    <>
      <div className="footer p-[70px] bg-[#EEE6D9]">
        <div className="container flex flex-col md:flex-row justify-between">
          <div className="menu">
            <ul className="flex flex-col md:flex-row md:gap-4 gap-2 py-3">
              <li className="links">
                <Link to="">Menu</Link>
              </li>
              <li className="links">
                <Link to="">Who We Are</Link>
              </li>
              <li className="links">
                <Link to="">Events</Link>
              </li>
              <li className="links">
                <Link to="">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="logo py-3">
            <h4 className="text-2xl font-bold">Your Logo</h4>
          </div>
          <div className="subscibe py-3">
            <p>Sign up to Our Newsletter</p>
            <input
              type="text"
              placeholder="Email"
              style={{
                background: "transparent",
                padding: "8px",
                borderBottom: "1px solid #2D1312",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
