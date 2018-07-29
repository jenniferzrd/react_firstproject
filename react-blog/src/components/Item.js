import React, { Component } from 'react';

export default class Item extends Component {

    triggerChildSignal = () => {
        this.props.childSignal('Valeur qlqconque');
    }

    render() {
        return (
            <div className="item">
               <img src={this.props.path}/>
               <h1 onClick={this.triggerChildSignal}> {this.props.name} </h1>
            </div>
        )
    }
}