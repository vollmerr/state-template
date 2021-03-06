```jsx
const Home = () => <div>in Home</div>;
const Help = () => <div>in Help</div>;

const routes = [
  {
    key: 'home',
    name: 'Home',
    path: '/',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: Home,
  },
  {
    key: 'help',
    name: 'Help',
    path: '/help',
    exact: true,
    icon: 'ca-gov-icon-question-line',
    component: Help,
  },
];

<div style={{ overflow: 'auto', display: 'grid' }}>
  <Header 
    fixed={false} 
    routes={routes} 
  />
</div>
```

### Alignment, Title, Contact Link

```jsx
const Home = () => <div>in Home</div>;
const Help = () => <div>in Help</div>;

const routes = [
  {
    key: 'home',
    name: 'Home',
    path: '/',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: Home,
  },
  {
    key: 'help',
    name: 'Help',
    path: '/help',
    exact: true,
    icon: 'ca-gov-icon-question-line',
    component: Help,
  },
];

const contactLink = {
  text: 'HELP!',
  href: 'https://cdt.ca.gov/support/',
};

<div style={{ overflow: 'auto', display: 'grid' }}>
  <Header 
    fixed={false} 
    align={'right'}
    contactLink={contactLink}
    title={'Custom Title'}
    routes={routes} 
  />
</div>
```
