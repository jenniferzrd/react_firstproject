import React, { Component } from 'react';

export default class Link extends Component {

    render() {
        return (
            <div>
               <a href={this.props.to}>Link</a>
            </div>
        )
    }
}