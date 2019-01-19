import React from 'react';

import { A } from '../../lib';
import Content from '../Content';
import Page from '../Page';

const ExampleA = () => (
  <Page title={'Anchor'}>
    <p>
      The A component is used for anchor links, to navigate to internal or external urls.
      They provide the standard underline on hover styling.
    </p>

    <Content>
      <A to={'/'}>Internal Link</A>
      <hr />
      <A href={'http://www.google.com'}>External Link</A>
      <hr />
      <A to={'/'} text={'Shorthand Link'} />
    </Content>
  </Page>
);

export default ExampleA;
