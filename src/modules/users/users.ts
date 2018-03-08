interface List {
  id: number
  login_name: string
  email: string
  connector: string
  created: string
  status: number
  statusText: string
}

interface UserList {
  count: number
  user_list: Array<List>
}

export interface Res {
  code: number
  message: string
  data: UserList
}
