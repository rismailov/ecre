import { openEditModalType } from '@/pages/admin/products'
import ProductInterface from '@/ts/interfaces/Product.interface'
import { ActionIcon } from '@mantine/core'
import { Pencil } from 'tabler-icons-react'

export const EditProduct = ({
    product,
    openEditModal,
}: {
    product: ProductInterface
    openEditModal: openEditModalType
}) => {
    return (
        <ActionIcon
            onClick={() => openEditModal(product)}
            size="lg"
            color="yellow"
            variant="light"
        >
            <Pencil size="17" />
        </ActionIcon>
    )
}
