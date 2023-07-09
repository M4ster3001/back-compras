import { ProductRepository } from '@/repositories/products/product-repository'
import { GetProductsUseCase } from '../products/get-products'

export function makeGetProductsUseCase() {
  const getProductUseCase = new GetProductsUseCase(new ProductRepository())

  return getProductUseCase
}
