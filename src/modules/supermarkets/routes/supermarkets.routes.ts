import { FastifyInstance } from 'fastify'
import { CreateSupermarketsController } from '../controllers/create-supermarkets.controller'

const createSupermarketsController = new CreateSupermarketsController()

export async function supermarketsRoutes(app: FastifyInstance) {
  app.post('/supermarkets', createSupermarketsController.handle)
}
