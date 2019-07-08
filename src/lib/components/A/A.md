### internal

```jsx
<p>This is an <A to={'/testPath'}>internal anchor</A></p>
```

### external
External links open in a new tab.

```jsx
<p>This is an <A href={'http://www.google.com'}>external anchor</A></p>
```

### shorthand
You can use the shorthand `text` prop instead of passing `children`.

```jsx
<p>This is an <A to={'/testPath'} text={'shorthand anchor'} /></p>
```

### icon link
You can render the links as an [Icon](#icon) using the `iconProps`.

```jsx
<A iconProps={{ name: 'home' }} />
```
