import { Product } from '@prisma/client'
import { BaseRepository } from '../base-repository'

export class ProductRepository extends BaseRepository<Product> {
  constructor() {
    super('product')
  }
}
