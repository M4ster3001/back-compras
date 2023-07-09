import { SupermarketRepository } from '@/repositories/supermarkets/supermarket-repository'
import { CreateSupermarketsUseCase } from '@/use-cases/supermarkets/create-supermarkets'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    supermarkets: z
      .object({
        name: z.string(),
        addressId: z.string(),
      })
      .array(),
  })

  const { supermarkets } = registerBodySchema.parse(request.body)

  const createProductsUseCase = new CreateSupermarketsUseCase(
    new SupermarketRepository(),
  )

  await createProductsUseCase.execute(supermarkets)

  return reply.send(201).send()
}
