---
title:  React Popup Component - Modals,Tooltips and Menus —  All in one
description: A Simple React popup component.Use it as a tooltip,modal,sub-menu and match more, In this Tuto, we introduce how you can create a controlled popup, so you can control you popup state completely ...
components:
    ControlledPopup: ControlledPopup
---

### Controlled react Popup

As we already mentioned in the Component API section, you can create a controlled Popup component by using the `open` prop like the following :

<ControlledPopup />

```jsx
import React from "react";
import Warper from "./Warper";
import Popup from "reactjs-popup";
//

class ControlledPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Controlled Popup
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
            omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
            ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
            doloribus. Odit, aut.
          </div>
        </Popup>
      </div>
    );
  }
}
```

It's important to mention that the controlled Popup work only for modal and I think it's not make sense to be controlled for tooltip and menu because we need the trigger element to calculate popup position.
