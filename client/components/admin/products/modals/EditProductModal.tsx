import { edit } from '@/api/products'
import { RQ_PRODUCTS_KEY } from '@/lib/constants/react-query-cache-keys'
import { slideDown } from '@/services/mantine/transitions'
import ProductInterface, {
    EditProductFormValues,
} from '@/ts/interfaces/Product.interface'
import { Modal, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { EditProductForm } from '../forms/EditProductForm'

type Props = {
    opened: boolean
    closeModal: () => void
    product: ProductInterface
}

export const EditProductModal = ({ opened, closeModal, product }: Props) => {
    const { mutate, isLoading } = useMutation<
        EditProductFormValues,
        AxiosError,
        { id: ProductInterface['id']; formValues: EditProductFormValues }
    >([RQ_PRODUCTS_KEY, product.id], edit)

    const form = useForm<EditProductFormValues>({
        initialValues: {
            name: product.name,
            images: product.images,
            price: Number(product.price.slice(1)), // removes $ sign
            supply: +product.supply,
        },
    })

    const onSubmit = async (values: EditProductFormValues) => {
        await mutate(
            { id: product.id, formValues: values },
            {
                onError(error: AxiosError) {},

                onSuccess(data) {},
            },
        )
    }

    return (
        <Modal
            centered
            opened={opened}
            onClose={closeModal}
            title="Edit product"
            transition={slideDown}
        >
            <EditProductForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
        </Modal>
    )
}
