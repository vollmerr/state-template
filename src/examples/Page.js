// TODO: make common page layout components like this avaiable to project...

import React from 'react';
import T from 'prop-types';
import {
  Container, Section, MainContent, MainPrimary, BannerPrimary,
} from '../lib';

const Page = ({ children, title, bannerSrc }) => (
  <>
    {bannerSrc && <BannerPrimary src={bannerSrc} />}
    <MainContent>
      <MainPrimary>
        <Section variant={'standout'}>
          <Container>
            <h1 className={'m-b-0'}>{title}</h1>
          </Container>
        </Section>
        <Section>
          <Container>
            {children}
          </Container>
        </Section>
      </MainPrimary>
    </MainContent>
  </>
);

Page.propTypes = {
  bannerSrc: T.string,
  title: T.string.isRequired,
  children: T.node.isRequired,
};

Page.defuaultProps = {
  bannerSrc: null,
};

export default Page;
