import React, { Component } from 'react'
import MainSidebar from '../Global/MainSidebar'
// import Aboutimg from '../../images/about.png';
import { Link } from 'react-router-dom';


export default class Legal extends Component {
    render() {
        return (
            <div>

<div className="breadcrumb-wrapper">
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Legal </li>
                </ol>
            </nav>
        </div>
    </div>

    <section className="banner banner__default bg-grey-light-three">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="post-title-wrapper">
                        <h2 className="m-b-xs-0 axil-post-title hover-line">Legal Notice</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="axil-about-us section-gap-top p-b-xs-20">
        <div className="container">


            <div className="row">
                <div className="col-lg-8">
                    <h2 className="axil-title">The Professional Publishing Platform</h2>

                    <p>Aenean consectetur massa quis sem volutpat, a condimentum tortor pretium. Cras id ligula
                        consequat, sagittis nulla at, sollicitudin lorem. Orci varius natoque penatibus et magnis
                        dis parturient montes.</p>
                    <p>Cras id ligula consequat, sagittis nulla at, sollicitudin lorem. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eleifend, dolor
                        vel condimentum imperdiet. </p>

                    <p>In a professional context it often happens that private or corporate clients corder a
                        publication to be made and presented with the actual content still not being ready. Think of
                        a news blog that's filled with content hourly on the day of going live. However, reviewers
                        tend to be distracted by comprehensible content, say, a random text copied from a newspaper
                        or the internet. The are likely to focus on the text, disregarding the layout and its
                        elements.</p>

                    <h3 className="h4 m-t-lg-40">Our Growing News Network</h3>

                    <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally
                        the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere,
                        Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O
                        Catiline, will you abuse our patience? And for how long will that madness of yours mock us?)
                    </p>
                    <p>Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either
                        as pre-installed module or plug-in to be added. Word selection or sequence don't necessarily
                        match the original, which is intended to add variety.</p>

                    <h3 className="h4 m-t-lg-40">The Professional Publishing Platform</h3>

                    <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally
                        the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere,
                        Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O
                        Catiline, will you abuse our patience? And for how long will that madness of yours mock us?)
                    </p>
                    <p>Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either
                        as pre-installed module or plug-in to be added. Word selection or sequence don't necessarily
                        match the original, which is intended to add variety.</p>
                </div>

                    <MainSidebar />
            </div>
        </div>
    </div>
                </div>
        )
    }
}
