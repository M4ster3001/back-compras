import { InMemorySupermarketRepository } from '@/repositories/in-memory/supermarkets/in-memory-supermarket-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateSupermarketsUseCase } from './create-supermarkets'

let supermarketRepository: InMemorySupermarketRepository
let sut: CreateSupermarketsUseCase

describe('Create Supermarkets Use Case', () => {
    beforeEach(() => {
      supermarketRepository = new InMemorySupermarketRepository()
      sut = new CreateSupermarketsUseCase(supermarketRepository)
    })
  
    it('should to create two supermarkets', async () => {
    const request = [
        {
            "name": "Atacadão",
            "addressId": "1"
        },
        {
            "name": "Tauste",
            "addressId": "1"
        }
    ]

      const response = await sut.execute(request)
  
      expect(response.length).toEqual(2)
    })
  })