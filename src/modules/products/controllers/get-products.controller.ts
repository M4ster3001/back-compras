import { ProductRepository } from '@/repositories/products/product-repository'
import { GetProductsUseCase } from '@/use-cases/products/get-products'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const getProductsUseCase = new GetProductsUseCase(new ProductRepository())

  const products = await getProductsUseCase.execute()

  return reply.status(200).send(products)
}
