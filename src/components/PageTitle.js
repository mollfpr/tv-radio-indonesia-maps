import React from 'react';
import Wrapper from './Wrapper';

const PageTitle = ({ title }) => (
  <Wrapper>
    <div class="section-heading section-heading--divider-top mb-4">
      <h2 class="section-heading__title">{title}</h2>
    </div>
  </Wrapper>
);

export default PageTitle;
