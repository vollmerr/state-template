# state-template - Change Log

## v0.4.5 (2019-08-26)

- (feat) add Form component to encapsulate connecting to redux-form
- (fix) license name/date + include in package.json

## v0.4.4 (2019-08-26)

- (chore) update dependency versions
- (chore) update docs/readme - add github pages
- (fix) all eslint issues / update to latest rules

## v0.4.3 (2019-08-09)

- (chore) update react-styleguidist v9.1.13
- (chore) update dev dependencies
- (feat) pass `cellEdit` in Table to react-bootstrap-table-next
- (feat) allow ref to inner table and hide pagination in Table
- (feat) add FieldComboBox component for accessible combo box field
- (feat) add options for yes/no fields in `fieldOptions` util
- (fix) Table header now pushes menu to right when hiding search
- (fix) FieldSelect height consistent with other fields / use scss variables
- (refactor) use `componentDidUpdate` in place of deprecated `componentWillReceiveProps`

## v0.4.2 (2019-08-02)

- (chore) update dependency versions
- (chore) update core font and images to state template 5.0.10
- (feat) add `inputRef` prop to field components (not checks or radios)
- (feat) add data-test tag to status messages for testing purposes
- (fix) FieldSelect focus styling to be consistent with other input fields

## v0.4.1 (2019-07-19)

- (chore) update dev dependency versions
- (feat) hide `hidden` routes in NavTabs
- (feat) include status as `data-status` attribute in Async
- (feat) allow selecting rows and hiding search box in Table
- (fix) Async's LoadingIndicator trying to update state when unmounted

## v0.4.0 (2019-07-10)

- (chore) update dev dependency versions
- (fix) pass entire action to saga in withAsync
- (fix) NavTab tab link styling

## v0.3.7 (2019-07-08)

- (feat) allow icon props in A component
- (fix) revert having field placeholders / defaults, rely on help text instead
- (fix) hide icons from screen reader
- (fix) button with icon styling 

## v0.3.6 (2019-07-01)

- (chore) update dev dependency versions
- (feat) allow field placeholders / add default
- (fix) inconsistent disabled field styling
- (fix) only running lib's unit tests

## v0.3.5 (2019-06-25)

- fix readme
- fix table header styling when no menu
- add babel-eslint for linting
- update dependency versions
  - hard code react-styleguidist, issue with rendering form fields

## v0.3.4 (2019-06-10)

- remove react-scripts / add following:
  - eslint packages
  - webpack packages and config (for styleguidist server only)
  - jest packages and config, updated test scripts
- add new `lib/test` folder for test utilities
- remove `.env` files in favour of hard coding in tests/docs
- update tests

## v0.3.3 (2019-06-10)

- update core to state template 5.0.7
- update dependency versions
- add unit tests (Layout)
- fix removing pikaday warning on postinstall

## v0.3.2 (2019-06-04)

- add license
- add version to Footer
- update dependency versions

## v0.3.1 (2019-05-29)

- allow passing custom helpId and errorId on form fields
- fix FieldDate keyboard events
- fix print styling, remove using global color-adjust due to issues
- update dependency versions

## v0.3.0 (2019-05-16)

- update dependency versions
- make node-sass a prod dependency so included in projects
- remove outdated example folder in favor of using starter repo as the example
- remove importing core state template styling
- fix not treeshaking in projects that use state-template
- fix styling
  - hide date icon in FieldDate on print
  - make style more specific for stylesheet import order differring
- fix accessibility issues
  - pass correct help id for help blocks in form fields
  - FieldDate more accessible with keyboard navigation

## v0.2.10 (2019-05-14)

- improve print styling (mainly fields)
- update dependency versions
  - backstop v4 (update all ref images...)

## v0.2.9 (2019-05-08)

- add `react-tooltip` package for tooltips
- add new `Tooltip` component
- add optional `tooltip` property on field components to render a help icon with tooltip
- update docs and visual tests to include new `Tooltip` component and examples of tooltips on fields
- delegate yielding to saga in `withAsync` instead of relying on redux-saga to do so
- change util `isInvalidDate` to `isValidDate` for consistency
- moar tests (utils, Async) and improved ts definitions

## v0.2.8 (2019-05-06)

- fix NavTabs to use bootstrap 4 classes
- add docs for NavTabs

## v0.2.7 (2019-05-06)

- update icon definitions on build
- remove unused scripts
- update dependency versions
  - react-router-dom v5
  - react-redux v7

## v0.2.6 (2019-04-24)

- update core font and images to state template 5.0.6
- remove core state template js
- fix disabled field styling / make consistent with bootstrap 4
- update dependency versions 
  - react-scripts v3

## v0.2.5 (2019-04-17)

- fix missing FieldFile export

## v0.2.4 (2019-04-17)

- add 'FieldFile' component for attaching files in forms (#9)
- add button for displaying form values in docs
- add 'file' util for handling file functionality, such as saving a file
- allow passing custom rendering (and other options) to 'withField'
- extract label, error message, and help block into their own components

## v0.2.3 (2019-04-16)

- fix settings bar not toggling / update to new state template
- update dependency versions

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
- update dependency versions
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

- update dependency versions

## v0.1.4 (2019-02-14)

- fix checkbox field styling
- update dependency versions
- update fix pikaday script to only run once, add to postinstall
- add state template font to example and docs / update in visual tests
- add delay to visual regression tests (for transitions)
 
## v0.1.3 (2019-02-08)

- add history util. defaults to browser history
- App now requires history be passed, Router defaults to react-router-dom's
- fix Messages styling to be centered
- change all components from PureComponent to Component
- update dependency versions
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
  - update dependency versions
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
