import { FillLayer, Layer, Source } from 'react-map-gl'

import { distribution } from '../../data/domanski_distribution'

const binaryLayer: FillLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'domanski',
      stops: [
        [0, 'transparent'],
        [1, '#FF778E'],
      ],
    },
    'fill-opacity': 0.5,
  },
}

const perTenThousand: FillLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'domanski',
      stops: [
        [0, 'transparent'],
        [1, '#FF778E'],
      ],
    },
    'fill-opacity': 0.5,
  },
}

export function SpatialDistributionView() {
  return (
    <Source id='spatial' type='geojson' data={distribution}>
      <Layer {...binaryLayer} />
    </Source>
  )
}
