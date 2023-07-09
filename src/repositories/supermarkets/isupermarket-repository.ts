import { Supermarket } from '@prisma/client'
import { IBaseRepository } from '../ibase-repository'
import { Many, MaybeNull } from '@/@types/common'

export interface ISupermarketRepository extends IBaseRepository<Supermarket> {
  findAll(names: Many<string>): Promise<MaybeNull<Many<Supermarket>>>
}
