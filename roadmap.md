# Reactjs-popup

- Add a nested prop to fix click outside => ok
- add stories => ok
- Fix accessability issues for modal => ok
- accessability for tooltip => ok
- stop on close propagation => ok
- fix default styling ?
- react testing library implementation
- fix child as function typing
- Alpha release with github
- Animation using css : https://github.com/atomiks/tippyjs/tree/master/src/scss/animations
- Create a useTooltip hook
- update contributing guide

## Accessibility

https://bitsofco.de/accessible-modal-dialog/
We built the popup with accessability in mind and those some stuff for a full accessible modal :

- Markup the Dialog and Dialog Overlay Appropriately
  - set role="dialog"
  - set aria-labelledby
  - set aria-describedby

* On Dialog Open, Set Focus
* On Dialog Close, Return Focus to the Last Focused Element
* While Open, Prevent Mouse Clicks Outside the Dialog
* While Open, Prevent Tabbing to Outside the Dialog
* While Open?
* Allow the ESC Key to Close the Modal

experience : 0
Score : 6
Available : 15 sep
expected salary : NA
