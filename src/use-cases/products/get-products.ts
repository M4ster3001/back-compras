import { Many, MaybeNull } from 'src/@types/common'
import { ProductWithSupermarket } from '@/@types/products'
import { IProductRepository } from '@/repositories/products/iproduct-repository'

interface GetProductsResponse {
  products: MaybeNull<Many<ProductWithSupermarket>>
}

export class GetProductsUseCase {
  constructor(private productsRepository: IProductRepository) {}

  async execute(): Promise<GetProductsResponse> {
    const products = await this.productsRepository.findAll()

    return { products }
  }
}
