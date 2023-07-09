import { MaybeNull, Many } from '@/@types/common'
import { ISupermarketRepository } from '@/repositories/supermarkets/isupermarket-repository'
import { Supermarket } from '@prisma/client'

export class InMemorySupermarketRepository implements ISupermarketRepository {
  public items: Many<Supermarket> = []

  async findAll(names: Many<string>): Promise<MaybeNull<Many<Supermarket>>> {
    return this.items.filter((item) => names.includes(item.name))
  }

  async _create<Includes = Supermarket>(data: Includes): Promise<any> {
    this.items.push(data as Supermarket)

    return data
  }

  async _delete(id: string): Promise<boolean | void | Supermarket> {
    const currentLenght = this.items.length
    const updatedItems = this.items.filter((item) => item.id !== id)

    this.items = updatedItems

    return currentLenght < this.items.length
  }

  async _exists<Includes = Partial<Supermarket>>(
    data: Includes,
  ): Promise<boolean | Supermarket> {
    return !!data
  }

  async _findAll(): Promise<Many<Supermarket>> {
    return this.items
  }

  async _findById(id: string): Promise<Supermarket> {
    const supermarket = this.items.find((item) => item.id === id)

    if (!supermarket) {
      return {} as Supermarket
    }

    return supermarket
  }
}
