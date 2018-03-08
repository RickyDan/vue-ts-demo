interface List {
  id: number
  name: string
  mobile: string
  car_num: string
  series: string
  commit_at: string
}

interface ExchangeList {
  id: number
  serie: string
  old_serie: string
  commit_at: string
}

export interface Params {
  per_page: number
  count: number
  time: string
  active: string
}

interface IntendSource {
  count: number
  list: Array<List>
}

interface ExchangeSource {
  count: number
  list: Array<ExchangeList>
}

export interface Res {
  message: string
  code: number
  data: IntendSource
}

export interface ResExchange {
  message: string
  code: number
  data: ExchangeSource
}
