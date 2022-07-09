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
    Anchor,
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

export default function AuthLayout({
    children,
    title = 'Title',
    oppositeComponentHref,
    oppositeComponentDesc,
}: AuthLayoutProps) {
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

                            <Title
                                order={1}
                                sx={{ marginTop: 20, lineHeight: 1, marginBottom: 75 }}
                            >
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
                                * Illustration taken from{' '}
                                <Anchor
                                    href="https://manypixels.co"
                                    target="_blank"
                                    color="blue"
                                    size="xs"
                                >
                                    https://manypixels.co
                                </Anchor>
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
                        sx={(theme) => ({ maxWidth: theme.breakpoints.xs / 1.25 })}
                    >
                        {children}
                    </Card>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}
