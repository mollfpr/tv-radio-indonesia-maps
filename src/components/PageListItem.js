import React from 'react';

const PageListItem = ({ label }) => (
  <li class="features-list__item">
    <div class="features-list__icon">
      <i class="ion-radio-waves"></i>
    </div>
    <h5 class="features-list__title">{label}</h5>
  </li>
);

export default PageListItem;
