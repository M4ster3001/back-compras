import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from 'src/env'
import { productsRoutes } from './modules/products/routes/products.routes'
import { supermarketsRoutes } from './modules/supermarkets/routes/supermarkets.routes'

export const app = fastify()

app.register(productsRoutes)
app.register(supermarketsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'prod') {
    console.error(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
