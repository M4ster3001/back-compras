import { Many } from '@/@types/common'
import { AddressRepository } from '@/repositories/address/address-repository'
import { SupermarketRepository } from '@/repositories/supermarkets/supermarket-repository'
import { Prisma } from '@prisma/client'

type CreateSupermarketsUseCaseRequest = {
  name: string
  addressId: string
}

export class CreateSupermarketsUseCase {
  constructor(
    private supermarketRepository: SupermarketRepository,
    private addressRepository: AddressRepository,
  ) {}

  async execute(data: Many<CreateSupermarketsUseCaseRequest>): Promise<void> {
    const names = data.map(d => d.name)
    const registeredSupermarkets = await this.supermarketRepository.findAll(names)

    await Promise.all(
      data.map(async (data) => {
        const supermarketAlreadyRegistered = registeredSupermarkets?.find(
          (supermarket) =>
            supermarket.name.toLocaleLowerCase() ===
            data.name.toLocaleLowerCase(),
        )

        if (!supermarketAlreadyRegistered) {
          await this.supermarketRepository._create<Prisma.SupermarketCreateInput>(
            {name: data.name, location: {connect: {id: data.addressId}}}
          )
        }
      }),
    )
  }
}
