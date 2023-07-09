import { ProductRepository } from '@/repositories/products/product-repository'
import { CreateProductsUseCase } from '../products/create-products'
import { SupermarketRepository } from '@/repositories/supermarkets/supermarket-repository'

export function makeCreateProductsUseCase() {
  const createProductUseCase = new CreateProductsUseCase(
    new ProductRepository(),
    new SupermarketRepository(),
  )

  return createProductUseCase
}
