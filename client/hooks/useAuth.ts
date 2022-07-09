import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import { handleErrors } from '@/lib/handleFormErrors'
import { useQuery, useQueryClient } from 'react-query'
import { LoginFormValues, RegisterFormValues } from '@/ts/types/forms/auth'
import { getUser, loginUser, logoutUser, registerUser } from '@/api/auth'
import { useLoaderContext } from '@/context/LoaderContext'
import { RQ_AUTH_KEY } from '@/lib/constants/react-query-cache-keys'

const DASHBOARD_ROUTE = '/dashboard'
const AUTH_ROUTE = '/auth/login'

export const useAuth = ({
    middleware,
}: { middleware?: 'guest' | 'auth' | 'none' } = {}) => {
    const [formBusy, setFormBusy] = useState(false)
    const { setIsLoading } = useLoaderContext()
    const router = useRouter()
    const queryClient = useQueryClient()

    const {
        data: user,
        isLoading: userLoading,
        error,
        isError,
    } = useQuery(RQ_AUTH_KEY, getUser)

    const login = async ({
        form,
        formValues,
    }: {
        form: UseFormReturnType<LoginFormValues>
        formValues: LoginFormValues
    }) => {
        setFormBusy(true)
        form.clearErrors()

        try {
            await loginUser(formValues)

            queryClient.invalidateQueries(RQ_AUTH_KEY)
            setIsLoading(true)
            setFormBusy(false)
        } catch (e) {
            setFormBusy(false)
            handleErrors(e, form)
        }
    }

    const register = async ({
        form,
        formValues,
    }: {
        form: UseFormReturnType<RegisterFormValues>
        formValues: RegisterFormValues
    }) => {
        setFormBusy(true)
        form.clearErrors()

        try {
            await registerUser(formValues)

            queryClient.invalidateQueries(RQ_AUTH_KEY)
            setIsLoading(true)
            setFormBusy(false)
        } catch (e: any) {
            setFormBusy(false)
            handleErrors(e, form)
        }
    }

    const logout = async () => {
        await logoutUser()

        queryClient.resetQueries(RQ_AUTH_KEY)
    }

    useEffect(() => {
        if (middleware === 'guest' && user) {
            router.push(DASHBOARD_ROUTE)
        }

        if (middleware === 'auth' && error) {
            router.push(AUTH_ROUTE)
        }
    }, [user, error])

    return {
        user,
        login,
        register,
        logout,
        formBusy,
        userLoading,
    }
}
