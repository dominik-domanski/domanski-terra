import { Layer, Source } from 'react-map-gl'

import { getHeatmapLayer } from './layer-styles'
import { empData } from './constants'

export function LossesSource() {
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
