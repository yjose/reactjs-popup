---
title: React Popup |  Use case - Menu example
description: A simple tooltip example with reactjs-popup
components: 
  SimpleMenu: SimpleMenu
---

## Use Case - Menu

you can create a nested Menu with reactjs-popup easily as the following.

<SimpleMenu />

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <div className="menu">
    <div className="menu-item"> Menu item 1</div>
    <div className="menu-item"> Menu item 2</div>
    <div className="menu-item"> Menu item 3</div>
    <Popup
      trigger={<div className="menu-item"> sup Menu </div>}
      position="right top"
      on="click"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none" }}
      arrow={false}
    >
      <div className="menu">
        <div className="menu-item"> item 1</div>
        <div className="menu-item"> item 2</div>
        <div className="menu-item"> item 3</div>
      </div>
    </Popup>
    <div className="menu-item"> Menu item 4</div>
  </div>
);
```

```css
.menu {
  width: 200px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.menu-item {
  cursor: pointer;
  padding: 5px;
  height: 28px;
  border-bottom: 1px solid rgb(187, 187, 187);
}
.menu-item:hover {
  color: #2980b9;
}
```
