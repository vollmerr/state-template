### internal

```jsx
<div className={'btn-row'}>
  <LinkButton text={'default button'} to={'/'} />
  <LinkButton text={'primary button'} primary to={'/'} />
  <LinkButton text={'secondary button'} secondary to={'/'} />
  <LinkButton text={'highlight button'} highlight to={'/'} />
  <LinkButton text={'standout button'} standout to={'/'} />
</div>
```

### external
External links open in a new tab.

```jsx
<div className={'btn-row'}>
  <LinkButton text={'default link'} href={'http://www.google.com'} />
  <LinkButton text={'primary link'} primary href={'http://www.google.com'} />
  <LinkButton text={'secondary link'} secondary href={'http://www.google.com'} />
  <LinkButton text={'highlight link'} highlight href={'http://www.google.com'} />
  <LinkButton text={'standout link'} standout href={'http://www.google.com'}  />
</div>
```
