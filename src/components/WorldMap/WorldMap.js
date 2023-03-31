import React from "react";
import './WorldMap.css';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import features from "./features.json";

const WorldMap = () => {
  return (
    <div className="worldmap">
        <ComposableMap>
          <Geographies geography={features}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
  );
};

export default WorldMap;