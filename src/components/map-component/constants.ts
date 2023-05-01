import { mapCoordsArrayToGeoJson, rusEmpCoords, gerEmpCoords, ausEmpCoords } from './coord-arrays'

export const initialViewState = {
  longitude: 24.647778,
  latitude: 51,
  zoom: 4.9,
}

export const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZG9taW5pay1kb21hbnNraSIsImEiOiJjbGd1cWI2YjIwYWZpM3NwZ2NhYzFmbXZhIn0.HN6EB3nz3-6VN-PM2-anIA'

// export const MAP_STYLE = 'mapbox://styles/dominik-domanski/clgyu35fw00fh01qy89awhwrn' // custom green_blue
// export const MAP_STYLE = 'mapbox://styles/dominik-domanski/clh2w92o700nm01qy8mtq10ht' //light modified
export const MAP_STYLE = 'mapbox://styles/dominik-domanski/clh2wxkii00n801pgb17c5y61' //dark modified

export const empData = {
  rus: {
    emp: 'rus',
    data: mapCoordsArrayToGeoJson(rusEmpCoords),
  },
  ger: {
    emp: 'ger',
    data: mapCoordsArrayToGeoJson(gerEmpCoords),
  },
  aus: {
    emp: 'aus',
    data: mapCoordsArrayToGeoJson(ausEmpCoords),
  },
}

export const legendItemsArray = [
  { name: 'Cesarstwo Niemieckie', color: 'rgb(127, 218, 124)' },
  { name: 'Austro-Węgry', color: 'rgb(87, 142, 247)' },
  { name: 'Imperium Rosyjskie', color: 'rgb(253, 201, 68)' },
]
