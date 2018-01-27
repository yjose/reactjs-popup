---
title: Just hack'n
description: Nothing to see here
components: 
  Example: Example
---

### Component API

The reactjs-popup API is inspired by semantic popup docs

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
