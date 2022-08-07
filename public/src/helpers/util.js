function sortByCount (array, isAscendingOrder){
    if (isAscendingOrder) {
      return  array.sort((a,b) => a.count - b.count)
    }
    return array.sort((a,b) => b.count - a.count)
}

module.exports = {sortByCount}