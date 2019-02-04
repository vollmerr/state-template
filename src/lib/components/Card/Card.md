```jsx
  <Card header={'header goes here'} footer={'footer goes here'}>
    <p>content goes here...</p>
  </Card>
```

### variants

```jsx
  <Card>
    <p>default card</p>
  </Card>

  <Card variant={'understated'}>
    <p>understated card</p>
  </Card>

  <Card variant={'overstated'}>
    <p>overstated card</p>
  </Card>

  <Card variant={'standout'}>
    <p>standout card</p>
  </Card>

  <Card variant={'primary'}>
    <p>primary card</p>
  </Card>

  <Card variant={'danger'}>
      <p>danger card</p>
  </Card>

  <Card variant={'inverted'}>
    <p>inverted card</p>
  </Card>
```

### with header

```jsx  
const header = <p>footer goes here <Button href={'http://www.google.com'} text={'example button'} variant={'primary'}/></p>;

  <Card header={header}>
    <p>content goes here...</p>
  </Card>
```

### with footer

```jsx
  const footer = <p>footer goes here <Button href={'http://www.google.com'} text={'example button'} variant={'primary'}/></p>;

  <Card footer={footer}>
    <p>content goes here...</p>
  </Card>
```

