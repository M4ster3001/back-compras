import { Product } from '@prisma/client'
import { BaseRepository } from '../base-repository'
import { Many, MaybeNull } from '@/@types/common'
import { prisma } from '@/lib/prisma'

export class ProductRepository extends BaseRepository<Product> {
  constructor() {
    super('product')
  }

  async findAll(): Promise<MaybeNull<Many<Product>>> {
    return prisma.product.findMany({
      include: {
        Supermarket: {
          select: {
            name: true,
            location: true
          }
        }
      }
    })
  }
}
