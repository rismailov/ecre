import type { MantineProviderProps, MantineTheme } from '@mantine/core'

export const providerStyles: MantineProviderProps['styles'] = {
    Container: {
        root: {
            height: '100%',
        },
    },
    Card: (theme) => ({
        root: {
            width: '100%',
            backgroundColor:
                theme.colorScheme === 'light'
                    ? 'transparent'
                    : theme.fn.darken(theme.colors.dark[6], 0.1),
        },
    }),
    Title: (theme) => ({
        root: {
            color:
                theme.colorScheme === 'dark'
                    ? theme.colors.gray[0]
                    : theme.colors.gray[8],
        },
    }),
    Input: (theme) => ({
        input: {
            paddingTop: 17,
            paddingBottom: 17,
            '&:focus-within': {
                boxShadow: `0 0 0 0.05rem ${theme.colors.red[6]}`,
            },
        },
    }),
    TextInput: (theme) => ({
        input: {
            paddingTop: 17,
            paddingBottom: 17,
            '&:focus-within': {
                boxShadow: `0 0 0 0.05rem ${theme.colors.red[6]}`,
            },
        },
    }),
    NumberInput: (theme) => ({
        input: {
            paddingTop: 17,
            paddingBottom: 17,
            '&:focus-within': {
                boxShadow: `0 0 0 0.05rem ${theme.colors.red[6]}`,
            },
        },
    }),
    PasswordInput: (theme) => ({
        input: {
            paddingTop: 17,
            paddingBottom: 17,
            '&:focus-within': {
                boxShadow: `0 0 0 0.05rem ${theme.colors.red[6]}`,
            },
        },
    }),
}
