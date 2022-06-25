import { useAuth } from '@/hooks/useAuth'
import { Box, Container } from '@mantine/core'
import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user: _ } = useAuth({ middleware: 'auth' })

    return (
        <Box>
            <Container>{children}</Container>
        </Box>
    )
}
