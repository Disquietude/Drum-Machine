import React from 'react';

const DrumPad = (props) => {
  let audioClip = React.createRef();

  let playClip = () => {
    audioClip.current.currentTime = 0;
    audioClip.current.play();
  }

  let handleKeyPress = (event) => {
    if (event.key.toUpperCase() === props.keybind) {
      playClip();
      console.log('Pad ' + event.key.toUpperCase());
    }
  }

  document.addEventListener('keypress', handleKeyPress);
  
  return (
    <div 
      className='drum-pad'
      id={props.label} 
      onClick={playClip}
    >
      {props.keybind}
      <audio 
        className='clip' 
        id={props.keybind} 
        src={props.src}
        ref={audioClip}
      />
    </div>
  );
};

export default DrumPad;