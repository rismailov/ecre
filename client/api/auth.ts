import axios from '@/lib/axios'
import { LoginFormValues, RegisterFormValues } from '@/ts/types/forms/auth'

export const getUser = async () => {
    const response = await axios.get('api/user')

    return response.data
}

export const loginUser = async (formValues: LoginFormValues) => {
    const response = await axios.post('login', formValues)

    return response.data
}

export const registerUser = async (formValues: RegisterFormValues) => {
    const response = await axios.post('register', formValues)

    return response.data
}

export const logoutUser = async () => {
    const response = await axios.post('logout')

    return response.data
}
