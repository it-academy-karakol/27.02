import React from 'react';
import './Toolbar.css';

function Toolbar(props) {
  return (
    <div className='Toolbar'>
      <a className="toggle" href="#">X</a>
      Logo
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Content</li>
      </ul>
    </div>
  );
}

export default Toolbar;