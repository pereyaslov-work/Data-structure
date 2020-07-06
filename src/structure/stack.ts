export interface IStack<T> {
  push: (item: T) => void,
  pop: () => void,
  peek: T,
  size: number,
  isEmpty: boolean,
  stack: T[]
}

export default class Stack<T> implements IStack<T>{
  private _stack: T[] = []

  constructor(stack: T[] = []) {
    this._stack = stack
  }

  pop() {
    this._stack.pop()
  }

  push(item: T) {
    this._stack.push(item)
  }

  get peek() {
    return this._stack[this._stack.length - 1]
  }

  get size() {
    return this._stack.length
  }

  get isEmpty() {
    return this._stack.length === 0
  }

  get stack() {
    return this._stack
  }
}
