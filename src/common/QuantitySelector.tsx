type QuantitySelectorProps = {
  quantity: number
  setQuantity: (quantity: number) => void
}

export const QuantitySelector = ({
  quantity,
  setQuantity,
}: QuantitySelectorProps) => {
  const commonIconStyles = 'w-4 hover:opacity-70'
  const isDecreaseDisabled = quantity <= 1

  return (
    <div className='flex items-center justify-between rounded-lg bg-gray-100 p-4 md:col-span-1'>
      <img
        onClick={() => {
          if (isDecreaseDisabled) return
          setQuantity(quantity - 1)
        }}
        src='/assets/icon-minus.svg'
        alt='Decrease quantity'
        className={`${isDecreaseDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${commonIconStyles}`}
      />

      <input
        value={quantity}
        onChange={(event) => {
          if (!event.target.value.match(/^\d+$/) && event.target.value !== '') {
            return
          }
          setQuantity(Number(event.target.value))
        }}
        type='text'
        aria-label='Quantity'
        className='border-none bg-transparent text-center text-lg font-medium outline-none md:max-w-5'
      />

      <img
        onClick={() => setQuantity(quantity + 1)}
        src='/assets/icon-plus.svg'
        alt='Increase quantity'
        className={`${commonIconStyles} cursor-pointer`}
      />
    </div>
  )
}
