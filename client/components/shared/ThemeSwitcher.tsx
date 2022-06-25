import { sxShared } from '@/services/mantine/sxShared'
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core'
import { Sun, Moon } from 'tabler-icons-react'

export function ThemeSwitcher() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <Group position="center">
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="lg"
                color="gray"
                variant="hover"
                sx={sxShared.actionButton}
            >
                {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </ActionIcon>
        </Group>
    )
}
