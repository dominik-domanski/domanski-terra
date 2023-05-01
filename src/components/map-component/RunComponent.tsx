import Map, { Layer, NavigationControl, Source } from 'react-map-gl'

import { getHeatmapLayer } from './map-styles'
import { MAPBOX_TOKEN, MAP_STYLE, empData, initialViewState } from './constants'
import { MapLegend } from '../legend/MapLegend'
import { PolskaGeo } from '../polska-geo/PolskaGeo'

export default function RunComponent() {
  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={initialViewState}
      style={{ width: '100%', height: '100vh' }}
      mapStyle={MAP_STYLE}>
      {Object.values(empData).map(({ emp, data }) => (
        <Source key={emp} id={emp} type='geojson' data={data}>
          <Layer {...getHeatmapLayer(emp as 'rus' | 'ger' | 'aus')} />
        </Source>
      ))}
      <PolskaGeo />
      <MapLegend />
      <NavigationControl position='top-left' />
    </Map>
  )
}
