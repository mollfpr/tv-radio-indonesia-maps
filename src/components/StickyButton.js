import React from 'react';

const StickyButton = ({ onReset }) => (
  <div className="sticky">
    <button type="button" onClick={onReset}>
      <i className="ion-arrow-up-a"></i>
    </button>
  </div>
);

export default StickyButton;
