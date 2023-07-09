import { makeGetProductsUseCase } from '@/use-cases/factories/make-get-products-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const getProductsUseCase = makeGetProductsUseCase()

  const products = await getProductsUseCase.execute()

  return reply.status(200).send(products)
}
