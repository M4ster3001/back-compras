import { Many } from "@/@types/common";
import { IAddressRepository } from "@/repositories/address/iadress-repository";
import { Address } from "@prisma/client";

export class InMemoryAddressRepository implements IAddressRepository {
    async _create<Includes = Address>(data: Includes): Promise<void | Address | any> {
        return data;
    }

   async _delete(id: string): Promise<boolean | void | Address> {
        return id ? true : false
    }

   async _exists<Includes = Partial<Address>>(data: Includes): Promise<boolean | Address> {
        return data ? true : false
    }

   async _findAll(): Promise<Many<Address>> {
        return [];
    }

   async _findById(id: string): Promise<void | Address> {
        return {} as Address;
    }
    
}