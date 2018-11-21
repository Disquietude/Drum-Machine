import React from 'react';

const DrumPad = (props) => (
  <div className='drum-pad'>
    <audio className='clip' id={props.keybind} src={props.src}/>
  </div>
);

export default DrumPad;