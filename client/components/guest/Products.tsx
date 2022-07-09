import type ProductInterface from '@/ts/interfaces/Product.interface'
import { get as getProducts } from '@/api/products'
import { RQ_PRODUCTS_KEY } from '@/lib/constants/react-query-cache-keys'
import { Container, Grid, Text, Title } from '@mantine/core'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { ProductCard } from './ProductCard'
import { FetchingStatesHandler } from '../shared/FetchingStatesHandler'

export const Products = () => {
    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useQuery<ProductInterface[], AxiosError>(RQ_PRODUCTS_KEY, getProducts)

    return (
        <Container mt="xl">
            <Title order={2} mb="lg">
                <Text inherit component="span">
                    Most popular this month
                </Text>
                <Text inherit component="span">
                    {' '}
                    🔥
                </Text>
            </Title>

            {(isLoading || isError || (products && !products.length)) && (
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
                <Grid grow={products.length > 3} gutter="xl">
                    {products.map((product: ProductInterface) => (
                        <Grid.Col key={product.id} span={3}>
                            <ProductCard key={product.id} product={product} />
                        </Grid.Col>
                    ))}
                </Grid>
            )}
        </Container>
    )
}
