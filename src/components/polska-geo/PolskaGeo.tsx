import { Source, Layer } from 'react-map-gl'
import { getMultipolygonLayer } from '../map-component/map-styles'
import { polskaGeo } from '../../../data/polska_1770'

export function PolskaGeo() {
  return (
    <Source id='1770' type='geojson' data={polskaGeo}>
      <Layer {...getMultipolygonLayer()} />
    </Source>
  )
}
