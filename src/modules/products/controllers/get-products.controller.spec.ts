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
    const response = await request(app.server).get('/products')

    expect(response.statusCode).toEqual(200)
  })
})
