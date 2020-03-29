import React from 'react';
import Wrapper from './Wrapper';
import PageListItem from './PageListItem';
import { Trail } from 'react-spring/renderprops';

const radio = [
  'Hard Rock FM (PM2FPB)',
  'RRI Pro 3',
  'Mustang FM (PM2FHF)',
  'Delta FM',
  'Cosmopolitan FM (PM2FAP)',
  'Global Radio'
];

const PageList = ({ televisions, radio }) => (
  <Wrapper>
    <ul class="features-list list-unstyled">
      {televisions &&
        televisions.map((television, index) => (
          <PageListItem isTelevision television={television}></PageListItem>
        ))}
      {radio &&
        radio.map((radio, index) => (
          <PageListItem radio={radio}></PageListItem>
        ))}
    </ul>
  </Wrapper>
);

export default PageList;
