import { CreateSupermarketsUseCase } from '../supermarkets/create-supermarkets'
import { SupermarketRepository } from '@/repositories/supermarkets/supermarket-repository'

export function makeCreateSupermarketsUseCase() {
  const createSupermarketsUseCase = new CreateSupermarketsUseCase(
    new SupermarketRepository(),
  )

  return createSupermarketsUseCase
}
