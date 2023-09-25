import { MaybeNull, Many } from '@/@types/common'
import { ProductWithSupermarket, TGetProducts } from '@/@types/products'
import { IProductRepository } from '@/repositories/products/iproduct-repository'
import { Product } from '@prisma/client'

export class InMemoryProductRepository implements IProductRepository {
  public items: Many<Product> = []

  async findAll({
    page,
  }: TGetProducts): Promise<MaybeNull<Many<ProductWithSupermarket>>> {
    const data = this.items
      .map((p) => ({
        ...p,
        Supermarket: {
          name: '',
          location: '',
          city: '',
          state: '',
        },
      }))
      .slice((page - 1) * 20, page * 20)

    return data
  }

  async _create<Includes = Product>(data: Includes): Promise<any> {
    this.items.push(data as Product)

    return data
  }

  async _delete(id: string): Promise<boolean | void | Product> {
    const currentLenght = this.items.length
    const updatedItems = this.items.filter((item) => item.id !== id)

    this.items = updatedItems

    return currentLenght < this.items.length
  }

  async _exists<Includes = Partial<Product>>(
    data: Includes,
  ): Promise<boolean | Product> {
    return !!data
  }

  async _findAll(): Promise<Many<Product>> {
    return this.items
  }

  async _findById(id: string): Promise<void | Product> {
    const product = this.items.find((item) => item.id === id)

    if (!product) {
      return {} as Product
    }

    return product
  }
}
