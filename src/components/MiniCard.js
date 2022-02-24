import React from 'react';

function MiniCard(props) {
  return (
    <div>
      <div className='mini-card'>
        <img src={props.img} height='80%' alt='' />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default MiniCard;
