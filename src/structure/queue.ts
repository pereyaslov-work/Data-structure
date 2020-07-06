export interface IQueue<T> {
  dequeue: () => void,
  enqueue: (item: T) => void,
  size: number,
  isEmpty: boolean,
  queue: T[]
}

export default class Queue<T> implements IQueue<T> {
  private _queue: T[] = []

  constructor(queue: T[] = []) {
    this._queue = queue
  }

  dequeue() {
    return this._queue.shift()
  }

  enqueue(item: T) {
    this._queue.push(item)
  }

  get size() {
    return this._queue.length
  }

  get isEmpty() {
    return this._queue.length === 0
  }

  get queue() {
    return this._queue
  }
}
