# Change Log

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
- allow header icon alignment (align)
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
