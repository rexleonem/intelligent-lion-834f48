import React, { Component } from 'react'

export default class Topnav extends Component {
    render() {
        return (
            <div className="header-top bg-grey-dark-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md">
                            <ul className="header-top-nav list-inline justify-content-center justify-content-md-start">
                                <li className="current-date">25 July, 2019</li>
                                <li><a href="#">Advertisement</a></li>
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-auto">
                            <ul className="ml-auto social-share header-top__social-share">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
