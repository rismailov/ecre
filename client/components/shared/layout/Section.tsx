import { Group, Stack, Title } from '@mantine/core'
import React from 'react'

type SectionProps = {
    children: React.ReactNode
    title: string
    actionComponent?: React.ReactNode | null
}

export const Section = ({ children, title, actionComponent = null }: SectionProps) => {
    return (
        <Stack spacing="xl">
            <Group position="apart">
                <Title order={2}>{title}</Title>

                {actionComponent !== null && actionComponent}
            </Group>

            {children}
        </Stack>
    )
}
