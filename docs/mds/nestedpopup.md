---
id: nested-popup
position: 5
path: Nested React Tooltip
title: React Popup | React Nested Tooltip Example
description: A simple tooltip example with reactjs-popup,Nested Tooltip, all available position
redirects:
  - "use case - Tooltip"
---

import NestedToolTip from '../../../src/examples/NestedToolTip.js'
import BoundedTooltip from '../../../src/examples/BoundedTooltip.js'

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
