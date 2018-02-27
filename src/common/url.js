export default {
  getSearch (hash, searchs) {
    hash = hash || window.localtion.hash
    let index = hash.indexOf('?')
    let o = {}
    let item
    searchs = searchs || [window.location.search, index !== -1 ? hash.substr(index) : '']
    searchs.forEach(search => {
      if (search) {
        search = search.substr(1).split('&')
        search.forEach(val => {
          item = val.split('=')
          o[item[0]] = item[1]
        })
      }
    })
    return o
  }
}
