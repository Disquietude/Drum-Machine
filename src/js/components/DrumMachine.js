import React, { Component } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className='drum-machine' id='drum-machine'>
        <Display />
      </div>
    );
  }
}