import AdminLayout from '@/layouts/AdminLayout'
import AppLayout from '@/layouts/AppLayout'
import { Container } from '@mantine/core'
import { ReactElement } from 'react'

export default function AdminIndex() {
    return (
        <Container>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, eveniet.
        </Container>
    )
}

AdminIndex.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
            <AdminLayout>{page}</AdminLayout>
        </AppLayout>
    )
}
