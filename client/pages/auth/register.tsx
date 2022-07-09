import { ReactElement } from 'react'
import { PasswordInput, Stack, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { useFocusTrap } from '@mantine/hooks'
import AuthLayout from '@/layouts/AuthLayout'
import type { RegisterFormValues } from '@/ts/types/forms/auth'
import { useAuth } from '@/hooks/useAuth'
import * as Yup from 'yup'
import { AuthSubmitButton } from '@/components/auth/AuthSubmitButton'

export default function Register() {
    const { register, formBusy } = useAuth({ middleware: 'guest' })
    const focusTrapRef = useFocusTrap()

    const schema = Yup.object().shape({
        email: Yup.string().email('Invalid email address.'),
        password: Yup.string().min(8, 'Password must be at least 8 characters long.'),
    })

    const form = useForm<RegisterFormValues>({
        schema: yupResolver(schema),
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        },
    })

    const onSubmit = async (formValues: RegisterFormValues) => {
        await register({ form, formValues })
    }

    return (
        <>
            <form onSubmit={form.onSubmit(onSubmit)}>
                <Stack align={'stretch'}>
                    <TextInput
                        ref={focusTrapRef}
                        required
                        id="firstName"
                        label="First name"
                        placeholder="John"
                        {...form.getInputProps('first_name')}
                    />

                    <TextInput
                        required
                        id="lastName"
                        label="Last name"
                        placeholder="Doe"
                        {...form.getInputProps('last_name')}
                    />

                    <TextInput
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

                    <AuthSubmitButton value="Sign up" isLoading={formBusy} />
                </Stack>
            </form>
        </>
    )
}

Register.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout
            title="Create your account for free"
            oppositeComponentDesc="sign in to your account"
            oppositeComponentHref="/auth/login"
        >
            {page}
        </AuthLayout>
    )
}
