import React from 'react';

const Display = (props) => (
  <div className='display' id='display'>
    {props.lastPlayed}
  </div>
);

export default Display;