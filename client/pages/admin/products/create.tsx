import { create as createProduct } from '@/api/products'
import { Section } from '@/components/shared/layout'
import AdminLayout from '@/layouts/AdminLayout'
import AppLayout from '@/layouts/AppLayout'
import { RQ_PRODUCTS_KEY } from '@/lib/constants/react-query-cache-keys'
import { handleErrors } from '@/lib/handleFormErrors'
import { CreateProductFormValues } from '@/ts/interfaces/Product.interface'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { ReactElement } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Card } from '@mantine/core'
import { AxiosError } from 'axios'
import { CreateProductForm } from '@/components/admin/products/forms/CreateProductForm'

export default function AdminProductsIndex() {
    const queryClient = useQueryClient()
    const { mutate, isLoading, isError, error } = useMutation<
        CreateProductFormValues,
        AxiosError,
        CreateProductFormValues
    >(RQ_PRODUCTS_KEY, createProduct)

    const form = useForm<CreateProductFormValues>({
        initialValues: {
            name: '',
            supply: 100,
            price: 9.99,
            image: '',
        },
    })

    const onSubmit = (values: CreateProductFormValues) => {
        mutate(values, {
            onError(error: AxiosError) {
                if (error.response && error.response.status === 422) {
                    return handleErrors(error, form)
                }

                return showNotification({
                    title: 'Uh-huh. Something went wrong.',
                    color: 'red',
                    message: error.message,
                })
            },

            onSuccess() {
                form.reset()
                queryClient.invalidateQueries(RQ_PRODUCTS_KEY)
                showNotification({
                    title: 'Success',
                    message: 'Product created successfully!',
                    color: 'green',
                })
            },
        })
    }

    return (
        <Section title="Create product">
            <Card
                mt={0}
                withBorder={true}
                radius="md"
                p="xl"
                sx={(theme) => ({ maxWidth: theme.breakpoints.xs / 1.2 })}
            >
                <CreateProductForm
                    form={form}
                    isLoading={isLoading}
                    onSubmit={onSubmit}
                />
            </Card>
        </Section>
    )
}

AdminProductsIndex.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
            <AdminLayout>{page}</AdminLayout>
        </AppLayout>
    )
}
