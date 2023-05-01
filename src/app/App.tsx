import { StrictMode } from 'react'
import '../../public/styles/styles.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

import MapboxMap from '../components/map-component/MapComponent'
import { GreatWarLossesView } from '../views/GreatWarLossesView'

export const App = (): JSX.Element => (
  <StrictMode>
    <MapboxMap>
      <GreatWarLossesView />
    </MapboxMap>
  </StrictMode>
)
