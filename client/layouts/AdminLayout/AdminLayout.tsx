import { Container, Group, Header, UnstyledButton, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import useStyles from './AdminLayout.styles'

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const theme = useMantineTheme()
    const { classes } = useStyles()

    return (
        <Container>
            <Header height={50} className={classes.header}>
                <Group align="center">
                    <Link href="/admin" passHref>
                        <UnstyledButton component="a" className={classes.navLink}>
                            Admin index
                        </UnstyledButton>
                    </Link>

                    <Link href="/admin/products" passHref>
                        <UnstyledButton component="a" className={classes.navLink}>
                            Products
                        </UnstyledButton>
                    </Link>
                </Group>
            </Header>

            {children}
        </Container>
    )
}
