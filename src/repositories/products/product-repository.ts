import { Product } from '@prisma/client'
import { BaseRepository } from '../base-repository'
import { Many, MaybeNull } from '@/@types/common'
import { prisma } from '@/lib/prisma'
import { ProductWithSupermarket } from '@/@types/products'
import { IProductRepository } from './iproduct-repository'

export class ProductRepository extends BaseRepository<Product> implements IProductRepository {
  constructor() {
    super('product')
  }

  async findAll(): Promise<MaybeNull<Many<ProductWithSupermarket>>> {
    const result = await prisma.product.findMany({
      select: {
        id: true,
        amount: true,
        name: true,
        supermarketId: true,
        Supermarket: {
          select: {
            name: true,
            location: {
              select: {
                street: true,
                City: {
                  select: { 
                    name: true
                  }
                },
                State: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        }
      }
    })

    const data = result.map(p => ({
      ...p,
      Supermarket: {
        name: p.Supermarket?.name,
        location: p.Supermarket?.location.street,
        city: p.Supermarket?.location.City.name,
        state: p.Supermarket?.location.State.name
      }
    }))

    return data
  }
}
