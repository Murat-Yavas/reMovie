import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/user-slice";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Navbar() {
  const loginState = useSelector((state) => state.user.isLogIn);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    dispatch(userActions.userExit());
    setShowMenu(false);
  };

  return (
    <div className="top-nav">
      <div className="nav-items">
        <div className="site-logo">
          <NavLink to="/" className="nav-item">
            LOGO + NAME
          </NavLink>
        </div>
        <div className="site-content">
          <NavLink className="nav-item" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item" to="/series">
            Series
          </NavLink>
        </div>
      </div>
      <div className="d-none d-md-flex bg-transparent">
        {!loginState ? (
          <NavLink to="/logIn" className="nav-item">
            Sign In
          </NavLink>
        ) : (
          <>
            <NavLink to="/" onClick={handleLogout} className="nav-item">
              Logout
            </NavLink>
            <NavLink to="/watchList" className="nav-item">
              Watch List
            </NavLink>
          </>
        )}
      </div>

      <div className="mx-3 d-flex d-md-none bg-transparent">
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="hamburger-icon bg-transparent"
        >
          <RxHamburgerMenu />
        </span>
      </div>

      {showMenu && (
        <div className="navbar-menu">
          {!loginState ? (
            <span>Sign in</span>
          ) : (
            <>
              <span onClick={handleLogout}>Logout</span>
              <span>Watch List</span>
            </>
          )}
        </div>
      )}

      <Modal
        show={showMenu}
        fullscreen={true}
        onHide={() => setShowMenu(false)}
        animation={false}
        style={{ backgroundColor: "#0c2738" }}
      >
        <div
          className="d-flex justify-content-end modal-close-button" //${styles["modal-close-button"]}
          onClick={() => setShowMenu(false)}
        >
          <AiOutlineClose />
        </div>
        <Modal.Body>
          {/* className={`${styles["modal-items"]}`} */}
          <div className="navigations">
            <NavLink
              className="navigation-item"
              // className={(data) => changeActiveTabColor(data)}
              to="/"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="navigation-item"
              // className={(data) => changeActiveTabColor(data)}
              to="/movies"
              onClick={() => setShowMenu(false)}
            >
              Movies
            </NavLink>
            <NavLink
              className="navigation-item"
              // className={(data) => changeActiveTabColor(data)}
              to="/series"
              onClick={() => setShowMenu(false)}
            >
              Series
            </NavLink>

            {!loginState ? (
              <NavLink
                className="navigation-item"
                to="/logIn"
                onClick={() => setShowMenu(false)}
              >
                Sign In
              </NavLink>
            ) : (
              <>
                <NavLink
                  className="navigation-item"
                  to="/watchList"
                  onClick={() => setShowMenu(false)}
                >
                  Watch List
                </NavLink>
                <NavLink
                  className="navigation-item"
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Navbar;
