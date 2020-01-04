import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactBg from '../../images/contact-bg.jpg';
import { Helmet } from 'react-helmet'

const TITLE = "Africa's Very Own - Contact Us"
export default class Contact extends Component {
    render() {
        return (
            <div>
            <Helmet>
            <title>{ TITLE }</title>
            </Helmet>
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
            <h2 className="axil-title m-b-xs-20">Get in Touch With Us</h2>
            <p>Drop us a line anytime if you have any questions, suggestions,
                <br />contributions or you want to work with us.</p>
        </div>

        <figure className="m-b-xs-30 p-t-xs-10">
            <img src={ContactBg} alt="contact banner" className="img-fluid mx-auto" />
            <p>Image by <a href="https://pixabay.com/users/Agnali-3087927/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1732247">Juanita Mulder</a></p>
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
                                <p className="mid m-b-xs-30">7 Kafi Street Alausa<br />Ikeja, Lagos
                                    NG</p>

                                <div className="h5 m-b-xs-10">Call Or Chat on WhatsApp.</div>
                                <div>
                                    <a className="tel" href="tel:2348066230476"><i className="fas fa-phone"></i>+234 806 623 0476</a>
                                </div>
                            </address>

                            <div className="contact-social-share m-t-xs-30">
                                <div className="axil-social-title h5">Follow Us</div>
                                <ul className="social-share social-share__with-bg">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.099534051871!2d3.357932456432613!3d6.612728835110055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ca4f7213f9%3A0x6e2fc2c32f8643a4!2s7%20Kafi%20St%2C%20Oregun%5C%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1577836066785!5m2!1sen!2sng"
                width="600" height="450" allowfullscreen></iframe>
        </div>
    </div>
</section>
            </div>
        )
    }
}
