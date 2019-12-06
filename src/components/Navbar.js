import React, { Component } from 'react'
import logo from '../images/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            
          <div className="site-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container"><a className="navbar-brand" href="index.html"><img className="etcodes-logo" src={logo} /><img className="etcodes-mobile-logo" src={logo} alt="Logo" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">

                  <li className="nav-item dropdown"><a className="nav-link" href="index.html">Home</a>  </li>
                  

                  <li className="nav-item dropdown mega_menu_holder"><a className="nav-link" href="blog-card-two-col-right-sidebar.html">All articles</a>
                  </li>

                  <li className="nav-item "><a className="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                  </li>

                  <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contribute</a>
                    <div className="dropdown-menu"><a className="dropdown-item" href="#">Submit your story</a><a className="dropdown-item" href="#">Donate to us</a></div></li>

                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="page-about-us.html">About us</a><a className="dropdown-item" href="page-contact.html">Contact</a></div></li>
    
                  <li className="nav-item-search">
                    <form className="form-inline navbar-search-bar">
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </form>
                  </li>
                  <li className="nav-item-social-nav d-flex align-items-center"><a className="text-light-blue" href="#"><i className="fab fa-twitter"></i></a><a className="text-dark-blue" href="#"><i className="fab fa-facebook"></i></a><a className="text-red" href="#"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
       
       )
    }
}
