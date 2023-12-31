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
        name: 'Atacadão',
        addressId: '1',
      },
      {
        name: 'Tauste',
        addressId: '1',
      },
    ]

    const response = await sut.execute(request)

    expect(response.length).toEqual(2)
  })

  it('should to create two supermarkets and after create one', async () => {
    supermarketRepository.items.push(
      ...[
        {
          id: '1',
          name: 'Atacadão',
          addressId: '1',
        },
        {
          id: '2',
          name: 'Tauste',
          addressId: '1',
        },
      ],
    )

    const request = [
      {
        name: 'Atacadão',
        addressId: '1',
      },
      {
        name: 'Macro',
        addressId: '1',
      },
    ]

    const response = await sut.execute(request)

    expect(response.length).toEqual(1)
  })
})
