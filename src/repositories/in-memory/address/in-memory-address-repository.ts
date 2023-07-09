import { Many } from '@/@types/common'
import { IAddressRepository } from '@/repositories/address/iadress-repository'
import { Address } from '@prisma/client'

export class InMemoryAddressRepository implements IAddressRepository {
  public items: Many<Address> = []

  async _create<Includes = Address>(
    data: Includes,
  ): Promise<void | Address | any> {
    this.items.push(data as Address)

    return data
  }

  async _delete(id: string): Promise<boolean | void | Address> {
    const currentLenght = this.items.length
    const updatedItems = this.items.filter((item) => item.id !== id)

    this.items = updatedItems

    return currentLenght < this.items.length
  }

  async _exists<Includes = Partial<Address>>(
    data: Includes,
  ): Promise<boolean | Address> {
    return !!data
  }

  async _findAll(): Promise<Many<Address>> {
    return this.items
  }

  async _findById(id: string): Promise<void | Address> {
    const address = this.items.find((item) => item.id === id)

    if (!address) {
      return {} as Address
    }

    return address
  }
}
