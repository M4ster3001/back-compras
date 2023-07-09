import { Many } from "@/@types/common"

export interface IBaseRepository<T> {
    _create<Includes = T>(data: Includes): Promise<void | T | any>
    _delete(id: string): Promise<boolean | void | T>
    _exists<Includes = Partial<T>>(data: Includes): Promise<boolean | T>
    _findAll(): Promise<Many<T>>
    _findById(id: string): Promise<void | T>
}