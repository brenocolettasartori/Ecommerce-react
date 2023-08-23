import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {

  constructor(){
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount(){
  this.MegaMenu();
  }

  MegaMenu() {
    var acc = document.getElementsByClassName("accordion");
    var accNumber = acc.length;
    //alert(accNumber);
    var i;
    for(i = 0; i < accNumber; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }


  render() {
    return (
      <Fragment>
        <div className="accordionMenuDiv">
          <div className="accordionMenuDivInside">
            <button className="accordion">
              <img src="" alt="" className="accordionMenuIcon" />
              &nbsp; Hardware
            </button>
            <div className="panel">
              <ul>
                <li>
                  <a href="#" className="accordionItem">Hardware</a>
                </li>
                <li>
                  <a href="#" className="accordionItem">Software</a>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img src="" alt="" className="accordionMenuIcon" />
              &nbsp; Hardware
            </button>
            <div className="panel">
              <ul>
                <li>
                  <a href="#" className="accordionItem">Hardware</a>
                </li>
                <li>
                  <a href="#" className="accordionItem">Software</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default MegaMenu