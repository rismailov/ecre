import { Box, Loader, Text } from '@mantine/core'

type FetchingStatesHandlerProps = {
    data: any
    isLoading: boolean
    isError: boolean
    messages: {
        fetchError: string
        emptyData: string
    }
}

export const FetchingStatesHandler = ({
    data,
    isLoading,
    isError,
    messages,
}: FetchingStatesHandlerProps) => {
    return (
        <Box
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
            }}
        >
            {isLoading && <Loader variant="dots" color="blue" />}

            {!isLoading && (!data || isError) && (
                <Text color="red">{messages.fetchError}</Text>
            )}

            {data && !data.length && <Text>{messages.emptyData}</Text>}
        </Box>
    )
}
