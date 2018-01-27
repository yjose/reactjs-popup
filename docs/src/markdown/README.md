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

## Installing / Getting Started

This package is available in npm repository as reactjs-popup. It will work correctly with all popular bundlers.

```bash
npm install reactjs-popup --save
#or
yarn add reactjs-popup -s
```

### Include the Component

```jsx
const trigger = <button>Button nested</button>
<Popup
  triggerOn="click"
  position="top,left"
  closeOnDocumentClick={true}
  trigger
>
  <div>popup content Here</div>
</Popup>
```

skdjskjd

```jsx
import React from "react";
import Popup from "./reactjsPopup";
//

export default () => (
  <Popup trigger={<button> testt </button>} position="right,center">
    skqdklsqjd dsfkjdsf dsf dkfjksldfj dskfjds fl dsfkjfs
  </Popup>
);
```

You can also use it with function as children pattern

```js
<Popup
  triggerOn="click"
  position="top,left"
  closeOnDocumentClick={true}
  trigger={<button>Button nested</button>}
>
  {(open, close) => (
    <div>
      content here
      <a className="close" onClick={close}>
        &times;
      </a>
    </div>
  )}
</Popup>
```

You can find more examples in the [reactjs-popup home page](http://yjose.github.io/react-popup/)
