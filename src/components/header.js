import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="mb50">
        <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse h40" >
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <img className="logo-header" src={'./Images/logo_lion.png'} />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={`/clientLanding`}>Client Configuration</Link>
                
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="mt9 mr30">
                <a href="#">
                  <figure>
                    <svg className="general__icon icon__info" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19.4 20.5" space="preserve">
                      <path className="state--default state--default--stroke state--default--stroke-width" d="M16.1,20.3H4c-1.7,0-3-1.4-3-3V3.3c0-1.7,1.4-3,3-3h12.1c1.7,0,3,1.4,3,3v13.9C19.1,18.9,17.8,20.2,16.1,20.3zM4,1.1c-1.2,0-2.2,1-2.2,2.2v13.9c0,1.2,1,2.2,2.2,2.2h12.1c1.2,0,2.2-1,2.2-2.2V3.3c0-1.2-1-2.2-2.2-2.2C16.1,1.1,4,1.1,4,1.1z"></path>
                      <path className="state--default" d="M0,9.8h1.7v0.9H0V9.8zM0,12h1.7v0.9H0V12zM0,14.2h1.7V15H0V14.2zM0,3.3h1.7v0.9H0V3.3zM0,5.5h1.7v0.9H0V5.5zM0,7.6h1.7v0.9H0V7.6zM0,16.3h1.7v0.9H0V16.3zM11.7,13.2v-0.9c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1H11V9.3c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1H9c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1v0.9c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1h0.5v1.8H9c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1v0.9c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1h2.5c0,0,0.1,0,0.1-0.1C11.7,13.3,11.7,13.3,11.7,13.2zM11,8.2V7.3c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1H9.7c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1v0.9c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1h1.1c0,0,0.1,0,0.1-0.1C11,8.3,11,8.3,11,8.2zM14.6,10.5c0,0.8-0.2,1.5-0.6,2.1c-0.4,0.6-0.9,1.2-1.6,1.6c-0.7,0.4-1.4,0.6-2.2,0.6c-0.8,0-1.5-0.2-2.2-0.6c-0.6-0.4-1.2-0.9-1.6-1.6C6.2,12,6,11.3,6,10.5C6,9.8,6.2,9,6.6,8.4c0.4-0.6,0.9-1.2,1.6-1.6c0.7-0.4,1.4-0.6,2.1-0.6c0.8,0,1.5,0.2,2.2,0.6c0.6,0.4,1.2,0.9,1.6,1.6C14.4,9,14.6,9.8,14.6,10.5L14.6,10.5z"></path></svg>
                  </figure>
                </a>
              </li>
              <li className="mt9 mr30">
                <a href="#">
                  <figure>
                    <svg className="general__icon icon__help" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1536 1536" space="preserve">
                      <path className="state--default" d="M896,1248v-192c0-9.3-3-17-9-23s-13.7-9-23-9H672c-9.3,0-17,3-23,9s-9,13.7-9,23v192c0,9.3,3,17,9,23s13.7,9,23,9h192c9.3,0,17-3,23-9S896,1257.3,896,1248zM1152,576c0-58.7-18.5-113-55.5-163s-83.2-88.7-138.5-116s-112-41-170-41c-162,0-285.7,71-371,213c-10,16-7.3,30,8,42l132,100c4.7,4,11,6,19,6c10.7,0,19-4,25-12c35.3-45.3,64-76,86-92c22.7-16,51.3-24,86-24c32,0,60.5,8.7,85.5,26s37.5,37,37.5,59c0,25.3-6.7,45.7-20,61s-36,30.3-68,45c-42,18.7-80.5,47.5-115.5,86.5S640,847.3,640,892v36c0,9.3,3,17,9,23s13.7,9,23,9h192c9.3,0,17-3,23-9s9-13.7,9-23c0-12.7,7.2-29.2,21.5-49.5c14.3-20.3,32.5-36.8,54.5-49.5c21.3-12,37.7-21.5,49-28.5s26.7-18.7,46-35s34.2-32.3,44.5-48s19.7-35.8,28-60.5S1152,605.3,1152,576zM1536,768c0,139.3-34.3,267.8-103,385.5s-161.8,210.8-279.5,279.5S907.3,1536,768,1536s-267.8-34.3-385.5-103S171.7,1271.2,103,1153.5S0,907.3,0,768s34.3-267.8,103-385.5S264.8,171.7,382.5,103S628.7,0,768,0s267.8,34.3,385.5,103s210.8,161.8,279.5,279.5S1536,628.7,1536,768z"></path>
                    </svg>
                  </figure>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  admin</a>
                <div className="dropdown-menu dropdown-menu-right bg-inverse" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item text-white" href="#">ADMIN</a>
                  <a className="dropdown-item text-white" href="#">MANAGE USERS</a>
                  <Link className="dropdown-item text-white" to="/">LOG OFF</Link>
                </div>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
      </div >
    );
  }
}
