import React from 'react';
import T from 'prop-types';

import { BannerPrimary } from '../Banner';
import Container from './Container';
import Section from './Section';
import MainContent from './MainContent';
import MainPrimary from './MainPrimary';

const Page = ({
  bannerSrc,
  children,
  className,
  title,
}) => (
  <>
    {bannerSrc && <BannerPrimary src={bannerSrc} />}

    <MainContent className={className}>
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
  /** Banner image src */
  bannerSrc: T.string,

  /** Page content */
  children: T.node,

  /** Class name to attach to main content */
  className: T.string,

  /** Page title  */
  title: T.string,
};

Page.defaultProps = {
  bannerSrc: null,
  children: null,
  className: null,
  title: null,
};

export default Page;
