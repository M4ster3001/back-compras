import { ProductRepository } from '@/repositories/products/product-repository'
import { GetProductsUseCase } from '@/use-cases/get-products'
import { FastifyReply, FastifyRequest } from 'fastify'

export class GetProductsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const getProductsUseCase = new GetProductsUseCase(new ProductRepository())

    const products = await getProductsUseCase.execute()

    return products
  }
}
