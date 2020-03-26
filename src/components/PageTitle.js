import React from 'react';
import Wrapper from './Wrapper';

const PageTitle = ({ title }) => (
  <Wrapper>
    <div class="section-heading section-heading--divider-top">
      <h2 class="section-heading__title">{title}</h2>
    </div>
  </Wrapper>
);

export default PageTitle;
