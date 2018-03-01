interface IndexRest {
  getIndexInfo: Function
  getCarSources: Function
}

export default interface Api {
  index: IndexRest
}
