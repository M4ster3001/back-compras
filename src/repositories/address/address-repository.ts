import { Address } from '@prisma/client'
import { BaseRepository } from '../base-repository'

export class AddressRepository extends BaseRepository<Address> {
  constructor() {
    super('address')
  }
}
