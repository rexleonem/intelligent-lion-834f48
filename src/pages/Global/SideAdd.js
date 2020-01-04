import React, { Component } from 'react'
import ClientBanner from '../../images/tas-add.png';
export default class SideAdd extends Component {
    render() {
        return (
            <div className="add-block-widget m-b-xs-40">
            <a href="https://theafrican.store"><img src={ClientBanner} alt="sidebar add"
                    className="img-fluid" /></a>
        </div>
            )
    }
}
