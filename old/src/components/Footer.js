import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer bg-dark all-text-white">
            <div className="footer-top-area pt-8 pb-3">
              <div className="container">
                <div className="row large-gutters">
                  <div className="col-lg-3 mb-4">
                    <h6 className="mb-3">About Us</h6>
                    <p>We're passionate about Africa and the African Heritage. Our Goal at Africa's Very Own is to share our own African story and the beauty of a place we call Home.</p>
                  </div>
                  <div className="col-lg-3 mb-4">
                    <h6 className="mb-3">Contact</h6>
                    <p>7 Kafi Street, Alausa Ikeja, Lagos Nigeria <br /><Link to="mailto:afrikasveryown@gmail.com" className="__cf_email__">afrikasveryown@gmail.com</Link><br/> +234 813 279 3416</p>
                    <ul className="list-inline m-0 p-0">
                      <li className="list-inline-item"><a href="https://instagram.com/deeafrikan"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                      <li className="list-inline-item"><a href="https://twitter.com/deeafrikan"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                      <li className="list-inline-item"><Link to="/maintenance"><i className="fab fa-youtube" aria-hidden="true"></i></Link></li>
                      <li className="list-inline-item"><Link to="/maintenance"><i className="fab fa-pinterest" aria-hidden="true"></i></Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 mb-4">
                    <h6 className="mb-3">Article Categories</h6>
                    <ul>
                      <li><Link to="/maintenance">Culture</Link></li>
                      <li><Link to="/maintenance">Creativity</Link></li>
                      <li><Link to="/maintenance">Innovation</Link></li>
                      <li><Link to="/maintenance">Business</Link></li>
                      <li><Link to="/maintenance">Entertainment</Link></li>
                      <li><Link to="/maintenance">Lifestyle</Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 mb-4">
                    <h6 className="mb-3">Top Products</h6>
                    <ul>
                      <li><Link to="/maintenance">Accessories</Link></li>
                      <li><Link to="/maintenance">Artifacts</Link></li>
                      <li><Link to="/maintenance">Tutorials</Link></li>
                      <li><Link to="/maintenance">Tech</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-area py-4">
              <div className="container py-2">
                <div className="row large-gutters">
                  <div className="col-md-6">
                    <div className="footer-widget">
                      <p className="m-md-0">© 2019 NaijaUp Entertainment. A <a href="https://leonem.tech" target="_blank" rel="noopener noreferrer">Leonem</a> Project</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-widget">
                      <ul className="list-inline m-0 p-0 text-md-right footer-nav">
                        <li className="list-inline-item mb-0"><Link to="/maintenance">Privacy Policy</Link></li>
                        <li className="list-inline-item mb-0"><Link to="/maintenance">Terms &amp; Conditions</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>        )
    }
}
