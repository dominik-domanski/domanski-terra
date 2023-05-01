import { MapLegend } from '../components/legend/MapLegend'
import { PolskaGeo } from '../components/polska-geo/PolskaGeo'
import { LossesSource } from '../components/losses-source/LossesSource'

export function GreatWarLossesView() {
  return (
    <>
      <LossesSource />
      <PolskaGeo />
      <MapLegend />
    </>
  )
}
