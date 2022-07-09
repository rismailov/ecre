import axios from '@/lib/axios'
import ProductInterface, {
    CreateProductFormValues,
    EditProductFormValues,
} from '@/ts/interfaces/Product.interface'

export const get = () => axios.get('api/products').then(({ data }) => data.data)

export const create = (formValues: CreateProductFormValues) =>
    axios
        .post('api/products', formValues, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
            },
        })
        .then(({ data }) => {
            console.log(data)

            return data
        })

export const destroy = (id: ProductInterface['id']) =>
    axios.delete(`api/products/${id}`).then(({ data }) => data)

export const edit = ({
    id,
    formValues,
}: {
    id: ProductInterface['id']
    formValues: EditProductFormValues
}) => axios.patch(`api/products/${id}`, formValues).then(({ data }) => data)
