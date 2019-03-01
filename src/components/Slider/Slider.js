import React from 'react';
import './Slider.css';

function Slider(props) {
  if (props.position < +props.min) {
    props.changePosition(props.min);
  }
  if (props.position > +props.max) {
    props.changePosition(props.max);
  }

  const dotMouseDown = event => {
    event.preventDefault();

    const dot = event.target;
    const slider = event.target.parentElement;

    let leftPaddingX = event.clientX
      - dot.getBoundingClientRect().left;
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  
    function onMouseMove(event) {
      let left = event.clientX
        - leftPaddingX
        - slider.getBoundingClientRect().left;
        
      const max = +props.max - +props.min;
      let position = left / slider.offsetWidth * max;

      if (left < 0) {
        left = -5;
        position = 0;
      }
  
      const right = slider.offsetWidth - dot.offsetWidth;
      if (left > right) {
        left = right + 5;
        position = max;
      }

      const value = +props.min;
      props.changePosition(value + +position);
  
      dot.style.left = left + 'px';
    }

    function onMouseUp(event) {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  const style = {}
  if (props.color) {
    style.backgroundColor = props.color;
  }

  return (
    <div className="Slider">
      <div className="dot" style={style} onMouseDown={dotMouseDown}>
        {props.position}
      </div>
    </div>
  );
}

export default Slider;