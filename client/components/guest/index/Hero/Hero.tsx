import {
    Box,
    Button,
    Container,
    Group,
    Stack,
    Text,
    Title,
    UnstyledButton,
} from '@mantine/core'
import Link from 'next/link'
import useStyles from './Hero.styles'
import { useAuth } from '@/hooks/useAuth'
import { ArrowRight } from 'tabler-icons-react'

export const Hero = () => {
    const { user } = useAuth({ middleware: 'none' })
    const { classes } = useStyles()

    return (
        <Box className={classes.wrapper}>
            <Container className={classes.container}>
                <Stack className={classes.group}>
                    <Title order={1} className={classes.title}>
                        <Text inherit component="span">
                            E-commerce website. Done
                            <Text inherit component="span" color="red">
                                {` ${'right'}`}
                            </Text>
                            .
                        </Text>
                    </Title>

                    <Group mt="md" align="center" spacing="xl">
                        <Link href={user ? '/dashboard' : '/auth/register'} passHref>
                            <Button size="sm" color="red" component="a">
                                {user ? 'Visit dashboard' : 'Sign up for free'}
                            </Button>
                        </Link>

                        <UnstyledButton
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                color="dimmed"
                                weight="500"
                                style={{ fontSize: '0.9rem' }}
                            >
                                Login as a test user
                            </Text>

                            <ArrowRight
                                size="15"
                                style={{ marginLeft: 7, opacity: '0.7' }}
                            />
                        </UnstyledButton>
                    </Group>
                </Stack>
            </Container>
        </Box>
    )
}
