import React from 'react';

const Radio = ({ radio }) => (
  <li class='features-list__item'>
    <div class='features-list__icon'>
      <i class='ion-radio-waves'></i>
    </div>
    <div>
      <div className='d-flex align-items-center'>
        <h5 className='features-list__title fs-mid'>{radio.name}</h5> &bull;{' '}
        <span className='feature-list__genre fs-mid'>
          {radio.wave} {radio.type_formatted}
        </span>
      </div>
      <div>
        <span className='features-list__group fs-mid'>{radio.description}</span>
      </div>
    </div>
  </li>
);

export default Radio;
