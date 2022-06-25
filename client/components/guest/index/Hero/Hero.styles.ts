import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
    wrapper: {
        width: '100%',
        position: 'relative',
        paddingBottom: 20,
    },

    container: {
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        lineHeight: 1.1,
        textAlign: 'center',
    },

    group: {
        maxWidth: theme.breakpoints.xs,
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
}))
