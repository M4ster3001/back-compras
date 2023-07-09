import { Product } from "@prisma/client";
import { IBaseRepository } from "../ibase-repository";
import { Many, MaybeNull } from "@/@types/common";
import { ProductWithSupermarket } from "@/@types/products";

export interface IProductRepository extends IBaseRepository<Product> {
    findAll(): Promise<MaybeNull<Many<ProductWithSupermarket>>>
}