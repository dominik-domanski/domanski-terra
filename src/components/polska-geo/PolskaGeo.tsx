import { Source, Layer } from 'react-map-gl'
import { polskaGeo } from '../../../data/polska_1770'
import { getMultipolygonLayer } from './layer-styles'

export function PolskaGeo() {
  return (
    <Source id='1770' type='geojson' data={polskaGeo}>
      <Layer {...getMultipolygonLayer()} />
    </Source>
  )
}
