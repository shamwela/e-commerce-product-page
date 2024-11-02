import { useState } from 'react'
import { QuantitySelector } from '../common/QuantitySelector'
import { Button } from '../common/Button'
import { useCart } from '../common/helpers/useCart'
import { type Product as ProductType } from '../common/helpers/products'

export type ProductProps = {
  product: ProductType
}

export const Product = ({ product }: ProductProps) => {
  const { id, name, description, price } = product
  const [quantity, setQuantity] = useState(1)
  const { cart, setCart } = useCart()

  const getNewCart = () => {
    const isAlreadyExists = cart.some((cartItem) => cartItem.id === id)

    // If already exists, update the quantity.
    if (isAlreadyExists) {
      return cart.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          }
        }
        return cartItem
      })
    }

    // If not already exists, add it to the cart.
    return [
      ...cart,
      {
        id,
        quantity,
      },
    ]
  }

  return (
    <div className='flex flex-col gap-y-4 p-4'>
      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-2'>
          <span className='text-xs uppercase text-gray-500 md:text-base'>
            Sneaker Company
          </span>
          <div className='flex flex-col gap-y-2 md:gap-y-8'>
            <h1 className='text-3xl font-medium md:text-6xl'>{name}</h1>
            <p className='text-pretty text-gray-500'>{description}</p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 md:flex-col md:items-start'>
          <div className='flex items-center gap-x-4'>
            <span className='text-3xl font-medium'>
              ${price.toLocaleString()}
            </span>
            <div className='rounded-lg bg-gray-900 px-2.5 py-1 text-white'>
              -50%
            </div>
          </div>
          <span className='text-gray-500 line-through'>$250</span>
        </div>
      </div>

      <div className='flex w-full flex-col gap-4 md:grid md:grid-cols-3'>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button
          isDisabled={!quantity.toString().match(/^\d+$/) || quantity <= 0}
          onClick={() => {
            const newCart = getNewCart()
            setCart(newCart)
          }}
          className='col-span-2'
        >
          <div className='flex items-center justify-center gap-x-4'>
            <img src='/assets/icon-cart.svg' alt='cart' className='w-5' />
            <span>Add to cart</span>
          </div>
        </Button>
      </div>
    </div>
  )
}
