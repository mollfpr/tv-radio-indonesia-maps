import React from 'react';
import Wrapper from './Wrapper';
import Television from './Television';
import Radio from './Radio';

const PageList = ({ activeTab, televisions, radios }) => (
  <Wrapper>
    <ul class='features-list list-unstyled'>
      {activeTab === 'televisions' &&
        televisions &&
        televisions.map((television, index) => (
          <Television television={television}></Television>
        ))}
      {activeTab === 'radios' &&
        radios &&
        radios.map((radio, index) => <Radio radio={radio}></Radio>)}
    </ul>
  </Wrapper>
);

export default PageList;
