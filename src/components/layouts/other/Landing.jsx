import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { logout } from '../../redux/actions/login';
// import { isTokenExpired } from '../helpers/Helpers';

const Landing = () => {
  // const state = useSelector((state) => state.log);

  // const isAuthenticated = () => {
  //   if (!!state?.user?.token && !isTokenExpired(state?.user?.token)) {
  //     return true;
  //   }
  //   return false;
  // };

  // useEffect(() => {
  //   isAuthenticated();
  // }, [state?.user?.token]);

  return (
    <header id="backgroundimg">
      <div className="ui inverted menu">
        <li className="item">User System</li>
        <div className="right menu">
          <li className="item">
            <Link to="/auth/login">
              <i className="sign in icon" />
              Login
            </Link>
          </li>
          {/* <li className="item">
            <Link to="/dashboard">
              <i className="tasks icon" /> Dashboard
            </Link>
          </li> */}
          {/* <li className="item">
            onClick={() => dispatch(logout())}
            <button className="logout">
              Logout <i className="sign out icon" />
            </button>
          </li> */}
        </div>
      </div>
      <div className="text-box">
        <div className="ui container">
          <div className="ui grid">
            <div className="column row centered">
              <h2 style={{ color: "black" }}>
                Welcome to our app. You can create account to continue
              </h2>
            </div>
            <div className="three wide column centered">
              <button className="ui icon button" id="linkId">
                <i className="rocket icon" />
                <Link to="/auth/login">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
