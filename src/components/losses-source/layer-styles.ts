import { HeatmapLayer } from 'react-map-gl'

export const MAX_ZOOM_LEVEL = 9

const heatMapRampMap = {
  ger: [
    0,
    'rgba(33,102,172,0)',
    0.2,
    'rgb(206, 234, 202)',
    0.4,
    'rgb(188, 230, 182)',
    0.6,
    'rgb(169, 226, 163)',
    0.8,
    'rgb(149, 222, 144)',
    0.9,
    'rgb(127, 218, 124)',
  ],
  rus: [
    0,
    'rgba(33,102,172,0)',
    0.2,
    'rgb(245, 224, 189)',
    0.4,
    'rgb(249, 218, 161)',
    0.6,
    'rgb(252, 212, 132)',
    0.8,
    'rgb(253, 207, 102)',
    0.9,
    'rgb(253, 201, 68)',
  ],
  aus: [
    0,
    'rgba(33,102,172,0)',
    0.2,
    'rgb(217, 225, 255)',
    0.4,
    'rgb(189, 204, 254)',
    0.6,
    'rgb(159, 183, 252)',
    0.8,
    'rgb(127, 162, 250)',
    0.9,
    'rgb(87, 142, 247)',
  ],
}

export const getHeatmapLayer = (empire: 'rus' | 'ger' | 'aus'): HeatmapLayer => {
  return {
    id: empire,
    maxzoom: MAX_ZOOM_LEVEL,
    type: 'heatmap',
    paint: {
      // Increase the heatmap weight based on frequency and property magnitude
      'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
      // Increase the heatmap color weight weight by zoom level
      // heatmap-intensity is a multiplier on top of heatmap-weight
      'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
      // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
      // Begin color ramp at 0-stop with a 0-transparancy color
      // to create a blur-like effect.
      'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], ...heatMapRampMap[empire]],
      // Adjust the heatmap radius by zoom level
      'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, 20],
      // Transition from heatmap to circle layer by zoom level
      'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0],
    },
  }
}
