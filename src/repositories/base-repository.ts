import { Many } from '@/@types/common'
import { PrismaClient } from '@prisma/client'

export abstract class BaseRepository<T> {
  private table: string
  private ORM: any
  constructor(table: string) {
    this.table = table
    this.ORM = new PrismaClient()
  }

  _create<Includes = T>(data: Includes): Promise<void | T | any> {
    return this.ORM[this.table].create({ data })
  }

  _delete(id: number): Promise<boolean | void | T> {
    return this.ORM[this.table].delete({
      where: { id },
    })
  }

  _exists<Includes = Partial<T>>(data: Includes): Promise<boolean | T> {
    return this.ORM[this.table].findFirst({
      where: data,
    })
  }

  _findAll(): Promise<Many<T>> {
    return this.ORM[this.table].findMany()
  }

  _findById(id: number): Promise<void | T> {
    return this.ORM[this.table].findFirst({
      where: {
        id,
      },
    })
  }
}
