import React, { Component } from 'react'

export default class Popup extends Component {
    render() {
        return (
<div className="subscribe-popup">
<div className="subscribe-popup-inner">
    <div className="close-popup">
        <i className="fal fa-times"></i>
    </div>
    <div className="row no-gutters">
        <div className="col-lg-6">
            <div className="img-container">
                <img src="assets/images/subscribe-popup-img.jpg" alt="subscribe img" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="newsletter-widget weekly-newsletter bg-grey-light-three">
                <div className="newsletter-content">
                    <div className="newsletter-icon">
                        <i className="feather icon-send"></i>
                    </div>
                    <div className="section-title">
                        <h3 className="axil-title">Subscribe To Our Weekly Newsletter</h3>
                        <p className="mid m-t-xs-10 m-b-xs-20">No spam, notifications only about new
                            products,
                            updates.</p>
                    </div>
                    <div className="subscription-form-wrapper">
                        <form action="#" className="subscription-form">
                            <div className="form-group form-group-small m-b-xs-20">
                                <label for="subscription-email">Enter Email Address</label>
                                <input type="text" name="subscription-email" id="subscription-email"/>
                            </div>
                            <div className="m-b-xs-0">
                                <button className="btn btn-primary btn-small">SUBSCRIBE</button>
                            </div>
                        </form>
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
