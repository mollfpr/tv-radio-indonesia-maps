import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import Header from './components/Header';
import './sass/App.scss';
import './assets/css/simple-line-icons.css';
import './assets/css/ionicons.min.css';
import Maps from './components/Maps';
import PageTitle from './components/PageTitle';
import PageList from './components/PageList';
import { MapContext } from './components/contexts/MapContex';
import StickyButton from './components/StickyButton';
import { Transition } from 'react-spring/renderprops';
import PageNav from './components/PageNav';
import apiTelevisions from './api/televisions';
import apiRadios from './api/radios';

const App = () => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [televisions, setTelevisions] = useState(null);
  const [radios, setRadios] = useState(null);
  const [activeTab, setActiveTab] = useState('television');
  const [loading, setLoading] = useState(false);

  const getTelevisions = async province => {
    setLoading(true);

    const data = await apiTelevisions(province);

    setTelevisions(data);
    setLoading(false);
  };

  const getRadios = async province => {
    setLoading(true);

    const data = await apiRadios(province);

    setRadios(data);
    setLoading(false);
  };

  const handleGeographyClick = ({ properties }) => {
    const { provinsi } = properties;
    document.getElementById('list').style.minHeight = '600px';
    setCurrentCountry(null);
    document.getElementById('list').scrollIntoView({
      behavior: 'smooth'
    });
    setTimeout(() => {
      setCurrentCountry(provinsi);
      setActiveTab('televisions');
      getTelevisions(provinsi);
    }, 500);
  };

  const handleReset = () => {
    setCurrentCountry(null);
    document.getElementById('content').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleTabClick = tab => {
    if (tab === 'televisions') {
      getTelevisions(currentCountry);
    } else {
      getRadios(currentCountry);
    }

    setActiveTab(tab);
  };

  return (
    <div className='site-wrapper'>
      <Header></Header>

      <StickyButton onReset={handleReset}></StickyButton>

      <main id='content' class='site-content'>
        <div class='section-content'>
          <div class='container'>
            <article
              id='post-589'
              class='post-589 page type-page status-publish hentry'
            >
              <div class='entry-content'>
                <div
                  data-elementor-type='wp-page'
                  data-elementor-id='589'
                  class='elementor elementor-589'
                  data-elementor-settings='[]'
                >
                  <div class='elementor-inner'>
                    <div class='elementor-section-wrap'>
                      <PageTitle title='List Radio Indonesia'></PageTitle>

                      <div id='maps' className='map-container'>
                        <MapContext.Provider
                          value={{
                            onGeographyClick: handleGeographyClick,
                            currentCountry
                          }}
                        >
                          <Maps></Maps>
                        </MapContext.Provider>
                      </div>

                      <div id='list'>
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

                                {loading && (
                                  <div className='flex justify-center'>
                                    <ReactLoading type='spin'></ReactLoading>
                                  </div>
                                )}

                                {!loading && (
                                  <PageList
                                    activeTab={activeTab}
                                    televisions={televisions}
                                    radios={radios}
                                  ></PageList>
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
