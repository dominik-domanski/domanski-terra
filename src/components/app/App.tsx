import { StrictMode } from 'react'
import '../../../public/styles/styles.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

import RunComponent from '../map-component/RunComponent'

export const App = (): JSX.Element => (
  // <StrictMode>
  <RunComponent />
  // </StrictMode>
)
