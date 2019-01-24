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

  const headerProps = {
    fixed: false,
    align: 'right',
  };

  const routingProps = {
    routes,
    redirect: '/',
    contactLink: {
      text: 'Contact Link!',
      href: 'https://cdt.ca.gov/support/',
    }
  };

  <div style={{ overflow: 'auto', display: 'grid' }}>
    <App 
      router={MemoryRouter} 
      headerProps={headerProps}
      routingProps={routingProps}
    />
  </div>
```

### custom header, routing, and footer

```jsx
  const { MemoryRouter } = require('react-router-dom');

  const renderHeader = (props) => <header>custom header</header>;
  const renderRouting = (props) => <div>custom routing</div>;
  const renderFooter = (props) => <footer>custom footer</footer>;

  <App
    router={MemoryRouter} 
    renderHeader={renderHeader}
    renderRouting={renderRouting}
    renderFooter={renderFooter}
  />
```
