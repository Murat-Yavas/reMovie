import "./Footer.css";
import { NavLink } from "react-router-dom";
import ButtonUI from "../UI/Button/ButtonUI";
import { useSelector } from "react-redux";

function Footer() {
  const loginState = useSelector((state) => state.user.isLogIn);

  return (
    <div className="footer">
      <div className="sign-button">
        {!loginState ? (
          <NavLink to="/logIn">
            <ButtonUI className="btn btn-danger">
              Sign in for more access
            </ButtonUI>
          </NavLink>
        ) : (
          ""
        )}
      </div>

      <div className="footer-content">
        <div className="sub-content social">
          <h4 className="content-title">Social Media</h4>
          <NavLink className="content-item" to="/">
            Instagram
          </NavLink>
          <NavLink className="content-item" to="/">
            Twitter (X)
          </NavLink>
          <NavLink className="content-item" to="/">
            Facebook
          </NavLink>
          <NavLink className="content-item" to="/">
            Youtube
          </NavLink>
        </div>

        <div className="sub-content community">
          <h4 className="content-title">Community</h4>
          <NavLink className="content-item" to="/">
            Legal & Privacy
          </NavLink>
          <NavLink className="content-item" to="/">
            Guides
          </NavLink>
          <NavLink className="content-item" to="/">
            All Time Leaders
          </NavLink>
          <NavLink className="content-item" to="/">
            Help Center
          </NavLink>
        </div>

        <div className="sub-content user">
          <h4 className="content-title">User</h4>
          <NavLink className="content-item" to="/">
            Online Service Updates
          </NavLink>
          <NavLink className="content-item" to="/">
            User Agreement
          </NavLink>
          <NavLink className="content-item" to="/">
            Cookie Preferences
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
