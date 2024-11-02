import { useState } from 'react'
import { Cart } from './Cart'

type NavigationLinkData = {
  label: string
  href: string
}

const navigationLinks: NavigationLinkData[] = [
  { label: 'Collections', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

export const NavigationBar = () => {
  const [isMenuOpened, setMenuOpened] = useState(false)
  const openMenu = () => setMenuOpened(true)
  const closeMenu = () => setMenuOpened(false)

  return (
    <>
      <div className='md:hidden'>
        {/* To dim the background. */}
        {isMenuOpened && (
          <div
            onClick={closeMenu}
            className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-black bg-opacity-70'
          />
        )}

        <div
          className={`${isMenuOpened ? 'translate-x-0' : '-translate-x-full'} absolute bottom-0 top-0 z-20 flex w-2/3 transform flex-col gap-y-12 bg-white p-4 shadow-2xl transition-transform duration-700 ease-in-out`}
        >
          <img
            src='/assets/icon-close.svg'
            alt='Close'
            onClick={closeMenu}
            width={16}
            height={16}
            className='cursor-pointer'
          />
          <div className='flex flex-col gap-y-4'>
            {navigationLinks.map(({ label, href }) => (
              <a
                href={href}
                key={label + href}
                className='text-lg font-semibold'
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <nav className='flex items-center justify-between border-b border-gray-200 bg-white p-4 md:p-0'>
        <div className='flex items-center gap-x-12'>
          <div className='flex items-center gap-x-4'>
            <img
              onClick={openMenu}
              src='/assets/icon-menu.svg'
              alt='Menu'
              className='cursor-pointer md:hidden'
            />
            <a href='#'>
              <img
                src='/assets/logo.svg'
                alt='Logo'
                width={130}
                className='md:w-40 md:border-b-4 md:border-transparent'
              />
            </a>
          </div>
          <div className='hidden items-center gap-x-12 md:flex'>
            {navigationLinks.map(({ label, href }) => (
              <a
                href={href}
                key={label + href}
                className='border-b-4 border-transparent py-8 text-lg text-gray-500 transition-colors duration-700 ease-in-out hover:border-primary hover:text-black'
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-x-4 md:gap-x-12'>
          <Cart />
          <img
            src='/assets/image-avatar.png'
            alt='Avatar'
            className='size-6 cursor-pointer rounded-full hover:ring hover:ring-primary md:size-12'
          />
        </div>
      </nav>
    </>
  )
}
