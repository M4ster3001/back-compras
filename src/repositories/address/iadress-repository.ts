import { Address } from "@prisma/client";
import { IBaseRepository } from "../ibase-repository";

export interface IAddressRepository extends IBaseRepository<Address> {}