import { Header } from '@/components/shared/Header'
import { Box } from '@mantine/core'
import React from 'react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box component="main" pt={75}>
            <Header />

            <main>{children}</main>
        </Box>
    )
}
