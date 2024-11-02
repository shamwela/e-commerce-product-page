import { type ReactNode } from 'react'

type ButtonProps = {
  isDisabled?: boolean
  isPending?: boolean
  onClick: () => void
  children: ReactNode
  className?: string
}

export const Button = ({
  isDisabled = false,
  isPending = false,
  onClick,
  children,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        if (isDisabled || isPending) return
        onClick()
      }}
      className={`${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className} rounded-lg bg-primary px-8 py-4 font-medium shadow-sm hover:bg-opacity-90`}
    >
      {children}
    </button>
  )
}
