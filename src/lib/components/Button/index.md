### default

```jsx
<div className={'btn-row'}>
  <Button text={'default button'} />
  <Button text={'primary button'} primary />
  <Button text={'secondary button'} secondary />
  <Button text={'highlight button'} highlight />
  <Button text={'standout button'} standout />
</div>
```

### active

```jsx
<div className={'btn-row'}>
  <Button text={'default button'} isActive />
  <Button text={'primary button'} primary isActive />
  <Button text={'secondary button'} secondary isActive />
  <Button text={'highlight button'} highlight isActive />
  <Button text={'standout button'} standout isActive />
</div>
```

### disabled

```jsx
<div className={'btn-row'}>
  <Button text={'default button'} disabled />
  <Button text={'primary button'} primary disabled />
  <Button text={'secondary button'} secondary disabled />
  <Button text={'highlight button'} highlight disabled />
  <Button text={'standout button'} standout disabled />
</div>
```

### passed props
Other properties get passed down to the button component, such as onChange handlers, id, etc.

```jsx
<div className={'btn-row'}>
  <Button text={'click me'} onClick={() => alert('You Clicked Me!!')} />
  <Button text={'other props'} id={'ButtonId'} style={{ fontSize: '20px' }} />
</div>
```
