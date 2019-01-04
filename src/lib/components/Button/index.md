```jsx
<div className={'btn-row'}>
  <Button text={'button'} />
  <Button text={'default button'} variant={'default'} />
  <Button text={'primary button'} variant={'primary'} />
  <Button text={'secondary button'} variant={'secondary'} />
  <Button text={'highlight button'} variant={'highlight'} />
  <Button text={'standout button'} variant={'standout'} />
</div>
```

### active

```jsx
<div className={'btn-row'}>
  <Button text={'button'} />
  <Button text={'default button'} variant={'default'} isActive />
  <Button text={'primary button'} variant={'primary'} isActive />
  <Button text={'secondary button'} variant={'secondary'} isActive />
  <Button text={'highlight button'} variant={'highlight'} isActive />
  <Button text={'standout button'} variant={'standout'} isActive />
</div>
```

### disabled

```jsx
<div className={'btn-row'}>
  <Button text={'button'} disabled />
  <Button text={'default button'} variant={'default'} disabled />
  <Button text={'primary button'} variant={'primary'} disabled />
  <Button text={'secondary button'} variant={'secondary'} disabled />
  <Button text={'highlight button'} variant={'highlight'} disabled />
  <Button text={'standout button'} variant={'standout'} disabled />
</div>
```

### with icon

```jsx
const iconProps = {
  name: 'plus-mark',
};

<div className={'btn-row'}>
  <Button text={'button'} iconProps={iconProps} />
  <Button text={'default button'} variant={'default'} iconProps={iconProps} />
  <Button text={'primary button'} variant={'primary'} iconProps={iconProps} />
  <Button text={'secondary button'} variant={'secondary'} iconProps={iconProps} />
  <Button text={'highlight button'} variant={'highlight'} iconProps={iconProps} />
  <Button text={'standout button'} variant={'standout'} iconProps={iconProps} />
</div>
```

### passed props
Other properties get passed down to the button component, such as onChange handlers, id, etc.

```jsx
<div className={'btn-row'}>
  <Button text={'click me'} onClick={() => alert('You Clicked Me!!')} variant={'default'} />
  <Button text={'other props'} id={'ButtonId'} style={{ fontSize: '20px' }} variant={'primary'} />
</div>
```
