import { Many } from '@/@types/common'
import { ProductRepository } from '@/repositories/products/product-repository'
import { SupermarketRepository } from '@/repositories/supermarkets/supermarket-repository'
import { Prisma, Supermarket } from '@prisma/client'

type CreateProductsUseCaseRequest = {
  name: string
  amount: number
  supermarketId: string
}

export class CreateProductsUseCase {
  constructor(
    private productsRepository: ProductRepository,
    private supermarketRepository: SupermarketRepository,
  ) {}

  async execute(data: Many<CreateProductsUseCaseRequest>): Promise<void> {
    const registeredSupermarkets = await this.supermarketRepository._findAll()

    await Promise.all(
      data.map(async (data) => {
        if (
          registeredSupermarkets.find(
            (supermarket: Supermarket) => supermarket.id === data.supermarketId,
          )
        ) {
          await this.productsRepository._create<Prisma.ProductCreateInput>(data)
        }
      }),
    )
  }
}
