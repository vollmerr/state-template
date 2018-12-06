### internal

```jsx
<div className={'btn-row'}>
  <LinkButton text={'default link'} to={'/'} />
  <LinkButton text={'primary link'} to={'/'} primary />
  <LinkButton text={'secondary link'} to={'/'} secondary />
  <LinkButton text={'highlight link'} to={'/'} highlight />
  <LinkButton text={'standout link'} to={'/'} standout />
</div>
```

### external
External links open in a new tab.

```jsx
<div className={'btn-row'}>
  <LinkButton text={'default link'} href={'http://www.google.com'} />
  <LinkButton text={'primary link'} href={'http://www.google.com'} primary />
  <LinkButton text={'secondary link'} href={'http://www.google.com'} secondary />
  <LinkButton text={'highlight link'} href={'http://www.google.com'} highlight />
  <LinkButton text={'standout link'} href={'http://www.google.com'} standout />
</div>
```
