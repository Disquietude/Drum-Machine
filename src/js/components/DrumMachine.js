import React, { Component } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

import sounds from '../sounds';

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPlayed: ""
    };
    this.setLastPlayed = this.setLastPlayed.bind(this);
  }

  setLastPlayed(pad) {
    this.setState({
      lastPlayed: pad
    });
  }

  render() {
    const pads = sounds.map((current, index) => 
      <DrumPad 
        label={current.label}
        src={current.src}
        keybind={current.key}
        setLastPlayed={this.setLastPlayed}
        key={index}
      />
    )
    return (
      <div className='drum-machine' id='drum-machine'>
        <Display lastPlayed={this.state.lastPlayed}/>
        <div className='drum-machine__pad-container'>
          {pads}
        </div>
      </div>
    );
  }
}