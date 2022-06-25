import AppLayout from '@/layouts/AppLayout'
import React from 'react'
import Hero from '@/components/guest/index/Hero'
import { Divider } from '@mantine/core'
import { sxShared } from '@/services/mantine/sxShared'

export default function home() {
    return (
        <>
            <Hero />
            <Divider sx={sxShared.divider} />
        </>
    )
}

home.getLayout = function getLayout(page: React.ReactElement) {
    return <AppLayout>{page}</AppLayout>
}
