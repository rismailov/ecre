/**
 * Sets mantine form errors.
 *
 * This API error handler is written for Laravel API specifically.
 *
 * https://mantine.dev/form/use-form/#errors
 */
import { UseFormReturnType } from '@mantine/form/lib/use-form'

const handleErrors = (error: any, form: UseFormReturnType<any>) => {
    if (error.response.status !== 422) {
        throw error
    }

    for (const prop in error.response.data.errors) {
        form.setFieldError(prop, error.response.data.errors[prop][0])
    }
}

export { handleErrors }
