---
title: Just hack'n
description: Nothing to see here
components: 
  Example: Example
---

## Welcome

reactjs-popup is a simple react popup component with a lot of benefits :

* Built with react fragment that's mean no additional wrapper divs in your code or in the trigger element.
* Does not inject HTML outside your app root
* Function as children pattern to take control over your popup anywhere in your code.
* All this clocks in at around 3 kB gzipped

Requires React >= 16.0

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
    <div>popup content here</div>
  </Popup>
);
```

You can also use it with function as children pattern

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup
    triggerOn="click"
    position="top left"
    closeOnDocumentClick={true}
    trigger={<button>Trigger</button>}
  >
    {close => (
      <div>
        content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);
```

You can find more examples in the Use case sections
