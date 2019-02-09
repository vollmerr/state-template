import React from 'react';
import { Page, Button, history } from 'state-template';

const OtherRoute = () => (
  <Page>
    <h1>In OtherRoute Page...</h1>
    <p>content goes here......</p>
    <Button onClick={() => history.push('/')} text={'go home....'} />
  </Page>
);

export default OtherRoute;
