import { Many, MaybeNull } from 'src/@types/common'
import { Product } from '@prisma/client'
import { ProductRepository } from '@/repositories/products/product-repository'

interface GetProductsResponse {
  products: MaybeNull<Many<Product>>
}

export class GetProductsUseCase {
  constructor(private productsRepository: ProductRepository) {}

  async execute(): Promise<GetProductsResponse> {
    const products = await this.productsRepository.findAll()

    return {products}
  }
}
