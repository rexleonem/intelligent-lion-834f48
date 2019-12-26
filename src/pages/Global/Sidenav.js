import React, { Component } from 'react'

export default class Sidenav extends Component {
    render() {
        return (
            <div className="side-nav">
			<div className="side-nav-inner nicescroll-container">
				<form action="#" className="side-nav-search-form">
					<div className="form-group search-field">
						<input type="text" className="search-field" name="search-field" placeholder="Search..." />
						<button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
					</div>
				</form>
				<div className="side-nav-content">
					<div className="row ">
						<div className="col-lg-6">
							<ul className="main-navigation side-navigation list-inline flex-column">
								<li><a href="business.html">Business</a></li>
								<li><a href="lifestyle.html">Lifestyle</a></li>
								<li><a href="technology.html">Technology</a></li>
								<li><a href="sports.html">Sports</a></li>
							</ul>
						</div>
						<div className="col-lg-6">
							<div className="axil-contact-info-inner">
								<h5 className="h5 m-b-xs-10">
									Contact Information
								</h5>
								<div className="axil-contact-info">
									<address className="address">
										<p className="m-b-xs-30  mid grey-dark-three ">Theodore Lowe, Ap
											#867-859<br />Sit Rd, Azusa New York</p>
										<div className="h5 m-b-xs-5">We're Available 24/ 7. Call Now.</div>
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
			<div className="close-sidenav" id="close-sidenav">
				<div></div>
				<div></div>
			</div>
		</div>
        )
    }
}
