import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Header extends Component {

    render() {
        return (
            <div>
                <img src={logo}/>
            </div>
        )
    }
}
