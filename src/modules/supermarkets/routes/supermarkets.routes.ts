import { FastifyInstance } from 'fastify'
import { create } from '../controllers/create-supermarkets.controller'

export async function supermarketsRoutes(app: FastifyInstance) {
  app.post('/supermarkets', create)
}
