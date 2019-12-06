import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer  className="site-footer bg-dark all-text-white">
            <div  className="footer-top-area pt-8 pb-3">
              <div  className="container">
                <div  className="row large-gutters">
                  <div  className="col-lg-3 mb-4">
                    <h6  className="mb-3">About Us</h6>
                    <p>We're passionate about Africa and the African Heritage. Our Goal at Africa's Very Own is to share our own African story and the beauty of a place we call Home.</p>
                  </div>
                  <div  className="col-lg-3 mb-4">
                    <h6  className="mb-3">Contact</h6>
                    <p>7 Kafi Street, Alausa Ikeja, Lagos Nigeria <br /><a href="mailto:afrikasveryown@gmail.com"  className="__cf_email__">afrikasveryown@gmail.com</a><br/> +234 813 279 3416</p>
                    <ul  className="list-inline m-0 p-0">
                      <li  className="list-inline-item"><a href="https://instagram.com/deeafrikan"><i  className="fab fa-instagram" aria-hidden="true"></i></a></li>
                      <li  className="list-inline-item"><a href="https://twitter.com/deeafrikan"><i  className="fab fa-twitter" aria-hidden="true"></i></a></li>
                      <li  className="list-inline-item"><a href="#"><i  className="fab fa-youtube" aria-hidden="true"></i></a></li>
                      <li  className="list-inline-item"><a href="#"><i  className="fab fa-pinterest" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                  <div  className="col-lg-3 mb-4">
                    <h6  className="mb-3">Article Categories</h6>
                    <ul>
                      <li><a href="#">Culture</a></li>
                      <li><a href="#">Creativity</a></li>
                      <li><a href="#">Innovation</a></li>
                      <li><a href="#">Business</a></li>
                      <li><a href="#">Entertainment</a></li>
                      <li><a href="#">Lifestyle</a></li>
                    </ul>
                  </div>
                  <div  className="col-lg-3 mb-4">
                    <h6  className="mb-3">Top Products</h6>
                    <ul>
                      <li><a href="#">Accessories</a></li>
                      <li><a href="#">Artifacts</a></li>
                      <li><a href="#">Tutorials</a></li>
                      <li><a href="#">Tech</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div  className="footer-bottom-area py-4">
              <div  className="container py-2">
                <div  className="row large-gutters">
                  <div  className="col-md-6">
                    <div  className="footer-widget">
                      <p  className="m-md-0">© 2019 NaijaUp Entertainment. A <a href="https://leonem.tech" target="_blank">Leonem</a> Project</p>
                    </div>
                  </div>
                  <div  className="col-md-6">
                    <div  className="footer-widget">
                      <ul  className="list-inline m-0 p-0 text-md-right footer-nav">
                        <li  className="list-inline-item mb-0"><a href="https://www.facebook.com/energeticthemes">Privacy Policy</a></li>
                        <li  className="list-inline-item mb-0"><a href="https://instagram.com/deeafrikan">Terms & Conditions</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>        )
    }
}
