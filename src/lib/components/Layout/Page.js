import React from 'react';
import T from 'prop-types';

import { BannerPrimary } from '../Banner';
import Container from './Container';
import Section from './Section';
import MainContent from './MainContent';
import MainPrimary from './MainPrimary';

const Page = ({ children, title, bannerSrc }) => (
  <>
    {bannerSrc && <BannerPrimary src={bannerSrc} />}
    <MainContent>
      <MainPrimary>
        {
          title && (
          <Section variant={'standout'}>
            <Container>
              <h1 className={'m-b-0'}>{title}</h1>
            </Container>
          </Section>
          )
        }
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
  children: T.node,
};

Page.defuaultProps = {
  bannerSrc: null,
  children: null,
};

export default Page;
