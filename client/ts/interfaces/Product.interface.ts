export interface ProductImage {
    id: number
    url: string
    created_at: string
}

export default interface ProductInterface {
    id: number
    name: string
    supply: number
    price: string
    images: ProductImage[]
}

/**
 * Product forms interfaces
 */

interface ProductGenerics<Images> {
    name: string
    supply: number
    price: number
    images: Images
}

// export type CreateProductFormValues = ProductGenerics<FileList | []>
export type CreateProductFormValues = {
    name: string
    supply: number
    price: number
    image: File | string
}
export type EditProductFormValues = ProductGenerics<ProductImage[]>
