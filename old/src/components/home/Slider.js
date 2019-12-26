import React, { Component } from 'react'
import logo from '../../images/logo.png'
import Slider1 from '../../images/home-1/1.jpg'
import Slider2 from '../../images/home-1/2.jpg'
import Slider3 from '../../images/home-1/3.jpg'
import Slider4 from '../../images/home-1/4.jpg'

export default class Slider extends Component {
    render() {
        return (
            <div className="container">
            <div className="slider-call blog-post blog-slider blog-post tahreer-slider-one mt-5 mt-md-6 mb-6" data-slick="{&quot;slidesToShow&quot;: 1, infinite&quot;:false,&quot; arrows&quot;:true,&quot;dots&quot;:true">
              <article>
                <div className="entry-media"><img src={Slider1} alt="Entry Image"/></div>
                <div className="entry-content-wrapper">
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span><span className="entry-meta-date"> <i className="far fa-clock"></i>April 13, 2020</span>
                  </div>
                  <h2 className="entry-title"><a href="blog-single-post.html">Raise your design from the dead with army of Ipsum</a></h2>
                  <div className="entry-content">
                    <p>Suspendisse viverra massam eget nibhe ultricies mollis. Donec sed lorem tincidunt, ultrices, euismod sem. Mauris nec tincidunt diam consectetur.</p>
                  </div>
                </div>
              </article>
              <article>
                <div className="entry-media"><img src={Slider2} alt="Entry Image"/></div>
                <div className="entry-content-wrapper">
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span><span className="entry-meta-date"> <i className="far fa-clock"></i>April 13, 2020</span>
                  </div>
                  <h2 className="entry-title"><a href="blog-single-post.html">The classic latin passage that just never gets old</a></h2>
                  <div className="entry-content">
                    <p>Suspendisse viverra massam eget nibhe ultricies mollis. Donec sed lorem tincidunt, ultrices, euismod sem. Mauris nec tincidunt diam consectetur.</p>
                  </div>
                </div>
              </article>
              <article>
                <div className="entry-media"><img src={Slider3} alt="Entry Image"/></div>
                <div className="entry-content-wrapper">
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span><span className="entry-meta-date"> <i className="far fa-clock"></i>April 13, 2020</span>
                  </div>
                  <h2 className="entry-title"><a href="blog-single-post.html">Aenean mattis tortor sapien ac congue molestie</a></h2>
                  <div className="entry-content">
                    <p>Suspendisse viverra massam eget nibhe ultricies mollis. Donec sed lorem tincidunt, ultrices, euismod sem. Mauris nec tincidunt diam consectetur.</p>
                  </div>
                </div>
              </article>
              <article>
                <div className="entry-media"><img src={Slider4} alt="Entry Image"/></div>
                <div className="entry-content-wrapper">
                  <div className="entry-meta-top"><span className="entry-meta-category"><i className="far fa-folder"></i><a href="blog-three-col.html">Photography</a></span><span className="entry-author"><i className="far fa-user"></i>Dee Afrikan</span><span className="entry-meta-date"> <i className="far fa-clock"></i>April 13, 2020</span>
                  </div>
                  <h2 className="entry-title"><a href="blog-single-post.html">Aenean mattis tortor sapien ac congue molestie</a></h2>
                  <div className="entry-content">
                    <p>Suspendisse viverra massam eget nibhe ultricies mollis. Donec sed lorem tincidunt, ultrices, euismod sem. Mauris nec tincidunt diam consectetur.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
         )
    }
}
