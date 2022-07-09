import { Section } from '@/components/shared/layout'
import AdminLayout from '@/layouts/AdminLayout'
import AppLayout from '@/layouts/AppLayout'
import type ProductInterface from '@/ts/interfaces/Product.interface'
import { Button } from '@mantine/core'
import Link from 'next/link'
import React, { ReactElement, useState } from 'react'
// api
import { useQuery } from 'react-query'
import { get as getProducts } from '@/api/products'
import { RQ_PRODUCTS_KEY } from '@/lib/constants/react-query-cache-keys'
import { AxiosError } from 'axios'
import { FetchingStatesHandler } from '@/components/shared/FetchingStatesHandler'
import { ProductsTable } from '@/components/admin/products/ProductsTable'
import { EditProductModal } from '@/components/admin/products/modals/EditProductModal'

export type openEditModalType = (product: ProductInterface) => void

export default function AdminProductsIndex() {
    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useQuery<ProductInterface[], AxiosError>(RQ_PRODUCTS_KEY, getProducts)

    // modal
    const [opened, setOpened] = useState(false)
    const [product, setProduct] = useState<null | ProductInterface>(null)

    const openEditModal: openEditModalType = (product: ProductInterface) => {
        setProduct(product)

        if (!product) {
            return console.warn('[products/index.tsx]: Error getting product.')
        }

        setOpened(true)
    }

    return (
        <>
            {product && (
                <EditProductModal
                    opened={opened}
                    closeModal={() => {
                        if (product !== null) {
                            setProduct(null)
                        }

                        setOpened(false)
                    }}
                    product={product}
                />
            )}

            <Section
                title="Products"
                actionComponent={
                    <Link href="/admin/products/create" passHref>
                        <Button component="a" color="green">
                            Create new product
                        </Button>
                    </Link>
                }
            >
                {(isLoading ||
                    isError ||
                    !products ||
                    (products && !products.length)) && (
                    <FetchingStatesHandler
                        data={products}
                        isLoading={isLoading}
                        isError={isError}
                        messages={{
                            fetchError: `Error fetching products... ${error?.message}`,
                            emptyData: 'No products at the moment...',
                        }}
                    />
                )}

                {products && (
                    <ProductsTable products={products} openEditModal={openEditModal} />
                )}
            </Section>
        </>
    )
}

AdminProductsIndex.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
            <AdminLayout>{page}</AdminLayout>
        </AppLayout>
    )
}
