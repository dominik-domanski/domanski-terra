import { Layer, Source } from 'react-map-gl'

import { empData } from '../map-component/constants'
import { getHeatmapLayer } from '../map-component/map-styles'

export default function LossesSource() {
  return (
    <>
      {Object.values(empData).map(({ emp, data }) => (
        <Source key={emp} id={emp} type='geojson' data={data}>
          <Layer {...getHeatmapLayer(emp as 'rus' | 'ger' | 'aus')} />
        </Source>
      ))}
    </>
  )
}
