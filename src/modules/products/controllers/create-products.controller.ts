import AppError from '@/errors/AppError'
import { makeCreateProductsUseCase } from '@/use-cases/factories/make-create-products-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    products: z
      .object({
        name: z.string(),
        amount: z.number(),
        supermarketId: z.string(),
      })
      .array(),
  })

  const { products } = registerBodySchema.parse(request.body)

  try {
    const createProductsUseCase = makeCreateProductsUseCase()

    await createProductsUseCase.execute(products)
  } catch (err: any) {
    throw new AppError(err.message, err.status)
  }

  return reply.send(201).send()
}
