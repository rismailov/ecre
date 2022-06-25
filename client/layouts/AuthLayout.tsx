import { ReactNode } from 'react'
import {
    Card,
    Text,
    Title,
    Center,
    createStyles,
    Grid,
    Stack,
    Container,
    Box,
} from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import { LogoWithBrand } from '@/components/shared/LogoWithBrand'

interface AuthLayoutProps {
    children: ReactNode
    title: string
    oppositeComponentHref: string
    oppositeComponentDesc: string
}

const useStyles = createStyles((theme) => ({
    card: {
        width: '100%',
        maxWidth: '25rem',
        backgroundColor:
            theme.colorScheme === 'light'
                ? 'transparent'
                : theme.fn.darken(theme.colors.dark[6], 0.1),
    },
}))

export default function AuthLayout({
    children,
    title = 'Title',
    oppositeComponentHref,
    oppositeComponentDesc,
}: AuthLayoutProps) {
    const { classes } = useStyles()

    return (
        <Grid grow gutter={0} columns={13} style={{ height: '100vh' }}>
            <Grid.Col
                span={6}
                sx={(theme) => ({
                    position: 'relative',
                    backgroundColor: theme.fn.rgba(theme.colors.red[4], 0.1),
                })}
                style={{ height: '100%' }}
            >
                <Container size="xs">
                    <Center sx={{ height: '100%' }}>
                        <Stack>
                            <LogoWithBrand size="md" />

                            <Title order={1} sx={{ lineHeight: 1, marginBottom: 75 }}>
                                <Text inherit color="dimmed">
                                    Discover the world’s top Designers & Creatives.
                                </Text>
                            </Title>

                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    minHeight: '400px',
                                }}
                            >
                                <Image
                                    src="/images/svgs/cart-illustration.svg"
                                    objectFit="cover"
                                    layout="fill"
                                ></Image>
                            </Box>

                            <Text
                                component="p"
                                color="dimmed"
                                weight="500"
                                size="xs"
                                sx={{
                                    position: 'absolute',
                                    bottom: '0.25rem',
                                    right: '1rem',
                                }}
                            >
                                * Image taken from{' '}
                                <Text component="span" inherit color="blue">
                                    https://manypixels.co
                                </Text>
                            </Text>
                        </Stack>
                    </Center>
                </Container>
            </Grid.Col>

            <Grid.Col span={7} style={{ height: '100%' }}>
                <Stack
                    spacing="xs"
                    sx={(theme) => ({
                        maxWidth: theme.breakpoints.xs,
                        height: '100%',
                        paddingLeft: '3rem',
                        paddingTop: '8rem',
                    })}
                >
                    <Title order={1}>
                        <Text inherit weight={'bolder'}>
                            {title}
                        </Text>
                    </Title>

                    <Text weight={500} component="span" variant="text" color="dimmed">
                        Or{' '}
                        <Link href={oppositeComponentHref}>
                            <Text
                                component="span"
                                variant="link"
                                color="blue"
                                sx={{ cursor: 'pointer' }}
                            >
                                {oppositeComponentDesc}
                            </Text>
                        </Link>
                    </Text>

                    <Card
                        withBorder={true}
                        radius="md"
                        p="xl"
                        mt="sm"
                        className={classes.card}
                    >
                        {children}
                    </Card>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}
