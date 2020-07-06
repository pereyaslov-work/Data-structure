export interface IHashTable<T> {
  get: (key: string) => T,
  set: (key: string, item: T) => void,
  delete: (key: string) => void
}

export default class HashTable<T> implements IHashTable<T> {
  private hashTable: T[] = []

  constructor(hashTable: T[]) {
    this.hashTable = hashTable
  }

  get(key: string) {
    const address = this.hashKey(key)
    return this.hashTable[address]
  }

  set(key: string, item: T) {
    const address = this.hashKey(key)
    this.hashTable[address] = item
  }

  delete(key: string) {
    const address = this.hashKey(key)

    if (this.hashTable[address]) {
      delete this.hashTable[address]
    }
  }

  private hashKey(key: string) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      const code = key.charCodeAt(index)
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }
}
