import React, { Component } from 'react';
import Link from './Link.js';

export default class Nav extends Component {

    render() {
        return (
            <div>
                <Link to="main"/>
                <Link to="gallery"/>
                <Link to="contact"/>
            </div>
        )
    }
}