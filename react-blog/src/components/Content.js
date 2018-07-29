import React, { Component } from 'react';
import logo from '../logo.svg';
import Item from './Item.js';

const mockData = [
    {
        path: logo,
        name: 'erable'
    },
    {
        path: logo,
        name: 'erable'
    },
    {
        path: logo,
        name: 'erable'
    }
];

export default class Content extends Component {

    componentDidMount() {
// apres le render il s'execute
    }

    componentWillUpdate() {

    }

    parentReceiver(value) {
        console.log(value);
    }

    customFunction() {
        console.log("test");
    }
    render() {
        return (
            <div>
                {
                    mockData.map( (img, i) =>
                <Item childSignal={this.parentReceiver} path={img.path} name={img.name} key={i}/>

            )
            }
            <button onClick={this.customFunction}>custom</button>
            </div>
        )
    }
}