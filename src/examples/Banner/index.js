import React from 'react';

import { BannerPrimary } from '../../lib';
import Content from '../Content';
import Page from '../Page';

const ExampleA = () => (
  <Page title={'Anchor'}>
    <p>
      The Banner component is used for displaying a banner directly below the header.
    </p>

    <Content>
      <BannerPrimary />
    </Content>
  </Page>
);

export default ExampleA;
