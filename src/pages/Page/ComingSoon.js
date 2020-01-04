import React, { Component } from 'react'

export default class ComingSoon extends Component {
    render() {
        return (
<div className="under-construction-banner">
<div className="container">
    <div className="row">
        <div className="col-xl-5">
            <div className="under-construction-inner-content">
                <div className="brand-logo-container">
                </div>
                <div className="axil-title">
                    <h1 className="h1 m-0">We're working on this
                        <br /> part of Our Website</h1>
                </div>
                <div className="newsletter-content">
                    <div className="text-left">
                        <h2 className="h5 m-b-xs-10">Are You Interested?</h2>
                        <p className="m-b-xs-20">Be the first to know when we launch.
                            <br />Sign up for this website updates using the form below.</p>
                    </div>
                    <div className="subscription-form-wrapper">
                        <form action="#" className="subscription-form row no-gutters">
                            <div className="form-group m-b-xs-20 col-auto">
                                <label for="subscription-email">Enter Email Address</label>
                                <input type="text" name="subscription-email" id="subscription-email" />
                            </div>
                            <div className="m-b-xs-0 col-auto">
                                <button className="btn btn-primary">SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-social-share m-t-xs-20">
                        <div className="axil-social-title h5">Follow Us</div>
                        <ul className="social-share social-share__with-bg">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        )
    }
}
