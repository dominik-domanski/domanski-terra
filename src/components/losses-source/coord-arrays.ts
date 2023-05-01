import { ausList } from '../../../data/domanski_gw_aus_clean'
import { gerList } from '../../../data/domanski_gw_ger_clean'
import { cleanList } from '../../../data/domanski_gw_ri_clean'

export const rusEmpCoords = Array.from(
  new Set(
    cleanList
      .filter(({ isCoord }) => isCoord)
      .map(({ coord }) => {
        const [lat, lng] = coord.split(',')
        return [+lng, +lat]
      }),
  ),
) as Array<Array<number>>

export const gerEmpCoords = gerList.geometry.coordinates

export const ausEmpCoords = ausList.geometry.coordinates.map(([lat, lng]) => [lng, lat])

export function mapCoordsArrayToGeoJson(coordArray: Array<Array<number>>) {
  return coordArray.reduce(
    (agg, coordinates) => {
      agg.features.push({ type: 'Feature', geometry: { type: 'Point', coordinates } })
      return agg
    },
    {
      type: 'FeatureCollection',
      features: [] as Array<{ type: string; geometry: { type: string; coordinates: Array<number> } }>,
    },
  ) as GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>
}
