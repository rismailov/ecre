import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
    divider: { height: '60px' },

    navLink: {
        fontWeight: 500,
        color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[4],
        fontSize: '0.875rem',

        '&:hover': {
            opacity: '0.5',
        },
    },
}))
