import { productsRoutes } from '@/modules/products/routes/products.routes'
import { FastifyInstance } from 'fastify'

export async function routes(app: FastifyInstance) {
  app.decorate('/products', productsRoutes)
}
