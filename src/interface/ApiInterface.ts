interface IndexRest {
  getIndexInfo: Function
  getCarSources: Function
  getUsers: Function
  getIntends: Function
  getExchange: Function
}

export default interface Api {
  index: IndexRest
}
