import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
<footer className="page-footer bg-grey-dark-key">
<div className="container">
    <div className="footer-top">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                    <h2 className="footer-widget-title">
                        Culture
                    </h2>
                    <ul className="footer-nav">
                        <li><Link to="/artticle/categories">History</Link></li>
                        <li><Link to="/artticle/categories">Documentry</Link></li>
                        <li><Link to="/artticle/categories">Events</Link></li>
                        <li><Link to="/artticle/categories">Tourism</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                    <h2 className="footer-widget-title">
                        Lifestyle
                    </h2>
                    <ul className="footer-nav">
                        <li><Link to="/artticle/categories">Food</Link></li>
                        <li><Link to="/artticle/categories">Style</Link></li>
                        <li><Link to="/artticle/categories">Crafts</Link></li>
                        <li><Link to="/artticle/categories">Art</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                    <h2 className="footer-widget-title">
                        Entertainment
                    </h2>
                    <ul className="footer-nav">
                        <li><Link to="/videos">Videos</Link></li>
                        <li><Link to="/audio">Audio</Link></li>
                        <li><Link to="/artticle/categories">Fashion </Link></li>
                        <li><Link to="/artticle/categories">General Entertainment</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                    <h2 className="footer-widget-title">
                        Business
                    </h2>
                    <ul className="footer-nav">
                        <li><Link to="/artticle/categories">Markets</Link></li>
                        <li><Link to="/artticle/categories">Technology</Link></li>
                        <li><Link to="/artticle/categories">Features</Link></li>
                        <li><Link to="/artticle/categories">Business Leaders</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                    <h2 className="footer-widget-title">
                        Partners
                    </h2>
                    <ul className="footer-nav">
                        <li><a href="https://naijaup.com">NaijaUp Entertainment</a></li>
                        <li><a href="https://theafrican.store">The African Store</a></li>
                        <li><a href="https://mamediang.com">MA Media</a></li>
                        <li><a href="http://dorjafrica.co ">Dorja Africa</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <div className="footer-widget">
                    <h2 className="footer-widget-title">
                        About
                    </h2>
                    <ul className="footer-nav">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/submit-contents">Submit Your Contents</Link></li>
                        <li><Link to="/donate">Donate To Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-mid">
        <div className="row align-items-center">
            <div className="col-md">
                <div className="footer-logo-container">
                    <a href="index-2.html">
                        <img src="assets/images/logo-white.png" alt="footer logo" className="footer-logo" />
                    </a>
                </div>
            </div>
            <div className="col-md-auto">
                <div className="footer-social-share-wrapper">
                    <div className="footer-social-share">
                        <div className="axil-social-title">Find us here</div>
                        <ul className="social-share social-share__with-bg">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <ul className="footer-bottom-links">
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/legal">Legal Notice</Link></li>
            <li><Link to="/collaborate">Work with Us</Link></li>
            <li><Link to="/advertise">Advertise with us</Link></li>
            <li><Link to="/submit">Submit Your Contents</Link></li>
            <li><Link to="/donate">Donate to Us</Link></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="https://theafrican.store">The African Store</a></li>
            <li><a href="#">Sitemap</a></li>
        </ul>
        <p className="axil-copyright-txt">
            © NaijaUp Entertainment 2019. All rights reserved. Made by &nbsp; <a href="https://leonem.tech">Leonem</a>.
        </p>
    </div>
</div>
</footer>
        )
    }
}
