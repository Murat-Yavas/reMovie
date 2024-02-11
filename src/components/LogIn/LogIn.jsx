import "./Login.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/user-slice";

function LogIn() {
  const isSignIn = useSelector((state) => state.user.isSignIn);
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(userActions.logUser());
  };

  const handleSignIn = () => {
    dispatch(userActions.signUser());
  };

  return (
    <form className="sign-form">
      <div className="form-buttons">
        <button type="button" className="btn" onClick={handleSignIn}>
          {!isSignIn ? "Login" : "Sign In"}
        </button>
      </div>
      {!isSignIn ? (
        <div className="mb-3 user-input">
          <label htmlFor="name" className="form-label">
            User Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
      ) : (
        ""
      )}
      <div className="mb-3 user-input">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3 user-input">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" />
      </div>
      <NavLink to="/">
        <button type="button" onClick={handleLogIn} className="btn btn-danger">
          {!isSignIn ? "Sign In" : "Login"}
        </button>
      </NavLink>
    </form>
  );
}

export default LogIn;
