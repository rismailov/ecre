import {
    Header as MantineHeader,
    Button,
    Container,
    Group,
    Divider,
    ActionIcon,
    UnstyledButton,
    Menu,
} from '@mantine/core'
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { ChevronDown, Edit, Logout, Search, ShoppingCart, User } from 'tabler-icons-react'
import useStyles from './Header.styles'
import { NextLink } from '@mantine/next'
import { slideDown } from '@/services/mantine/transitions'
import { sxShared } from '@/services/mantine/sxShared'
import { LogoWithBrand } from '../LogoWithBrand'

export const Header = () => {
    const { user, logout } = useAuth()
    const { classes } = useStyles()

    return (
        <MantineHeader height={60} fixed={true}>
            <Container>
                <Group position="apart" align="center" sx={{ height: '100%' }}>
                    <Group spacing="lg" align="center">
                        <LogoWithBrand />

                        <Divider
                            orientation="vertical"
                            className={classes.divider}
                            sx={sxShared.divider}
                        />

                        <Group spacing="sm" align="center">
                            <Link passHref href="/women">
                                <UnstyledButton component="a" className={classes.navLink}>
                                    Women
                                </UnstyledButton>
                            </Link>
                            <Link passHref href="/men">
                                <UnstyledButton component="a" className={classes.navLink}>
                                    Men
                                </UnstyledButton>
                            </Link>
                            <Link passHref href="/babies">
                                <UnstyledButton component="a" className={classes.navLink}>
                                    Babies
                                </UnstyledButton>
                            </Link>
                        </Group>
                    </Group>

                    <Group spacing="sm" align="center">
                        <ActionIcon size="lg" sx={sxShared.actionButton}>
                            <Search size={18} />
                        </ActionIcon>

                        <Divider
                            orientation="vertical"
                            className={classes.divider}
                            sx={sxShared.divider}
                        />

                        <ThemeSwitcher />

                        <Divider
                            orientation="vertical"
                            className={classes.divider}
                            sx={sxShared.divider}
                        />

                        {user && (
                            <>
                                <Menu
                                    control={
                                        <Button
                                            variant="light"
                                            rightIcon={<ChevronDown size={17} />}
                                            sx={{
                                                ':active': {
                                                    transform: 'translateY(0) !important',
                                                },
                                            }}
                                        >
                                            {user.fullName}
                                        </Button>
                                    }
                                    transition={slideDown}
                                    styles={{
                                        itemLabel: {
                                            fontSize: '0.8rem',
                                            fontWeight: 500,
                                        },
                                    }}
                                >
                                    {/* section */}
                                    <Menu.Label>Application</Menu.Label>
                                    <Menu.Item
                                        component={NextLink}
                                        href="/dashboard"
                                        icon={<User size={17} />}
                                    >
                                        Dashboard
                                    </Menu.Item>
                                    <Menu.Item
                                        component={NextLink}
                                        href="/dashboard/profile"
                                        icon={<Edit size={17} />}
                                    >
                                        Profile
                                    </Menu.Item>
                                    <Divider />

                                    {/* section */}
                                    <Menu.Label>Danger zone</Menu.Label>
                                    <Menu.Item
                                        color="red"
                                        onClick={() => logout()}
                                        icon={<Logout size={17} />}
                                    >
                                        Logout
                                    </Menu.Item>
                                </Menu>
                            </>
                        )}

                        {!user && (
                            <>
                                <Link href="/auth/login" passHref>
                                    <Button
                                        component="a"
                                        variant="light"
                                        color="gray"
                                        styles={(theme) => ({
                                            light: {
                                                color:
                                                    theme.colorScheme === 'dark'
                                                        ? theme.colors.gray[0]
                                                        : theme.colors.dark[6],
                                            },
                                        })}
                                    >
                                        Log In
                                    </Button>
                                </Link>

                                <Link href="/auth/register" passHref>
                                    <Button component="a">Join for free</Button>
                                </Link>
                            </>
                        )}

                        <Divider
                            orientation="vertical"
                            className={classes.divider}
                            sx={sxShared.divider}
                        />

                        <ActionIcon size="lg" sx={sxShared.actionButton}>
                            <ShoppingCart size={18} />
                        </ActionIcon>

                        <Divider
                            orientation="vertical"
                            className={classes.divider}
                            sx={sxShared.divider}
                        />

                        <Link href="/admin">Admin dahsboard</Link>
                    </Group>
                </Group>
            </Container>
        </MantineHeader>
    )
}
