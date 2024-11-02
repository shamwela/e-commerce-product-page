export type Product = {
  id: string
  name: string
  description: string
  price: number
  imageUrls: string[]
}

export const products: Product[] = [
  {
    id: '123-123-123-123',
    name: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125,
    imageUrls: [
      '/assets/image-product-1.jpg',
      '/assets/image-product-2.jpg',
      '/assets/image-product-3.jpg',
      '/assets/image-product-4.jpg',
    ],
  },
] as const
