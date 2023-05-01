export const legendItemsArray = [
  { name: 'Cesarstwo Niemieckie', color: 'rgb(127, 218, 124)' },
  { name: 'Austro-Węgry', color: 'rgb(87, 142, 247)' },
  { name: 'Imperium Rosyjskie', color: 'rgb(253, 201, 68)' },
]

const title =
  'Miejscowości rodzinne żołnierzy poległych, rannych, jeńców lub zaginionych w I wojnie światowej o nazwisku Domański'

export function MapLegend() {
  return (
    <div className='legend-ctrl'>
      <div className='legend-title'>{title}</div>
      <div className='legend-items'>
        {legendItemsArray.map(({ name, color: background }) => (
          <div className='legend-item' key={name}>
            <div className='legend-color' style={{ background }} />
            <div>{name}</div>
          </div>
        ))}
      </div>
      <div className='legend-item'>
        <div className='legend-border' />
        <div>Granice historyczne z r. 1770</div>
      </div>
    </div>
  )
}
