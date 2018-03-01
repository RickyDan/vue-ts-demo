export interface Params {
  start_time: string
  status: number
  vin: string
  count: number,
  per_page: number
}

interface List {
  id: number,
  serie_name: string
  vin: string
  status_text: string
  status: number
  last_updated: string
}

interface SourceList {
  count: number
  car_series: Array<List>
}

export interface Res {
  code: number
  messaeg: string
  data: SourceList
}
