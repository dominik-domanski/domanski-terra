import { LineLayer } from 'react-map-gl'

export const getMultipolygonLayer = (): LineLayer => {
  return {
    id: '1770',
    type: 'line',
    layout: {
      'line-join': 'bevel',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#EF653C',
      'line-width': 2,
      'line-dasharray': [2, 2],
    },
    metadata: {
      name: 'Granice Historyczne',
      labels: {
        10: 'Custom label for value 10',
        other: '< 1k/km²',
        an_item_to_hide: false,
      },
    },
  }
}
