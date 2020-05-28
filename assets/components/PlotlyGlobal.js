import React, { Component } from "react"
import { scaleLinear } from "d3-scale"
// If you want to use an object instead of requesting a file:
import geographyObject from "./india.topo.json"

import Svg, { Circle, Rect } from 'react-native-svg';
 
const colorScale = scaleLinear()
  .domain([0, 100000000, 1338612970]) // Max is based on China
    .range(["#FFF176", "#FFC107", "#E65100"])
  
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from "react-simple-maps"


import {
    View
} from 'react-native'

 
class PlotlyGlobal extends Component {
  render() {
    return (
      <View>
        <ComposableMap style={{ width: "100%" }}>
          <ZoomableGroup>
                    <Geographies geography={"./datamaps.world.min.js"} disableOptimization>
              {" "}
              // if you are using the object, then geography={geographyObject}
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={`geography-${i}`}
                    cacheId={`geography-${i}`}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: colorScale(geography.properties.pop_est),
                        stroke: "#FFF",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </View>
    )
  }
}
 
export default PlotlyGlobal