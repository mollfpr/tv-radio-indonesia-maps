import React, { useState } from 'react';
import MapChart from './MapChart';
import ReactTooltip from 'react-tooltip';

const Maps = () => {
  const [content, setContent] = useState('');

  return (
    <section
      class="elementor-element elementor-element-d687317 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
      data-id="d687317"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-row">
          <div
            class="elementor-element elementor-element-b04173b elementor-column elementor-col-100 elementor-top-column"
            data-id="b04173b"
            data-element_type="column"
          >
            <div class="elementor-column-wrap  elementor-element-populated">
              <div class="elementor-widget-wrap">
                <div
                  class="elementor-element elementor-element-01b18ac elementor-widget elementor-widget-html"
                  data-id="01b18ac"
                  data-element_type="widget"
                  data-widget_type="html.default"
                >
                  <div class="elementor-widget-container">
                    <MapChart setTooltipContent={setContent} />
                    <ReactTooltip>{content}</ReactTooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
