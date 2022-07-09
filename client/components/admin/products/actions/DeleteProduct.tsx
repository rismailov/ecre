import { destroy } from '@/api/products'
import { RQ_PRODUCTS_KEY } from '@/lib/constants/react-query-cache-keys'
import ProductInterface from '@/ts/interfaces/Product.interface'
import { ActionIcon } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { Trash } from 'tabler-icons-react'

export const DeleteProduct = ({ id }: { id: ProductInterface['id'] }) => {
    const queryClient = useQueryClient()
    const { mutate: deleteProduct, isLoading: isMutating } = useMutation(
        [RQ_PRODUCTS_KEY, id],
        destroy,
        {
            onSuccess(data) {
                showNotification({ message: data.message, color: 'green' })
                queryClient.invalidateQueries(RQ_PRODUCTS_KEY)
            },
            onError(error: AxiosError) {
                showNotification({ message: error.message, color: 'red' })
            },
        },
    )

    return (
        <ActionIcon
            onClick={() => deleteProduct(id)}
            size="lg"
            color="red"
            variant="light"
            disabled={isMutating}
            loading={isMutating}
        >
            <Trash size="17" />
        </ActionIcon>
    )
}
