import React, { Component } from 'react'
import MainSidebar from '../Global/MainSidebar'
import Aboutimg from '../../images/about.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const TITLE = "Africa's Very Own - Donate to us"
export default class Donate extends Component {
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
                    <li className="breadcrumb-item active" aria-current="page">Donate</li>
                </ol>
            </nav>
        </div>
    </div>

    <section className="banner banner__default bg-grey-light-three">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="post-title-wrapper">
                        <h2 className="m-b-xs-0 axil-post-title hover-line">Donate To Us</h2>
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
                    <h2 className="axil-title">Nothing is too much, and nothing is too little.</h2>

                    <p>As a startup, your donations will go a long way in helping us run our day-to-day activities, we appreciate anything you give us and we will make sure to always give you the best experience.</p>

                    <h3 className="h4 m-t-lg-40">Make donations onlinee</h3>

                    <p>Click here for card donations</p>
                    <p>Bitcoin and Ethereum wallet</p>
                    <p>Make offline donations</p>
                </div>

                    <MainSidebar />
            </div>
        </div>
    </div>
                </div>
        )
    }
}
