import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setScrollPosition(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      class={clsx(
        'header pinning-nav header--nav-position-default',
        scrollPosition > 150 ? 'unpinned' : 'pinned pinning-top'
      )}
    >
      <div class="header__logo header__logo--txt">
        <a href="http://disc.creads.id/" rel="home">
          <p class="site-title">Gampang Ngiklan</p>
        </a>
      </div>

      <nav class="main-nav">
        <ul
          id="primary-menu"
          class="main-nav__list main-nav__list--active-diagonal-line main-nav__list--hover-diagonal-line"
        >
          <li
            id="menu-item-513"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-513"
          >
            <a href="http://disc.creads.id/">Home</a>
          </li>
          <li
            id="menu-item-520"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-520 has-children"
          >
            <span class="main-nav__toggle"></span>
            <a href="#">Start Advertise</a>
            <ul class="sub-menu">
              <li
                id="menu-item-649"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-649"
              >
                <a href="#">Radio Listing</a>
              </li>
              <li
                id="menu-item-650"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-650"
              >
                <a href="#">TV Listing</a>
              </li>
              <li
                id="menu-item-651"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-651"
              >
                <a href="#">Starter Package</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-514"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-514 has-children"
          >
            <span class="main-nav__toggle"></span>
            <a href="http://disc.creads.id/about/">Why Us</a>
            <ul class="sub-menu">
              <li
                id="menu-item-652"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-652"
              >
                <a href="#">About Us</a>
              </li>
              <li
                id="menu-item-653"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-653"
              >
                <a href="#">Partnership</a>
              </li>
              <li
                id="menu-item-654"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-654"
              >
                <a href="#">Advertiser Detail</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-516"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-516 has-children"
          >
            <span class="main-nav__toggle"></span>
            <a href="http://disc.creads.id/faqs/">Tutorial</a>
            <ul class="sub-menu">
              <li
                id="menu-item-655"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-655"
              >
                <a href="#">Detail (Step by Step)</a>
              </li>
              <li
                id="menu-item-656"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-656"
              >
                <a href="#">Case Study</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-518"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-518"
          >
            <a href="http://disc.creads.id/contacts/">Contact Us</a>
          </li>
          <li class="nav-secondary__login">
            <a href="http://disc.creads.id/login/">
              <i class="icon-user"></i>
              <span class="link-label">Sign In</span>
            </a>
          </li>
        </ul>{' '}
      </nav>

      <div class="header__spacer"></div>

      <nav class="header__nav header__nav--secondary">
        <a
          href="http://disc.creads.id/appointments/"
          class="btn btn-outline-secondary nav-btn"
        >
          <span class="nav-btn__label">Book Now!</span>{' '}
          <i class="nav-btn__icon icon-calendar"></i>
        </a>

        <ul class="nav-secondary">
          <li class="nav-secondary__search">
            <div class="search-form-control js-search-form-control">
              <div class="search-form-toggler"></div>
              <i class="icon-magnifier search-form-toggler__icon"></i>
            </div>
          </li>

          <li class="nav-secondary__login">
            <a href="http://disc.creads.id/login/">
              <i class="icon-user"></i>
              <span class="link-label">Sign In</span>
            </a>
          </li>
        </ul>
      </nav>

      <a id="header-mobile__toggle" class="burger-menu-icon">
        <span class="burger-menu-icon__line"></span>
        <span class="burger-menu-icon__line"></span>
        <span class="burger-menu-icon__line"></span>
      </a>
    </header>
  );
};

export default Header;
