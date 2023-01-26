export type CartItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    type: string,
    count: number,
    size: number
}

export interface CartSliceState {
    totalPrice: number,
    cartItems: CartItem[]
}