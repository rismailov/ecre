import { ReactElement } from 'react'
import { PasswordInput, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useFocusTrap } from '@mantine/hooks'
import AuthLayout from '@/layouts/AuthLayout'
import { useAuth } from '@/hooks/useAuth'
import { LoginFormValues } from '@/ts/types/forms/auth'
import { AuthSubmitButton } from '@/components/auth/AuthSubmitButton'

export default function Login() {
    const focusTrapRef = useFocusTrap()
    const { login: onLogin, formBusy } = useAuth({ middleware: 'guest' })

    const form = useForm<LoginFormValues>({
        initialValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (formValues: LoginFormValues) => {
        await onLogin({ form, formValues })
    }

    return (
        <>
            <form onSubmit={form.onSubmit(onSubmit)}>
                <Stack align={'stretch'}>
                    <TextInput
                        ref={focusTrapRef}
                        required
                        id="email"
                        label="E-mail"
                        placeholder="johndoe@example.org"
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        required
                        id="password"
                        label="Password"
                        placeholder="Your password"
                        {...form.getInputProps('password')}
                    />

                    <AuthSubmitButton value="Sign in" isLoading={formBusy} />
                </Stack>
            </form>
        </>
    )
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout
            title="Sign in to your account"
            oppositeComponentDesc="create a free account"
            oppositeComponentHref="/auth/register"
        >
            {page}
        </AuthLayout>
    )
}
