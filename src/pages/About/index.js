import React, { Component } from 'react'
import MainSidebar from '../Global/MainSidebar'
import Aboutimg from '../../images/about-img.jpg';
import { Helmet } from 'react-helmet'

const TITLE = "Africa's Very Own - About Us"
export default class About extends Component {
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
                    <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </nav>
        </div>
    </div>

    <section className="banner banner__default bg-grey-light-three">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="post-title-wrapper">
                        <h2 className="m-b-xs-0 axil-post-title hover-line">About Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="axil-about-us section-gap-top p-b-xs-20">
        <div className="container">

            <figure className="m-b-xs-40">
                <img src={Aboutimg} alt="about us" className="img-fluid mx-auto" />
            </figure>

            <div className="row">
                <div className="col-lg-8">
                    <h2 className="axil-title">We bridge the gap</h2>

                    <p>Sometimes, the media does not portray Africa properly. There’s a distorted view of our diverse cultures, traditions, values and all that we stand for. We at Africa’s Very Own are here to bridge the gap. We are here to tell the African story the way it should be told.</p>
                </div>

                    <MainSidebar />
            </div>
        </div>
    </div>
                </div>
        )
    }
}
