---
title : React Popup | Component API 
description : The reactjs-popup API is inspired by semantic popup docs
components:
 InputFocus : InputFocus
---

### Component API

The reactjs-popup API is inspired by semantic popup docs

| Option       | Default           | Type           | Description                                                                                                                                            |
| ------------ | ----------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| trigger      |                   | {node,func}    | Element to be rendered in-place where the popup is defined                                                                                             |
| defaultOpen  | false             | {bool}         | default open value : initial state                                                                                                                     |
| on           | `'hover'`         | {enum,Array}   | Events triggering the popup. Enums or Array of : `'hover' 'click' 'focus'` .                                                                           |
| children     |                   | {node or func} | Popup content                                                                                                                                          |
| position     | `'bottom center'` | {enum}         | Position for the popover. <br /> Enums:`'top left' 'top right' 'bottom right' 'bottom left' 'right center' 'left center' 'top center' 'bottom center'` |
| offset       | 0                 | number         | Offset in pixels to be applied to the Popup.                                                                                                           |
| arrow        | true              | {bool}         | Arrow element                                                                                                                                          |
| onOpen       |                   | {func}         | function called on open event                                                                                                                          |
| onClose      |                   | {func}         | function called on close event                                                                                                                         |
| contentStyle |                   | {object}       | Custom popup content style                                                                                                                             |
| overlayStyle |                   | {object}       | Custom overlay style                                                                                                                                   |
| arrowStyle   |                   | {object}       | Custom arrow style                                                                                                                                     |

### Example : on focus

<InputFocus />

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup
    trigger={<input type="text" placeholder="start typing ... " />}
    on="focus"
    position="top left"
    closeOnDocumentClick
  >
    <span> On focus popup event </span>
  </Popup>
);
```
