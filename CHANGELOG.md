# Change Log

## v0.2.2 (2019-04-09)

- improved Field components definition files, order alphabetically
- change way / more explicitly pass props to fields
- remove header border on tables
- export normalize utils

## v0.2.1 (2019-04-09)

- upgrade core to state template 5.0.6
- radio/checkbox fields now vertical by default, allow inline
- swap naming for data-test and classnames to BEM style
- use boostrap 4 styling (Table, remove col-xs-*, etc)
- add normalize utils for phone + zip

## v0.2.0 (2019-04-05)

- update / add missing ts definitions
- bump package versions
- hard code react-styleguidist version (9.0.5 broken)
- remove FieldTime, FieldWrapper components
- refactor field HOCs (withField)
- fix accessibility issues
  - 'back to top' button -> span
  - aria label to Table search
  - aria desc/label for field components

## v0.1.8 (2019-03-25)

- allow external links to be passed as routes for navigation
- issue with backstop? start over on reference images...

## v0.1.7 (2019-03-22)

- no changes, just issue with publishing...

## v0.1.6 (2019-03-20)

- copy all src files on build
- add test setup to example
- add optional title to utility header
- add withAsync util for hadnling loading/errors in sagas
- pass autocomplete to FieldInput
- remove Access-Control-Expose-Headers header from api request util
- add api util for checking if should fetch

## v0.1.5 (2019-02-14)

- bump package versions

## v0.1.4 (2019-02-14)

- fix checkbox field styling
- bump package versions
- update fix pikaday script to only run once, add to postinstall
- add state template font to example and docs / update in visual tests
- add delay to visual regression tests (for transitions)
 
## v0.1.3 (2019-02-08)

- add history util. defaults to browser history
- App now requires history be passed, Router defaults to react-router-dom's
- fix Messages styling to be centered
- change all components from PureComponent to Component
- bump package versions
- add history as dependency
- add example robots.txt file

## v0.1.2 (2019-01-07)

- fix accessibility on forms, add "for" attribute on all labels and id on inputs
- fix accessibility on links, add rel="noopener noreferrer" to all external
- fix header/loading z-index
- extract message from error messages to render

## v0.1.1 (2019-01-04)

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
