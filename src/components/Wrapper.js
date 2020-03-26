import React from 'react';

const Wrapper = ({ children }) => (
  <section
    class="elementor-element elementor-element-d7cfc47 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
    data-id="d7cfc47"
    data-element_type="section"
  >
    <div class="elementor-container elementor-column-gap-default">
      <div class="elementor-row">
        <div
          class="elementor-element elementor-element-b9638e1 elementor-column elementor-col-100 elementor-top-column"
          data-id="b9638e1"
          data-element_type="column"
        >
          <div class="elementor-column-wrap  elementor-element-populated">
            <div class="elementor-widget-wrap">
              <div
                class="elementor-element elementor-element-a3eeb59 elementor-widget elementor-widget-escapium-heading-title"
                data-id="a3eeb59"
                data-element_type="widget"
                data-widget_type="escapium-heading-title.default"
              >
                <div class="elementor-widget-container">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Wrapper;
