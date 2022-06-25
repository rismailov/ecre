import { Button } from '@mantine/core'

type AuthSubmitButtonProps = {
    value: string
    isLoading: boolean
}

export const AuthSubmitButton = ({ value, isLoading }: AuthSubmitButtonProps) => {
    return (
        <Button
            mt="md"
            size="md"
            type="submit"
            loading={isLoading}
            variant="gradient"
            gradient={{ from: 'red', to: '#FF8787' }}
        >
            {value}
        </Button>
    )
}
