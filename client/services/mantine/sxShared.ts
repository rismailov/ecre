import { MantineTheme } from '@mantine/core'

// https://mantine.dev/theming/sx/#storing-styles-in-a-variable
const sxShared = {
    divider: (theme: MantineTheme) => ({
        borderColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    }),
    actionButton: (theme: MantineTheme) => ({
        borderRadius: '9999px',
        '&:hover': {
            backgroundColor: theme.colors.red[6],
            color: theme.white,
        },
        '&:active': {
            backgroundColor: theme.colors.red[5],
        },
    }),
}

export { sxShared }
