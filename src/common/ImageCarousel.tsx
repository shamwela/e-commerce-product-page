import { useState } from 'react'

type ImageCarouselProps = {
  imageUrls: string[]
}

export const ImageCarousel = ({ imageUrls }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!imageUrls || imageUrls.length === 0) {
    return null
  }

  const goToPreviousImage = () => {
    // If it's first image, go to the last image.
    if (currentIndex === 0) {
      setCurrentIndex(imageUrls.length - 1)
      return
    }
    setCurrentIndex(currentIndex - 1)
  }

  const goToNextImage = () => {
    // If it's last page, go to the first image.
    if (currentIndex === imageUrls.length - 1) {
      setCurrentIndex(0)
      return
    }
    setCurrentIndex(currentIndex + 1)
  }

  const buttonClassName =
    'absolute top-1/2 transform -translate-y-1/2 cursor-pointer p-4 rounded-full bg-white justify-center items-center hover:bg-gray-100'

  return (
    <div className='relative mx-auto w-full max-w-md overflow-x-hidden'>
      <div className='flex flex-col gap-y-8'>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={imageUrl} className='w-full flex-shrink-0'>
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className='w-full md:rounded-xl'
              />
            </div>
          ))}
        </div>
        <div className='hidden items-center gap-x-8 md:flex'>
          {imageUrls.map((imageUrl, index) => {
            const isSelected = index === currentIndex

            return (
              <div
                onClick={() => setCurrentIndex(index)}
                key={imageUrl}
                className={`${isSelected ? 'border border-primary' : ''} cursor-pointer rounded-xl`}
              >
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className={`${isSelected ? 'opacity-30' : ''} w-full rounded-xl hover:opacity-50`}
                />
              </div>
            )
          })}
        </div>
      </div>

      {imageUrls.length >= 2 && (
        <div className='md:hidden'>
          {/* Previous button */}
          <div
            onClick={goToPreviousImage}
            className={buttonClassName + ' left-4'}
          >
            <img src='/assets/icon-previous.svg' alt='Previous image' />
          </div>

          {/* Next button */}
          <div onClick={goToNextImage} className={buttonClassName + ' right-4'}>
            <img src='/assets/icon-next.svg' alt='Next image' />
          </div>
        </div>
      )}
    </div>
  )
}
