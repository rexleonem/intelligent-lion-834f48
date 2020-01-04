import React, { Component } from 'react'
import MainSidebar from '../Global/MainSidebar'
import Aboutimg from '../../images/about.png';
import { Link } from 'react-router-dom';


export default class Collaborate extends Component {
    render() {
        return (
            <div>

<div className="breadcrumb-wrapper">
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Collaborate </li>
                </ol>
            </nav>
        </div>
    </div>

    <section className="banner banner__default bg-grey-light-three">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="post-title-wrapper">
                        <h2 className="m-b-xs-0 axil-post-title hover-line">Collaborate With Us</h2>
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
                    <h2 className="axil-title">Let's join hands together</h2>

                    <p>There's always need for innovation and creativity and nobody is self sufficient. Let's bring our passion, talents, skills, ideas and resources together to create something great.</p>

                    <h3 className="h4 m-t-lg-40">How to Collaborate</h3>

                    <p>Collaboration Form</p>
                </div>

                    <MainSidebar />
            </div>
        </div>
    </div>
                </div>
        )
    }
}
