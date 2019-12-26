import React, { Component } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            
          <div className="site-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container"><Link className="navbar-brand" to="/"><img className="etcodes-logo" src={logo} alt="Logo" /><img className="etcodes-mobile-logo" src={logo} alt="Logo" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">

                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                  

                  <li className="nav-item"><Link className="nav-link" to="/blog">All articles</Link></li>

                  <li className="nav-item"><a className="nav-link" href="https://theafrican.store" target="_blank" rel="noopener noreferrer">Shop</a>
                  </li>

                  <li className="nav-item dropdown"><Link className="dropdown-toggle nav-link"to="/maintenance" data-toggle="dropdown">Contribute</Link>
                    <div className="dropdown-menu"><a className="dropdown-item"href="mailto:afrikasveryown@gmail.com?subject=My Story">Submit your story</a><Link className="dropdown-item"to="/maintenance">Donate to us</Link></div></li>

                    <li className="nav-item dropdown"><Link className="dropdown-toggle nav-link"to="/maintenance" data-toggle="dropdown">Pages</Link>
                      <div className="dropdown-menu"><Link className="dropdown-item" to="/about">About us</Link><Link className="dropdown-item" to="/contact">Contact</Link></div></li>
    
                  <li className="nav-item-search">
                    <form className="form-inline navbar-search-bar">
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </form>
                  </li>
                  <li className="nav-item-social-nav d-flex align-items-center"><a className="text-light-blue" href="https://twitter.com/deeafrikan"><i className="fab fa-twitter"></i></a><a className="text-dark-blue" href="https://twitter.com/deeafrikan"><i className="fab fa-instagram"></i></a><Link className="text-red"to="/maintenance"><i className="fab fa-youtube"></i></Link><Link className="text-red"to="/maintenance"><i className="fab fa-pinterest"></i></Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
       
       )
    }
}
