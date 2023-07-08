import { ProductRepository } from '@/repositories/products/product-repository'
import { SupermarketRepository } from '@/repositories/supermarkets/supermarket-repository'
import { CreateProductsUseCase } from '@/use-cases/products/create-products'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export class CreateProductsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
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

    const createProductsUseCase = new CreateProductsUseCase(
      new ProductRepository(),
      new SupermarketRepository(),
    )

    await createProductsUseCase.execute(products)
  }
}
