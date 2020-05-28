import {
    ComposableMap, Geographies, Geography
} from 'react-simple-maps';

import React from 'react'

import { View } from 'react-native'

const INDIA_TOPO_JSON = require('./Indian_States.json');

const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937]
};

import { WebView } from 'react-native-webview';

var data = [{
    type: "choroplethmapbox", locations: ["NY", "MA", "VT"], z: [-50, -10, -20],
    geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json"
}];

export default class PlotlyGlobal extends React.Component {
    render() {
        return (
            <View style={{
                width: 400,
                height: 200
            }}>

            </View>
        )
    }

}



{/*<WebView
                    style={{
                        width: 400,
                        height: 200
                    }}
                source={{ uri: 'https://3586035908bc.ngrok.io/world' }} />*/}