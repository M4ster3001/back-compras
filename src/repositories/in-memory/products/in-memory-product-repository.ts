import { MaybeNull, Many } from "@/@types/common";
import { ProductWithSupermarket } from "@/@types/products";
import { IProductRepository } from "@/repositories/products/iproduct-repository";
import { Product } from "@prisma/client";

export class InMemoryProductRepository implements IProductRepository {
    async findAll(): Promise<MaybeNull<Many<ProductWithSupermarket>>> {
        throw [];
    }
    
    async _create<Includes = Product>(data: Includes): Promise<any> {
        return data;
    }

    async _delete(id: string): Promise<boolean | void | Product> {
        return id ? true : false
    }

    async _exists<Includes = Partial<Product>>(data: Includes): Promise<boolean | Product> {
        return data ? true : false
    }

    async _findAll(): Promise<Many<Product>> {
        return [];
    }

    async _findById(id: string): Promise<void | Product> {
        return {} as Product;
    }
}