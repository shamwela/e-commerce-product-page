import * as Popover from '@radix-ui/react-popover'
import { useCart } from './helpers/useCart'
import { products } from './helpers/products'
import { useMemo } from 'react'
import { Button } from './Button'

export const Cart = () => {
  const { cart, setCart } = useCart()
  const totalQuantity = useMemo(() => {
    if (!cart) return 0
    return cart.reduce(
      (previousQuantity, cartItem) => previousQuantity + cartItem.quantity,
      0,
    )
  }, [cart])

  const removeCartItem = (cartItemId: string) => {
    const newCart = cart?.filter((cartItem) => cartItem.id !== cartItemId)
    setCart(newCart)
  }

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className='relative'>
          <img src='/assets/icon-cart.svg' alt='Cart' className='md:size-6' />
          {totalQuantity >= 1 && (
            <div className='absolute -right-1/2 -top-1/2 flex h-full w-full items-center justify-center rounded-full bg-primary text-xs text-white'>
              {totalQuantity}
            </div>
          )}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='w-screen bg-transparent px-2 py-8 md:max-w-[420px]'>
          <div className='flex flex-col rounded-lg bg-white shadow-xl'>
            <div className='border-b border-gray-200 p-6'>
              <span className='text-lg font-medium'>Cart</span>
            </div>
            <div className='p-6'>
              {cart && cart.length >= 1 ? (
                <div className='flex flex-col gap-y-4'>
                  {cart.map(({ id, quantity }) => {
                    const product = products.find(
                      (product) => product.id === id,
                    )

                    if (!product || !quantity) {
                      return null
                    }

                    const { name, price, imageUrls } = product
                    // Add comma separators to the total price.
                    const totalPrice = (price * quantity).toLocaleString()

                    return (
                      <div
                        key={id}
                        className='flex items-center justify-between gap-x-4'
                      >
                        <div className='flex items-center gap-x-4'>
                          <img
                            src={imageUrls[0]}
                            alt={name}
                            className='w-12 rounded-lg'
                          />
                          <div className='flex flex-col gap-y-1'>
                            <span className='text-lg'>{name}</span>
                            <span>
                              ${price} x {quantity} ={' '}
                              <span className='font-semibold'>
                                ${totalPrice}
                              </span>
                            </span>
                          </div>
                        </div>
                        <img
                          onClick={() => removeCartItem(id)}
                          src='/assets/icon-delete.svg'
                          alt='Delete this item.'
                          width={16}
                          className='cursor-pointer'
                        />
                      </div>
                    )
                  })}

                  <Button onClick={() => setCart([])}>Checkout</Button>
                </div>
              ) : (
                <div className='flex items-center justify-center p-10'>
                  <span className='text-gray-500'>Your cart is empty.</span>
                </div>
              )}
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
