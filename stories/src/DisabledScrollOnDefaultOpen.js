import React from 'react';
import Popup from "../../src";

class NoScroll extends React.Component {
  // thanks to adding this.lockScroll() in componentDidMount scroll is unabled even when
  // popup is default open
  render() {
    return (
      <div style={{backgroundColor: 'red', height: '150vh'}}>
        <Popup
          trigger={<button>Always open</button>}
          modal
          lockScroll={true}
          defaultOpen={true}>
          <div className="modal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </div>
        </Popup>
      </div>
    );
  }
}

const NoScrollPopup = {
  name: 'Disable Scroll on Default Popup Open',
  component: NoScroll,
};

export default NoScrollPopup;
