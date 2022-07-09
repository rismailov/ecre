import { openEditModalType } from '@/pages/admin/products'
import ProductInterface from '@/ts/interfaces/Product.interface'
import { Group, Image, Text } from '@mantine/core'
import DataTable, { TableColumn } from 'react-data-table-component'
import { DeleteProduct } from './actions/DeleteProduct'
import { EditProduct } from './actions/EditProduct'

export const ProductsTable = ({
    products,
    openEditModal,
}: {
    products: ProductInterface[]
    openEditModal: openEditModalType
}) => {
    const columns: TableColumn<ProductInterface>[] = [
        {
            name: 'Name',
            selector: (row) => row.name,
            maxWidth: '200px',
            cell: (row) => (
                <Text weight="600" size="xs">
                    {row.name}
                </Text>
            ),
        },
        { name: 'Supply', selector: (row) => row.supply },
        { name: 'Price', selector: (row) => row.price },
        {
            name: 'Image',
            cell: (row) =>
                row.images && row.images.length ? (
                    <Image
                        src={process.env.NEXT_PUBLIC_API_URL + row.images[0].url}
                        radius="sm"
                        width={50}
                        height={50}
                        alt={row.name}
                        sx={{ paddingTop: 5, paddingBottom: 5 }}
                    />
                ) : (
                    'No images provided for this product'
                ),
        },
        {
            name: 'Actions',
            cell: (row) => {
                return (
                    <Group align="center">
                        <EditProduct product={row} openEditModal={openEditModal} />

                        <DeleteProduct id={row.id} />
                    </Group>
                )
            },
        },
    ]

    return <DataTable columns={columns} data={products} />
}
