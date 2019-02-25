```jsx
<Panel title={'default panel'} variant={'default'}>
  <p>content goes here...</p>
</Panel>

<Panel title={'primary panel'} variant={'primary'}>
  <p>content goes here...</p>
</Panel>

<Panel title={'overstated panel'} variant={'overstated'}>
  <p>content goes here...</p>
</Panel>

<Panel title={'understated panel'} variant={'understated'}>
  <p>content goes here...</p>
</Panel>

<Panel title={'standout panel'} variant={'standout'}>
    <p>content goes here...</p>
</Panel>
```
### icon

```jsx
<Panel icon={'ca-gov-icon-info'} title={'panel with icon'}>
  <p>content goes here...</p>
</Panel>
```

### header button

```jsx
const buttonProps = {
  text: 'panel button',
  variant: 'primary',
};

<Panel title={'panel with header button'} buttonProps={buttonProps}>
  <p>content goes here...</p>
</Panel>
```

### passed props
Other properties get passed down to the top level div  of the panel component, such as id, class names, etc.

```jsx
const otherProps = {
  id: 'panel button',
  className: 'm-l-lg',
};

<Panel title={'panel with passed props'} {...otherProps}>
  <p>content goes here...</p>
</Panel>
```

