import { Many } from '@/@types/common'
import { PrismaClient } from '@prisma/client'
import { IBaseRepository } from './ibase-repository'

export class BaseRepository<T> implements IBaseRepository<T> {
  private table: string
  private ORM: any
  constructor(table: string) {
    this.table = table
    this.ORM = new PrismaClient()
  }

  async _create<Includes = T>(data: Includes): Promise<void | T | any> {
    return this.ORM[this.table].create({ data })
  }

  async _delete(id: string): Promise<boolean | void | T> {
    return this.ORM[this.table].delete({
      where: { id },
    })
  }

  async _exists<Includes = Partial<T>>(data: Includes): Promise<boolean | T> {
    return this.ORM[this.table].findFirst({
      where: data,
    })
  }

  async _findAll(): Promise<Many<T>> {
    return this.ORM[this.table].findMany()
  }

  async _findById(id: string): Promise<void | T> {
    return this.ORM[this.table].findFirst({
      where: {
        id,
      },
    })
  }
}
