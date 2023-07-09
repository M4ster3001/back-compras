import { FastifyInstance } from 'fastify'
import { list } from '../controllers/get-products.controller'
import { create } from '../controllers/create-products.controller'

export async function productsRoutes(app: FastifyInstance) {
  app.get('/products', list)
  app.post('/products', create)
}
