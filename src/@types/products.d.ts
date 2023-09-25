export type ProductWithSupermarket = {
  Supermarket: {
    name: string | undefined
    location: string | undefined
    city: string | undefined
    state: string | undefined
  }
  id: string
  amount: number
  name: string
  supermarketId: string | null
}

export type TGetProducts = {
  page: number
}
