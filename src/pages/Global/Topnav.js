import React, { Component } from 'react';
import { Link } from "react-router-dom";

var dt = new Date();
var DD = ("0" + dt.getDate()).slice(-2);

var MM = ("0" + (dt.getMonth() + 1)).slice(-2);

var YYYY = dt.getFullYear();

var hh = ("0" + dt.getHours()).slice(-2);

var mm = ("0" + dt.getMinutes()).slice(-2);

var months = [
    " ", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
var date_string = months[`${MM}`] + " " + DD + ", " + YYYY + "  " + hh + ":" + mm;
export default class Topnav extends Component {
    render() {
        return (
            <div className="header-top bg-grey-dark-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md">
                            <ul className="header-top-nav list-inline justify-content-center justify-content-md-start">
        <li className="current-date">{`${date_string}`}</li>
                                <li><Link to="/advertise">Advertisement</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
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
