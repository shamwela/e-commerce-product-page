import { useLocalStorage } from 'usehooks-ts'

export type CartItem = {
  id: string
  quantity: number
}

export const useCart = () => {
  const [cart, setCart, removeCart] = useLocalStorage<CartItem[]>('cart', [])
  return { cart, setCart, removeCart }
}
