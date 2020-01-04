import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
<nav className="navbar bg-white">
    <div className="container">
        <div className="navbar-inner">
            <div className="brand-logo-container">
                <Link to="/">
                    <img src="assets/images/logo.png" alt="" className="brand-logo" />
                </Link>
            </div>
            <div className="main-nav-wrapper">
                <ul className="main-navigation list-inline" id="main-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="has-dropdown">
                        <a href="#">Culture</a>
                        <ul className="submenu">
                            <li><Link to="/article/categories">History</Link>
                            </li>
                            <li><Link to="/article/categories">Documentry</Link></li>
                            <li><Link to="/article/categories">Events</Link></li>
                            <li><Link to="/article/categories">Tourism</Link></li>
                        </ul>
                    </li>
                    <li className="has-dropdown">
                        <Link to="/article/categories">Lifestyle</Link>
                        <ul className="submenu">
                            <li><Link to="/article/categories">Food</Link>
                            </li>
                            <li><Link to="/article/categories">Style</Link></li>
                            <li><Link to="/article/categories">Arts</Link></li>
                            <li><Link to="/article/categories">Crafts</Link></li>
                        </ul>
                    </li>
                    <li className="has-dropdown">
                        <a href="#">Entertainment</a>
                        <ul className="submenu">
                            <li><Link to="/videos">Videos</Link>
                            </li>
                            <li><Link to="/article/categories">Audio</Link></li>
                            <li><Link to="/article/categories">Fashion</Link></li>
                            <li><Link to="/article/categories">Genetal Entertainment</Link></li>
                        </ul>
                    </li>
                    <li className="has-dropdown">
                        <a href="#">Business</a>
                        <ul className="submenu">
                            <li><Link to="/article/categories">Markets</Link>
                            </li>
                            <li><Link to="/article/categories">Technology</Link></li>
                            <li><Link to="/article/categories">Features</Link></li>
                            <li><Link to="/article/categories">Business Leaders</Link></li>
                        </ul>
                    </li>
                    <li><a href="https://theafrican.store">Shop</a></li>
                    <li className="has-dropdown">
                        <a href="#">Contribute</a>
                        <ul className="submenu">
                            <li><Link to="/submit-contents">Submit your Content</Link></li>
                            <li><Link to="/donate">Donate to us</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-extra-features ml-auto">
                <form action="#" className="navbar-search">
                    <div className="search-field">
                        <input type="text" className="navbar-search-field" placeholder="Search Here..." />
                        <button className="navbar-search-btn" type="button"><i
                                className="fal fa-search"></i></button>
                    </div>
                    <a href="#" className="navbar-search-close"><i className="fal fa-times"></i></a>
                </form>
                <a href="#" className="nav-search-field-toggler" data-toggle="nav-search-feild"><i
                        className="far fa-search"></i></a>
            </div>
            <div className="main-nav-toggler d-block d-lg-none" id="main-nav-toggler">
                <div className="toggler-inner">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</nav>
        )
    }
}
