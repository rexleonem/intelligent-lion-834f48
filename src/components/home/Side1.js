import React, { Component } from 'react'

export default class Side1 extends Component {
    render() {
        return (
            <div className="col-xl-4 mb-6">
            <h6 className="text-purple mb-4">Most Read</h6>
            <ul className="simple-entry-list blog-post">
              <li>
                <div className="reveal-title">1</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><a href="blog-single-post.html">Aenean mattis tortor acsem sapien congue molestie.</a></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="reveal-title">2</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><a href="blog-single-post.html">Vestibulum ante ipsumnec primis orci faucibus luctus.</a></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="reveal-title">3</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><a href="blog-single-post.html">Sapien etiam eu odio vitae bibendum vitaenun lorem.</a></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="reveal-title">4</div>
                <div className="entry-content-wrapper">
                  <h2 className="entry-title"><a href="blog-single-post.html">Etiam eu odio sapien posuere vitae vitae lorem.</a></h2>
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="#">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
    )
    }
}
