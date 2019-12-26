import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
<nav className="navbar bg-white">
    <div className="container">
        <div className="navbar-inner">
            <div className="brand-logo-container">
                <a href="index-2.html">
                    <img src="assets/images/logo-black.svg" alt="" className="brand-logo" />
                </a>
            </div>
            <div className="main-nav-wrapper">
                <ul className="main-navigation list-inline" id="main-menu">
                    <li className="has-dropdown">
                        <a href="#">Home</a>
                        <ul className="submenu">
                            <li><a href="index-2.html">Home One</a></li>
                            <li><a href="home-2.html">Home Two</a></li>
                            <li><a href="home-3.html">Home Three</a></li>
                            <li><a href="home-4.html">Home Four</a></li>
                            <li><a href="home-5.html">Home Five</a></li>
                        </ul>
                    </li>
                    <li className="has-dropdown">
                        <a href="#">Posts</a>
                        <ul className="submenu">
                            <li className="has-dropdown">
                                <a href="#">Post Layout</a>
                                <ul className="submenu">
                                    <li><a href="post-layout-one.html">Post Layout 1</a></li>
                                    <li><a href="post-layout-two.html">Post Layout 2</a></li>
                                    <li><a href="post-layout-three.html">Post Layout 3</a></li>
                                    <li><a href="post-layout-four.html">Post Layout 4</a></li>
                                    <li><a href="post-layout-five.html">Post Layout 5</a></li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="#">Post Format</a>
                                <ul className="submenu">
                                    <li><a href="post-format-standard.html">Post Format Standard</a>
                                    </li>
                                    <li><a href="post-format-video.html">Post Format Video</a></li>
                                    <li><a href="post-format-audio.html">Post Format Audio</a></li>
                                    <li><a href="post-format-gallery.html">Post Format Gallery</a></li>
                                    <li><a href="post-format-quote.html">Post Format Quote</a></li>
                                    <li><a href="post-format-text-only.html">Post Format Text Only</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="business.html">Business</a></li>
                    <li><a href="lifestyle.html">Lifestyle</a></li>
                    <li><a href="technology.html">Technology</a></li>
                    <li><a href="sports.html">Sports</a></li>
                    <li className="has-dropdown">
                        <a href="#">Pages</a>
                        <ul className="submenu">
                            <li><a href="author.html">Author</a></li>
                            <li><a href="error-404.html">404 Error</a></li>
                            <li><a href="under-construction.html">Coming Soon</a></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
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
                <a href="#" className="side-nav-toggler" id="side-nav-toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
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
