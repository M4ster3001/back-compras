import { InMemoryProductRepository } from '@/repositories/in-memory/products/in-memory-product-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { GetProductsUseCase } from './get-products'

let productRepository: InMemoryProductRepository
let sut: GetProductsUseCase

describe('Get All Products Use Case', () => {
  beforeEach(async () => {
    productRepository = new InMemoryProductRepository()
    sut = new GetProductsUseCase(productRepository)

    const products = [
      {
        name: 'Arroz 5kg Solito',
        amount: 22.6,
        supermarketId: '80574d36-03c4-4ac2-8d7d-7c7032e8c305',
      },
      {
        name: 'Arroz 5kg Solito',
        amount: 20.6,
        supermarketId: '7dbad335-bbb6-4873-a69a-490f803ae356',
      },
    ]

    products.map(async (product) => await productRepository._create(product))
  })

  it('should be possible get all registered products', async () => {
    const response = await sut.execute()

    expect(response.products?.length).toStrictEqual(2)
  })
})
