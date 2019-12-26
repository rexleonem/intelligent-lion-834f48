import React, { Component } from 'react'
import Sidenav from '../Global/Sidenav'
import Popup from '../Global/Popup'
import Header from '../Global/Header'
import Recent from './Recent'
import Top from './Top'
import Trending from './Trending'
import Videos from './Videos'
import MainContents from './Main'
import Others from './Others'

export default class Home extends Component {
    render() {
        return (
            <div class="main-content">
            {/* <Popup /> */}
                <Sidenav />
                <Header />
                <Recent />
                <Top />
                <Trending />
                <Videos />
                <MainContents />
                <Others />
            </div>
        )
    }
}
