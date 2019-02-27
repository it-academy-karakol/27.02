import React from 'react';
import './Drawer.css';

function Drawer(props) {
  const stateClass = props.open
    ? 'open' : 'close';

  return (
    <div className={"Drawer " + stateClass}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Content</li>
      </ul>
    </div>
  );
}

export default Drawer;