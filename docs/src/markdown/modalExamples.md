---
title: React Popup |  Use case - Modal example
description: A simple tooltip example with reactjs-popup
components: 
  SimpleModal : SimpleModal
  CustomModal : CustomModal
---

## Use Case - Modal

To create a simple Modal with reactjs-popup you need just to add the 'modal' attribute to your popup component.

<SimpleModal />

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
);
```

you can take more control over your Modal by using a function as children pattern

<CustomModal />

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
              nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
              deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ')
              close()
            }}
          >
            close modal
          </button>
      </div>
      </div>
    )}
  </Popup>
);
```

```css
.modal {
  font-size: 12px;
}
.modal > .header {
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 5px;
}
.modal > .content {
  width: 100%;
  padding: 10px 5px;
}
.modal > .actions {
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
}
.modal > .close {
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
}
```
