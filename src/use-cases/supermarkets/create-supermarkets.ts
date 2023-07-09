import { Many } from '@/@types/common'
import { ISupermarketRepository } from '@/repositories/supermarkets/isupermarket-repository'
import { SupermarketRepository } from '@/repositories/supermarkets/supermarket-repository'
import { Prisma, Supermarket } from '@prisma/client'

type CreateSupermarketsUseCaseRequest = {
  name: string
  addressId: string
}

export class CreateSupermarketsUseCase {
  constructor(
    private supermarketRepository: ISupermarketRepository,
  ) {}

  async execute(data: Many<CreateSupermarketsUseCaseRequest>): Promise<Many<Supermarket>> {
    const names = data.map(d => d.name)
    const registeredSupermarkets = await this.supermarketRepository.findAll(names)

    const newSupermarkets: Many<Supermarket> = []

    await Promise.all(
      data.map(async (data) => {
        const supermarketAlreadyRegistered = registeredSupermarkets?.find(
          (supermarket) =>
            supermarket.name.toLocaleLowerCase() ===
            data.name.toLocaleLowerCase(),
        )

        if (!supermarketAlreadyRegistered) {
          const supermarket = await this.supermarketRepository._create<Prisma.SupermarketCreateInput>(
            {name: data.name, location: {connect: {id: data.addressId}}}
          )

          newSupermarkets.push(supermarket);
        }
      }),
    )

    return newSupermarkets
  }
}
