import { mapCoordsArrayToGeoJson, rusEmpCoords, gerEmpCoords, ausEmpCoords } from './coord-arrays'

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
