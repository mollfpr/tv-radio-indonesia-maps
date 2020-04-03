import React from 'react';
import clsx from 'clsx';

const PageNav = ({ onTabClick, activeTab }) => (
  <nav className='nav nav-pills nav-fill mb-4'>
    <a
      href='javascript:;'
      onClick={() => onTabClick('televisions')}
      className={clsx(
        'nav-item nav-link',
        activeTab === 'televisions' && 'active'
      )}
    >
      Television
    </a>
    <a
      href='javascript:;'
      onClick={() => onTabClick('radios')}
      className={clsx('nav-item nav-link', activeTab === 'radios' && 'active')}
    >
      Radio
    </a>
  </nav>
);

export default PageNav;
