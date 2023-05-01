import Map, { NavigationControl } from 'react-map-gl'

import { MAPBOX_TOKEN, MAP_STYLE, initialViewState } from './constants'
import { ReactNode } from 'react'

export default function MapboxMap({ children }: { children: ReactNode }) {
  return (
    <Map
      initialViewState={initialViewState}
      mapboxAccessToken={MAPBOX_TOKEN}
      style={{ width: '100%', height: '100vh' }}
      mapStyle={MAP_STYLE}>
      {children}
      <NavigationControl />
    </Map>
  )
}
