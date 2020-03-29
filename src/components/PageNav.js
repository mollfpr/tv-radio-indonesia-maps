import React from 'react';
import clsx from 'clsx';

const PageNav = ({ onTabClick, activeTab }) => (
  <nav className="nav nav-pills nav-fill mb-4">
    <a
      href="javascript:;"
      onClick={() => onTabClick('television')}
      className={clsx(
        'nav-item nav-link',
        activeTab === 'television' && 'active'
      )}
    >
      Television
    </a>
    <a
      href="javascript:;"
      onClick={() => onTabClick('radio')}
      className={clsx('nav-item nav-link', activeTab === 'radio' && 'active')}
    >
      Radio
    </a>
  </nav>
);

export default PageNav;
