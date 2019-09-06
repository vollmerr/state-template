### Install

This project is maintained using `npm`. To add it to a project, use:

```shell
npm install --save state-template
```

<br />

### Importing Components

The recommended way to import components and utilities is using ES6 import syntax, such as this:

```tsx
import { ButtonRow, Button } from 'state-template'; 
```

Using the project this way allows [treeshaking](https://webpack.js.org/guides/tree-shaking/), for example not bundling the `pikaday` package if date fields are not used.

<br />

### Styling

The core CA State Template styles and themes are not included by default when importing components. It is required to have the core styles and a theme imported. For example, when using the oceanside colorscheme the root of the project will contain:

```tsx
import 'state-template/dist/style/core/css/cagov.core.min.css';
import 'state-template/dist/style/core/css/colorscheme-oceanside.min.css';
```

<br />

### Starter Kit

It is recommended to use the [state-template-starter](https://github.com/vollmerr/state-template-starter) project to bootstrap new projects using this package.

Doing so will give a basic example usage of various components and utilities, routing, project setup, and more. Additionally, all required and recommended dependencies are included and kept up to date.
