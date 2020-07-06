export interface IList<T> {
  push: (item: T) => void,
  unshift: (item: T) => void,
  pop: () => void,
  shift: () => void,
  size: number,
  list: T[]
}

export default class List<T> implements IList<T> {
  private _list: T[] = []

  constructor(list: T[]) {
    this._list = list
  }

  push(item: T) {
    this._list.push(item)
  }

  pop() {
    this._list.pop()
  }

  unshift(item: T) {
    this._list.unshift(item)
  }

  shift() {
    this._list.shift()
  }

  get size() {
    return this._list.length
  }

  get list() {
    return this._list
  }
}
