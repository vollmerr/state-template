
```jsx
  const { MemoryRouter } = require('react-router-dom');

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
    <App routes={routes} router={MemoryRouter} />
  </div>
```
