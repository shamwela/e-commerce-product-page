import { Product } from './product/Product'
import { products } from './common/helpers/products'
import { ImageCarousel } from './common/ImageCarousel'
import { NavigationBar } from './common/NavigationBar'

export const App = () => {
  // Later, productId will be from the URL params.
  const productId = '123-123-123-123'
  const product = products.find((product) => product.id === productId)

  if (!product) {
    return <span>Product with id {productId} was not found.</span>
  }

  const { imageUrls } = product

  return (
    <div className='flex min-h-screen'>
      <div className='mx-auto max-w-7xl'>
        <NavigationBar />
        <div className='flex flex-col md:flex-row md:gap-x-32 md:px-16 md:py-32'>
          <ImageCarousel imageUrls={imageUrls} />
          <Product product={product} />
        </div>
      </div>
    </div>
  )
}
