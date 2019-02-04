# Change Log

## v0.1.1 (2019-01-01)

- bug fixes
  - fix first click on zoom setting not calculating correct
  - add missing 'standout' variant for Card
- components
  - routing now wraps routes in ErrorBoundary
  - all containers removed. Remaining are Async and Messages (both were in Status) in their own component folders, use ConnectedAsync and ConnectedMessages for connected to redux.
  - add Page component
  - add typescript definition files
- stlying:
  - messages, errors, overlay, header
- utils:
  - allow middleware to be passed to configureStore
- internal:
  - change exporting format and folder structure
  - now export all components in index.js
  - change doc file location computation
  - add script for updating example with build
  - bump package versions
  - add example project as folder
  - add clickSelectorAll for backstop to click all elements

## v0.0.33 

- Use 'tag' prop instead of 'type' for textarea in FieldInput
- add 'ButtonRow' component
- fix removing 'onScroll' event listeners
- pass remaining props to field components instead of all props

## v0.0.32 (2019-01-16)

- fix empty options being passed to api util 'request'
- export date utils
  
## v0.0.31 (2019-01-16)

- add state template's return to top button when scrolled down
- add state template's collapse header when scrolled down
- add lodash.debounce package

## v0.0.30 (2019-01-15)

- change select height to match other fields
- add isValid date util
- fix FieldDate not setting initial value
- turn auto complete off for FieldDate (displayed over picker...)
- fix Table header styling
- change api util 'request' to set default content-type of application/json

## v0.0.29 (2019-01-14)

- update core packages
- consistent form fields error styling
- allow passing a custom path to redirect in main App routing (redirect)
- allow header icon alignment (alignHeader)
- refactor Table header - allow optional title, menu, search
- style Table if rowEvents passed
- set select background as white (for some reason grey half time...)
  
## v0.0.28 (2019-01-09)

- hide form fields required indicator when disabled
- consistent disabled form fields styling
- fix values with common name both being selected in FieldRadioButton (ex. "A" and "A 1" both select when select "A 1")
- change Button prop isActive to active
- allow passing a custom path to redirect in NavTabs (redirectPath)
- remove multiple retries on authenication util

## v0.0.27 (2019-01-04)

- allow adding an icon to Button (iconProps)
- add NavTabs component
