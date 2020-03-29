import React, { useState } from 'react';
import Header from './components/Header';
import './sass/App.scss';
import './assets/css/simple-line-icons.css';
import './assets/css/ionicons.min.css';
import Maps from './components/Maps';
import PageTitle from './components/PageTitle';
import PageList from './components/PageList';
import { MapContext } from './components/contexts/MapContex';
import clsx from 'clsx';
import StickyButton from './components/StickyButton';
import { Transition } from 'react-spring/renderprops';
import PageNav from './components/PageNav';

const App = () => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [televisions, setTelevisions] = useState(null);
  const [radio, setRadio] = useState(null);
  const [activeTab, setActiveTab] = useState('television');

  const handleGeographyClick = ({ properties }) => {
    const { provinsi, televisions } = properties;
    document.getElementById('list').style.minHeight = '600px';
    setCurrentCountry(null);
    document.getElementById('list').scrollIntoView({
      behavior: 'smooth'
    });
    setTimeout(() => {
      setCurrentCountry(provinsi);
      setTelevisions(televisions || null);
    }, 500);
  };

  const handleReset = () => {
    setCurrentCountry(null);
    document.getElementById('content').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleTabClick = tab => setActiveTab(tab);

  return (
    <div className="site-wrapper">
      <Header></Header>

      <StickyButton onReset={handleReset}></StickyButton>

      <main id="content" class="site-content">
        <div class="section-content">
          <div class="container">
            <article
              id="post-589"
              class="post-589 page type-page status-publish hentry"
            >
              <div class="entry-content">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id="589"
                  class="elementor elementor-589"
                  data-elementor-settings="[]"
                >
                  <div class="elementor-inner">
                    <div class="elementor-section-wrap">
                      <PageTitle title="List Radio Indonesia"></PageTitle>

                      <div id="maps">
                        <MapContext.Provider
                          value={{
                            onGeographyClick: handleGeographyClick,
                            currentCountry
                          }}
                        >
                          <Maps></Maps>
                        </MapContext.Provider>
                      </div>

                      <div id="list">
                        <Transition
                          items={!!currentCountry}
                          from={{ opacity: 0 }}
                          enter={{ opacity: 1 }}
                          leave={{ opacity: 0 }}
                        >
                          {show =>
                            show &&
                            (props => (
                              <div style={props}>
                                <PageTitle title={currentCountry}></PageTitle>

                                <PageNav
                                  onTabClick={handleTabClick}
                                  activeTab={activeTab}
                                ></PageNav>

                                {activeTab === 'television' && (
                                  <PageList
                                    televisions={televisions}
                                  ></PageList>
                                )}
                                {activeTab === 'radio' && (
                                  <PageList radio={radio}></PageList>
                                )}
                              </div>
                            ))
                          }
                        </Transition>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
