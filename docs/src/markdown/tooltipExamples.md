---
title: React Popup |  Use case - Tooltip example
description: A simple tooltip example with reactjs-popup,Nested Tooltip, all available position
components:
  SimpleTooltip: SimpleTooltip
  ToolTipPositions: ToolTipPositions
  NestedToolTip: NestedToolTip
  BoundedTooltip: BoundedTooltip
---

## Use Case - Tooltip

Reactjs Popup is built to be a tooltip by default

<SimpleTooltip />

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup
    trigger={open => (
      <button className="button">Trigger - {open ? "Opened" : "Closed"}</button>
    )}
    position="right center"
    closeOnDocumentClick
  >
    <span> popup content </span>
  </Popup>
);
```

## Nested Tooltip

reactjs-popup support nested Tooltip

<NestedToolTip />

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
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

## Tooltip position

<ToolTipPositions/>

```jsx
import React from "react";
import Popup from "reactjs-popup";

const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title} position </div>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod dolor cupiditate
    </div>
  </div>
);

export default () => (
  <div className="example-warper">
    <Popup
      trigger={<button className="button"> Right Top </button>}
      position="right top"
      on="hover"
    >
      <Card title="Right Top" />
    </Popup>

    <Popup
      trigger={<button className="button"> Bottom Center </button>}
      position="bottom center"
      on="hover"
    >
      <Card title="Bottom Center" />
    </Popup>

    <Popup
      trigger={<button className="button"> Left Top </button>}
      position="left top"
      on="hover"
    >
      <Card title="Left Top" />
    </Popup>

    <Popup
      trigger={<button className="button"> Right Center </button>}
      position="right center"
      on="hover"
    >
      <Card title="Right Center" />
    </Popup>
    <Popup
      trigger={<button className="button"> Top Center </button>}
      position="top center"
      on="hover"
    >
      <Card title="Top Center" />
    </Popup>
    <Popup
      trigger={<button className="button"> left Center </button>}
      position="left center"
      on="hover"
    >
      <Card title="Left Center" />
    </Popup>
    <Popup
      trigger={<button className="button"> Right Bottom </button>}
      position="right bottom"
      on="hover"
    >
      <Card title="Right bottom" />
    </Popup>

    <Popup
      trigger={<button className="button"> Top Center </button>}
      position="top center"
      on="hover"
    >
      <Card title="Top Center" />
    </Popup>

    <Popup
      trigger={<button className="button"> Left Bottom </button>}
      position="left bottom"
      on="hover"
    >
      <Card title="Left Bottom" />
    </Popup>
  </div>
);
```

```css
.card {
  font-size: 12px;
}
.card > .header {
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 14px;
  text-align: center;
}
```

## Bounded Tooltip

reactjs-popup supports tooltip bounded inside an element(defaults to window)

<BoundedTooltip />

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <div
    style={{ height: 200, width: 400, border: "1px solid #ccc" }}
    className={"tooltipBoundary"}
  >
    <Popup
      trigger={<button className="button"> Trigger 1 </button>}
      position={["top center", "bottom right", "bottom left"]}
      closeOnDocumentClick
      keepTooltipInside=".tooltipBoundary"
    />
  </div>
);
```
