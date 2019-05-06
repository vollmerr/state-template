```jsx
const Tab1 = () => <div>tab 1</div>;
const Tab2 = () => <div>tab 2</div>;

const routes = [
  {
    key: 'tab1',
    name: 'Tab 1',
    path: '/tab-1',
    exact: true,
    component: Tab1,
  },
  {
    key: 'tab2',
    name: 'Tab 2',
    path: '/tab-2',
    exact: true,
    component: Tab2,
  },
];

<NavTabs defaultPath={'/tab-1'} routes={routes} />
```
