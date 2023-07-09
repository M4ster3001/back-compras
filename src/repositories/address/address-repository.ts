import { Address } from '@prisma/client'
import { BaseRepository } from '../base-repository'
import { IAddressRepository } from './iadress-repository'

export class AddressRepository extends BaseRepository<Address> implements IAddressRepository {
  constructor() {
    super('address')
  }
}
