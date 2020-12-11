import React from "react";
import {Link, useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";


export default function Navbar() {
  const history = useHistory()
  const message = useSelector(state => {
    return state.message
  })
  return (
    <div className="electron-app-navbar">
      <nav className="electron-app-navbar-inner">
        <div className="electron-app-navbar-inner-left">
          <button onClick={() =>   history.goBack()}>
            Go Back
          </button>
          <Link
            to='/settings'
            className="btn btn-outline-success ml-2">Settings</Link>
        </div>
        MESSAGE {message}

        <div className="electron-app-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>

          <Link
            to={'/register'}
            className="btn btn-sm btn-outline-danger ml-2">Register
          </Link>

          <Link
            to={'/login'}
            className="btn btn-sm btn-outline-success ml-2">Login
          </Link>

        </div>
      </nav>
    </div>
  )
}