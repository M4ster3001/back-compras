import { Product } from '@prisma/client'
import { IBaseRepository } from '../ibase-repository'
import { Many, MaybeNull } from '@/@types/common'
import { ProductWithSupermarket, TGetProducts } from '@/@types/products'

export interface IProductRepository extends IBaseRepository<Product> {
  findAll({
    page,
  }: TGetProducts): Promise<MaybeNull<Many<ProductWithSupermarket>>>
}
