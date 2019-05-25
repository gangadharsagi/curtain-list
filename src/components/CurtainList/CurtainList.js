import React, { Component } from 'react';
import { Grid } from '../Grid';
import { getDraggedPositionHelper } from '../../helpers/getDraggedPositionHelper';
import './curtain-list.css';
import drawer from '../../assets/icons/drawer.png';

const closeDragElement = () => {
  document.onmouseup = null;
  document.onmousemove = null;
};

export class CurtainList extends Component {
  componentDidMount() {
    this.dragElement(document.getElementById("myDiv"));
  }

  dragElement(element) {
    const dragMouseDown = (e) => {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = getDraggedPositionHelper(element, pos2) + "px";
    };

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const dragElementHeader =
      document.getElementById(element.id + "header");

    if (dragElementHeader) {
      dragElementHeader.onmousedown = dragMouseDown;
    }
    else {
      element.onmousedown = dragMouseDown;
    }
  };

  render() {
    return (
      <div className="app">
        <div className='container'>
          <div id="myDiv">
            <article>
              <h1>
                3x2 Grid Layout image gallery example
              </h1>
              <section>
                <Grid />
              </section>
            </article>
            <div id="myDivHeader">
              <img alt='drawer' src={drawer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



