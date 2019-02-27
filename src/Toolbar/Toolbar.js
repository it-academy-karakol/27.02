import React from 'react';
import './Toolbar.css';
import Drawer from './Drawer/Drawer';
import Backdrop from './Backdrop/Backdrop';

function Toolbar(props) {
  return (
    <div className='Toolbar'>
      <button className="toggle"
        onClick={props.toggleHandler}>X</button>
      Logo
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Content</li>
      </ul>

      <Drawer open={props.drawerOpen} />
      <Backdrop open={props.drawerOpen}
        toggleHandler={props.toggleHandler} />
    </div>
  );
}

export default Toolbar;