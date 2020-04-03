import React, { useContext } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { Spring, config } from 'react-spring/renderprops';
import { MapContext } from './contexts/MapContex';

const geoUrl = require('../data/provinces-simplified-topo.json');

const MapChart = ({ setTooltipContent }) => {
  const { currentCountry, onGeographyClick } = useContext(MapContext);
  const center = [118, -2];
  const zoom = 5;
  const [width, height] = [500, 250];

  const handleMounseEnter = ({ properties }) => {
    const { provinsi } = properties;
    setTooltipContent(provinsi);
  };

  const handleMouseLeave = () => setTooltipContent('');

  return (
    <div>
      <Spring
        from={{ zoom: 1, center: [118, -2] }}
        to={{ zoom, center }}
        config={config.slow}
      >
        {styles => (
          <ComposableMap data-tip='' width={width} height={height}>
            <ZoomableGroup center={styles.center} zoom={styles.zoom}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => handleMounseEnter(geo)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => onGeographyClick(geo)}
                      style={{
                        default: {
                          fill:
                            geo.rsmKey === currentCountry ? '#E42' : '#D6D6DA',
                          outline: 'none'
                        },
                        hover: {
                          fill: '#F53',
                          outline: 'none'
                        },
                        pressed: {
                          fill: '#E42',
                          outline: 'none'
                        }
                      }}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        )}
      </Spring>
    </div>
  );
};

export default MapChart;
