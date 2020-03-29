import React from 'react';

const PageListItem = ({ isTelevision, television }) => (
  <li class="features-list__item">
    <div class="features-list__icon">
      <i class={`ion-${isTelevision ? 'monitor' : 'radio-waves'}`}></i>
    </div>
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <h5 className="features-list__title">{television.name}</h5> &bull;{' '}
        <span className="feature-list__genre">{television.genre}</span>
      </div>
      <div>
        <span>{television.group}</span>
      </div>
    </div>
  </li>
);

export default PageListItem;
