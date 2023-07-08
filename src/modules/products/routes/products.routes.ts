import { FastifyInstance } from 'fastify'
import { GetProductsController } from '../controllers/get-products-controller'

const getProductsController = new GetProductsController()

export async function productsRoutes(app: FastifyInstance) {
  app.get('/', getProductsController.handle)
}
