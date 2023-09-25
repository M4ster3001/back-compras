import { makeGetProductsUseCase } from '@/use-cases/factories/make-get-products-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const getProductsQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
  })

  const { page } = getProductsQuerySchema.parse(request.query)

  const getProductsUseCase = makeGetProductsUseCase()

  const products = await getProductsUseCase.execute({ page })

  return reply.status(200).send(products)
}
