import DashboardLayout from '@/layouts/DashboardLayout'
import { useAuth } from '@/hooks/useAuth'
import { ReactElement } from 'react'
import AppLayout from '@/layouts/AppLayout'
import { Button, Container, Group, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { ArrowRight } from 'tabler-icons-react'

export default function dashboardIndex() {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <>
            <Group position="apart">
                <Title order={2}>
                    Welcome back,{' '}
                    <Text inherit component="span" color="orange">
                        {user?.firstName}
                    </Text>
                    .
                </Title>

                {/* <Link href="/dashboard/recipes/create" passHref>
                        <Button
                            variant="subtle"
                            compact
                            component="a"
                            size="md"
                            rightIcon={<ArrowRight size={18} />}
                            sx={(theme) => ({
                                '&:hover': { background: 'transparent' },
                                fontWeight: 500,
                                color:
                                    theme.colorScheme === 'dark'
                                        ? theme.colors.blue[3]
                                        : theme.colors.blue[9],
                            })}
                        >
                            Start off by creating your first recipe!
                        </Button>
                    </Link> */}
            </Group>
        </>
    )
}

dashboardIndex.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
            <DashboardLayout>{page}</DashboardLayout>
        </AppLayout>
    )
}
