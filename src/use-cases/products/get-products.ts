import { Many, MaybeNull } from 'src/@types/common'
import { ProductWithSupermarket } from '@/@types/products'
import { IProductRepository } from '@/repositories/products/iproduct-repository'

interface GetProductsResponse {
  products: MaybeNull<Many<ProductWithSupermarket>>
}

type TGetProductsUseCaseProps = {
  page: number
}

export class GetProductsUseCase {
  constructor(private productsRepository: IProductRepository) {}

  async execute({
    page,
  }: TGetProductsUseCaseProps): Promise<GetProductsResponse> {
    const products = await this.productsRepository.findAll({ page })

    return { products }
  }
}
