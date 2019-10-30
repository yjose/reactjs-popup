---
id: nested-popup
position: 5
path: Nested React Tooltip
title: React Popup | React Nested Tooltip Example
description: A simple tooltip example with reactjs-popup,Nested Tooltip, all available position
redirects:
  - "use case - Tooltip"
---

import NestedToolTip from './../src/examples/NestedToolTip.js'
import BoundedTooltip from './../src/examples/BoundedTooltip.js'

## Nested React Tooltip

reactjs-popup support nested Tooltip

<NestedToolTip />

```jsx
import React from "react";
import Popup from "reactjs-popup";

const NestedToolTip = () => (
  <Popup
    trigger={<button className="button"> Trigger 1 </button>}
    position="top center"
    closeOnDocumentClick
  >
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor
      nulla animi, natus velit assumenda deserunt molestias
      <Popup
        trigger={<button className="button"> Trigger 2 </button>}
        position="bottom left"
        closeOnDocumentClick
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          dolor nulla animi, natus velit assumenda deserunt
          <Popup
            trigger={<button className="button"> Trigger 3 </button>}
            position="top right"
            closeOnDocumentClick
          >
            <span> Popup content </span>
          </Popup>
        </div>
      </Popup>
    </div>
  </Popup>
);
```

## Bounded React Tooltip

reactjs-popup supports tooltip bounded inside an element(defaults to window)

<BoundedTooltip />

```jsx
import React from "react";
import Popup from "reactjs-popup";

const BoundedTooltip = () => (
  <div
    style={{ height: 200, width: 400, border: "1px solid #ccc" }}
    className={"tooltipBoundary"}
  >
    <Popup
      trigger={<button className="button"> Trigger 1 </button>}
      position={["top center", "bottom right", "bottom left"]}
      closeOnDocumentClick
      keepTooltipInside=".tooltipBoundary"
    >
    <span> Tooltip Content </span>

    </Popup>
  </div>
);
```

## Play with React Tooltip

```jsx live=true


const Tooltip = () => (
  <Popup
    trigger={open => (
      <button className="button">Trigger - {open ? "Opened" : "Closed"}</button>
    )}
    position="right center"
    closeOnDocumentClick
  >
    <span> Popup content </span>
  </Popup>
);
render(<Tooltip />);
```
