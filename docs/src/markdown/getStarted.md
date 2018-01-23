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
//or
yarn add reactjs-popup -s test 
```

### Component API

| Option       | Default           | Type           | Description                                                                                                                                            |
| ------------ | ----------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| trigger      |                   | {node}         | Element to be rendered in-place where the popup is defined                                                                                             |
| defaultOpen  | false             | {bool}         | default open value : initial state                                                                                                                     |
| on           | `'hover'`         | {enum}         | Events triggering the popup. Enums: `'hover' 'click' 'focus'`                                                                                          |
| children     |                   | {node or func} | Popup content                                                                                                                                          |
| position     | `'bottom center'` | {enum}         | Position for the popover. <br /> Enums:`'top left' 'top right' 'bottom right' 'bottom left' 'right center' 'left center' 'top center' 'bottom center'` |
| offset       | 0                 | number         | Offset in pixels to be applied to the Popup.                                                                                                           |
| arrow        | true              | {bool}         | Arrow element                                                                                                                                          |
| onOpen       |                   | {func}         | function called on open event                                                                                                                          |
| onClose      |                   | {func}         | function called on close event                                                                                                                         |
| contentStyle |                   | {object}       | Custom popup content style                                                                                                                             |
| overlayStyle |                   | {object}       | Custom overlay style                                                                                                                                   |
| arrowStyle   |                   | {object}       | Custom arrow style                                                                                                                                     |

### Include the Component

```jsx
import React from "react";
import Popup from "reactjs-popup";
//

export default () => (
  <Popup
    trigger={<button> click here </button>}
    position="right center"
    closeOnDocumentClick
  >
    <div>
      skqdklsqjd dsfkjdsf dsf dkfjksldfj dskfjds fl dsfkjfs
      <Popup
        trigger={<button> testt </button>}
        position="right center"
        triggerOn="hover"
        style={{ padding: "5px" }}
      >
        <span> skqdklsqjd dsfkjdsf dsf dkfjksldfj dskfjds fl dsfkjfs</span>
      </Popup>
    </div>
  </Popup>
);
```

skdjskjd

```jsx
import React from "react";
import Popup from "./reactjsPopup";

export default () => (
  <Popup trigger={<button> testt </button>} position="right,center">
    skqdklsqjd dsfkjdsf dsf dkfjksldfj dskfjds fl dsfkjfs
  </Popup>
);
```

You can also use it with function as children pattern

<Example />

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
