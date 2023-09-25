import { app } from '@/app'
import request from 'supertest'

import { expect, describe, it, beforeAll, afterAll } from 'vitest'

describe('Get All Products Use Case (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be possible get all registered products', async () => {
    await request(app.server)
      .post('/products')
      .send([
        {
          name: 'Arroz 5kg Solito',
          amount: 22.6,
          supermarketId: '80574d36-03c4-4ac2-8d7d-7c7032e8c305',
        },
        {
          name: 'Arroz 5kg Solito',
          amount: 20.6,
          supermarketId: '7dbad335-bbb6-4873-a69a-490f803ae356',
        },
      ])

    const response = await request(app.server).get('/products').send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.products.length).toEqual(2)
  })
})
