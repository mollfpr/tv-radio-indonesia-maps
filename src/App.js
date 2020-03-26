import React from 'react';
import Header from './components/Header';
import './sass/App.scss';
import './assets/css/simple-line-icons.css';
import './assets/css/ionicons.min.css';
import Maps from './components/Maps';
import PageTitle from './components/PageTitle';
import PageList from './components/PageList';

const App = () => {
  return (
    <div className="site-wrapper">
      <Header></Header>

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

                      <Maps></Maps>

                      <PageTitle title="Jakarta"></PageTitle>

                      <PageList></PageList>
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
