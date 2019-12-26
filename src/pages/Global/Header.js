import React, { Component } from 'react'
import Topnav from './Topnav'
import Navbar from './Navbar'

export default class Header extends Component {
    render() {
        return (
            <header className="page-header">
                <Topnav />
                <Navbar />
            </header>
        )
    }
}
