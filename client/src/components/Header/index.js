import React from 'react';
import { Link } from 'react-router-dom';
import {BiLogOut} from 'react-icons/bi'
import Auth from '../../utils/auth';
//🎸🎹🥁🎻🎷🎺//
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="mb-4 py-3 flex-row align-center headerContainer">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div className='headerTitle'>
          <Link className="" to="/">
            <h1 className="m-0 title" style={{}}>Groove Critic</h1>
          </Link>
        </div>
        <div className='nav'>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-md btn-info m-2 myProfile" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <a className="logout" onClick={logout}>
                <BiLogOut size={'3em'}/>
              </a>
            </>
          ) : (
            <>
              <Link className="btn btn-md btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
