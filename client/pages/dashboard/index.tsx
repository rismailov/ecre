import DashboardLayout from '@/layouts/DashboardLayout'
import { useAuth } from '@/hooks/useAuth'
import { ReactElement } from 'react'
import { Group, Text, Title } from '@mantine/core'
import AppLayout from '@/layouts/AppLayout'

export default function DashboardIndex() {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <>
            <Group position="apart">
                <Title order={2}>
                    Welcome back,{' '}
                    <Text inherit component="span" color="red">
                        {user?.firstName}
                    </Text>
                    .
                </Title>
            </Group>
        </>
    )
}

DashboardIndex.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
            <DashboardLayout>{page}</DashboardLayout>
        </AppLayout>
    )
}
