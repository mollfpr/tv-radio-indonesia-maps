import React from 'react';

const Television = ({ television }) => (
  <li class='features-list__item'>
    <div class='features-list__icon'>
      <i class='ion-monitor'></i>
    </div>
    <div>
      <div className='d-flex align-items-center'>
        <h5 className='features-list__title fs-mid'>{television.name}</h5>{' '}
        &bull;{' '}
        <span className='feature-list__genre fs-mid'>{television.genre}</span>
      </div>
      <div>
        <span className='features-list__group fs-mid'>{television.group}</span>
        &bull;{' '}
        <span className='features-list__website fs-mid'>
          {television.website}
        </span>
      </div>
    </div>
  </li>
);

export default Television;
