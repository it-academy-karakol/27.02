import React from 'react';
import './Backdrop.css';

function Backdrop(props) {
  const stateClass = props.open
    ? 'open' : 'close';

  return (
    <div className={"Backdrop " + stateClass}
      onClick={props.toggleHandler}>
    </div>
  );
}

export default Backdrop;