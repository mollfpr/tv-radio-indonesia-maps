import React from 'react';

const PageListItem = ({ isTelevision, television }) => (
  <li class="features-list__item">
    <div class="features-list__icon">
      <i class={`ion-${isTelevision ? 'monitor' : 'radio-waves'}`}></i>
    </div>
    <h5 class="features-list__title">{television.name}</h5>
    <div>
      <span>{television.genre}</span>&bull;<span>{television.group}</span>
    </div>
  </li>
);

export default PageListItem;
