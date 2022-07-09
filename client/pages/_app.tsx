import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { ColorSchemeProvider, LoadingOverlay, MantineProvider } from '@mantine/core'
import { getCookie, setCookies } from 'cookies-next'
import { useEffect, useState } from 'react'
import type { ColorScheme } from '@mantine/core'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { NotificationsProvider } from '@mantine/notifications'
import { ReactQueryDevtools } from 'react-query/devtools'
import { providerStyles } from '@/services/mantine/providerStyles'
import { LoaderContext } from '@/context/LoaderContext'
import { useRouter } from 'next/router'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

export default function App({
    Component,
    colorScheme: colorSchemeProp,
    pageProps,
}: AppProps & {
    Component: NextPageWithLayout
    colorScheme: ColorScheme
}) {
    /* https://nextjs.org/docs/basic-features/layouts#per-page-layouts */
    const getLayout = Component.getLayout || ((page) => page)

    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                    },
                },
            }),
    )

    const [colorScheme, setColorScheme] = useState<ColorScheme>(colorSchemeProp)
    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
        setColorScheme(nextColorScheme)
        setCookies('mantine-color-scheme', nextColorScheme, {
            maxAge: 60 * 60 * 24 * 30,
        })
    }

    // page loader
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const onRouteChangeError = () => setIsLoading(false)
        const onRouteChangeComplete = () => setIsLoading(false)

        router.events.on('routeChangeComplete', onRouteChangeComplete)
        router.events.on('routeChangeError', onRouteChangeError)

        return () => {
            router.events.off('routeChangeComplete', onRouteChangeComplete)
            router.events.off('routeChangeError', onRouteChangeComplete)
        }
    }, [router.events])

    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        primaryColor: 'red',
                        primaryShade: 6,
                        colorScheme,
                        loader: 'bars',
                    }}
                    emotionOptions={{ key: 'mantine' }}
                    defaultProps={{
                        Container: {
                            size: 'xl',
                        },
                        LoadingOverlay: {
                            overlayOpacity: 0.8,
                        },
                        Button: {
                            loaderProps: { variant: 'oval' },
                        },
                        Divider: {
                            sx: { opacity: '0.5' },
                        },
                        ActionIcon: {
                            loaderProps: { variant: 'oval' },
                        },
                    }}
                    styles={providerStyles}
                >
                    <NotificationsProvider>
                        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
                            <LoadingOverlay visible={isLoading} />

                            <QueryClientProvider client={queryClient}>
                                {getLayout(<Component {...pageProps} />)}
                                <ReactQueryDevtools initialIsOpen={false} />
                            </QueryClientProvider>
                        </LoaderContext.Provider>
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
    colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
})
