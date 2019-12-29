import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Contact extends Component {
    render() {
        return (
            <div>

<div className="breadcrumb-wrapper">
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
        </nav>
    </div>
</div>

<section className="banner banner__default bg-grey-light-three">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="post-title-wrapper">
                    <h2 className="m-b-xs-0 axil-post-title hover-line">Contact Us</h2>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="axil-about-us section-gap  section-gap-top__with-text">
    <div className="container">

        <div className="section-title d-block text-center">
            <h2 className="axil-title m-b-xs-20">Meet Our Publishing Authors</h2>
            <p>Wherever & whenever you need us. We are here for you - contact us for all your support needs,
                <br />be it technical, general queries or information support.</p>
        </div>

        <figure className="m-b-xs-30 p-t-xs-10">
            <img src="assets/images/contact-banner.jpg" alt="contact banner" className="img-fluid mx-auto" />
        </figure>
    </div>
</div>

<section className="contact-form section-gap bg-grey-light-three ">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-7">
                <div className="axil-contact-form-block m-b-xs-30">
                    <div className="section-title d-block">
                        <h2 className="h3 axil-title m-b-xs-20">
                            Send Us a Message
                        </h2>
                        <p>Your email address will not be published.
                            All the fields are required.
                        </p>
                    </div>

                    <div className="axil-contact-form-wrapper p-t-xs-10">
                        <form className="axil-contact-form row no-gutters">

                            <div className="form-group col-12">
                                <label for="contact-name">Name</label>
                                <input type="text" name="contact-name" id="contact-name" />
                            </div>

                            <div className="form-group col-12">
                                <label for="contact-phone">Phone</label>
                                <input type="text" name="contact-phone" id="contact-phone"/>
                            </div>

                            <div className="form-group col-12">
                                <label for="contact-email">Email</label>
                                <input type="email" name="contact-email" id="contact-email"/>
                            </div>

                            <div className="form-group col-12">
                                <label for="contact-message">Message</label>
                                <textarea name="contact-message" id="contact-message"></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary m-t-xs-0 m-t-lg-20">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="axil-contact-info-wrapper p-l-md-45 m-b-xs-30">
                    <div className="axil-contact-info-inner">
                        <h2 className="h4 m-b-xs-10">
                            Contact Information
                        </h2>
                        <div className="axil-contact-info">
                            <address className="address">
                                <p className="mid m-b-xs-30">Theodore Lowe, Ap #867-859<br />Sit Rd, Azusa New
                                    York</p>

                                <div className="h5 m-b-xs-10">We're Available 24/ 7. Call Now.</div>
                                <div>
                                    <a className="tel" href="tel:8884562790"><i className="fas fa-phone"></i>(888)
                                        456-2790</a>
                                </div>
                                <div>
                                    <a className="tel" href="tel:12125553333"><i className="fas fa-fax"></i>(121)
                                        255-53333</a>
                                </div>
                            </address>

                            <div className="contact-social-share m-t-xs-30">
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
</section>
<section className="section-gap our-location section-gap-top__with-text">
    <div className="container">
        <div className="section-title">
            <h2 className="axil-title m-b-xs-40">
                Our Location
            </h2>
        </div>

        <div className="axil-map-wrapper m-b-xs-30">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d848618.3019582209!2d-117.3496119!3d33.8145003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64ed3c3ce8f%3A0x8710c5557f723e2a!2s106+W+1st+St%2C+Los+Angeles%2C+CA+90012%2C+USA!5e0!3m2!1sen!2sbd!4v1563866499894!5m2!1sen!2sbd"
                width="600" height="450" allowfullscreen></iframe>
        </div>
    </div>
</section>
            </div>
        )
    }
}
