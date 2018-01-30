---
title:  React Popup Component - Modals,Tooltips and Menus —  All in one
description: A Simple React popup component.Use it as a tooltip,modal,sub-menu and match more ...
---

## Installing / Getting started

This package is available in npm repository as reactjs-popup. It will work correctly with all popular bundlers.

```bash
npm install reactjs-popup --save
```

Using yarn

```bash
yarn add reactjs-popup -s
```

## Include the Component

To start using reactjs popup you just need to import the component from the reactjs-popup package.

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
```

You can also use it with function as children pattern

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button>Trigger</button>} position="top left">
    {close => (
      <div>
        Content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);
```

You can find more examples in the Use case sections
