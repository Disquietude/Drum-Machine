import React, { Component } from 'react';

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.audioClip = React.createRef();
    this.pad = React.createRef();
    this.playClip = this.playClip.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playClip() {
    this.props.setLastPlayed(this.props.label);
    this.audioClip.current.currentTime = 0;
    this.audioClip.current.play();
    this.pad.current.className = "drum-pad active";
    setTimeout(() => {
      this.pad.current.className = "drum-pad";
    }, 200);
  }

  handleKeyPress(event) {
    event.preventDefault();
    if (event.key.toUpperCase() === this.props.keybind) {
      this.playClip();
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    return (
      <div 
        className='drum-pad'
        id={this.props.label} 
        onClick={this.playClip}
        ref={this.pad}
      >
      {this.props.keybind}
      <audio 
        className='clip' 
        id={this.props.keybind} 
        src={this.props.src}
        ref={this.audioClip}
      />
    </div>
    );
  }
}