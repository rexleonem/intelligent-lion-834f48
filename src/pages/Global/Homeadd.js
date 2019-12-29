import React, { Component } from 'react'
import ClientBanner from '../../images/clientbanner/clientbanner.jpg';
export default class Homeadd extends Component {
    render() {
        return (
            <div className="add-container m-b-xs-60">
                <a href="#"><img src={{ClientBanner}} alt="add one"
                        className="img-fluid" /></a>
            </div>
        )
    }
}
