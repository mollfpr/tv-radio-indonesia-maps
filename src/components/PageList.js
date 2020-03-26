import React from 'react';
import Wrapper from './Wrapper';
import PageListItem from './PageListItem';

const radio = [
  'Hard Rock FM (PM2FPB)',
  'RRI Pro 3',
  'Mustang FM (PM2FHF)',
  'Delta FM',
  'Cosmopolitan FM (PM2FAP)',
  'Global Radio'
];

const PageList = () => (
  <Wrapper>
    <ul class="features-list list-unstyled">
      {radio.map((o, index) => (
        <PageListItem key={index} label={o}></PageListItem>
      ))}
    </ul>
  </Wrapper>
);

export default PageList;
