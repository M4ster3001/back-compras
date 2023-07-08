import { FastifyInstance } from 'fastify'
import { GetProductsController } from '../controllers/get-products.controller'
import { CreateProductsController } from '../controllers/create-products.controller'

const getProductsController = new GetProductsController()
const createProductsController = new CreateProductsController()

export async function productsRoutes(app: FastifyInstance) {
  app.get('/products', getProductsController.handle)
  app.post('/products', createProductsController.handle)
}
