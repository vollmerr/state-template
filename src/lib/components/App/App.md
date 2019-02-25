```jsx
import { createMemoryHistory } from 'history';

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

const props = {
  fixedHeader: false,
  alignHeader: 'right',
  routes,
  contactLink: {
    text: 'Contact Link!',
    href: 'https://cdt.ca.gov/support/',
  },
  history: createMemoryHistory(),
};

<div style={{ overflow: 'auto', display: 'grid' }}>
  <App {...props} />
</div>
```

### custom header, routing, and footer

```jsx
import { createMemoryHistory } from 'history';

const renderHeader = (props) => <header>custom header</header>;
const renderRouting = (props) => <div>custom routing</div>;
const renderFooter = (props) => <footer>custom footer</footer>;

<App
  renderHeader={renderHeader}
  renderRouting={renderRouting}
  renderFooter={renderFooter}
  history={createMemoryHistory()}
/>
```
