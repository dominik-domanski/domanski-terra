export type TPerson = {
  id: string
  birth_date: string | null
  birth_place_gubernia: string | null
  birth_place_uezd: string | null
  birth_place_volost: string | null
  birth_place: string | null
  doc_type: string
  first_name: string
  last_name: string
  middle_name?: string
  military_unit_id: number | null
  military_unit_name: string | null
  originalId: number
  isDuplicate?: boolean
}
