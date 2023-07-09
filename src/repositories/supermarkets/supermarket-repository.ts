import { Supermarket } from '@prisma/client'
import { BaseRepository } from '../base-repository'
import { Many, MaybeNull } from '@/@types/common'
import { prisma } from '@/lib/prisma'
import { ISupermarketRepository } from './isupermarket-repository'

export class SupermarketRepository
  extends BaseRepository<Supermarket>
  implements ISupermarketRepository
{
  constructor() {
    super('supermarket')
  }

  async findAll(names: Many<string>): Promise<MaybeNull<Many<Supermarket>>> {
    return prisma.supermarket.findMany({
      where: {
        name: { in: names },
      },
    })
  }
}
