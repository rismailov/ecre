import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
    header: {
        background:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        borderRadius: 10,
        marginBottom: theme.spacing.xl,
    },

    navLink: {
        fontWeight: 500,
        fontSize: '0.9rem',
    },
}))
