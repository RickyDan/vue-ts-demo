interface IndexRest {
  getIndexInfo: Function
}

interface HomeRest {
  getOrderList: Function
}

export default interface Api {
  index: IndexRest
  orders: HomeRest
}
