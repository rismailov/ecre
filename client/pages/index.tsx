import AppLayout from '@/layouts/AppLayout'
import React from 'react'
import { Hero } from '@/components/guest/index/Hero'
import { Divider } from '@mantine/core'
import { sxShared } from '@/services/mantine/sxShared'
import { Products } from '@/components/guest/Products'

export default function home() {
    return (
        <>
            <Hero />

            <Divider sx={sxShared.divider} />

            <Products />
        </>
    )
}

home.getLayout = function getLayout(page: React.ReactElement) {
    return <AppLayout>{page}</AppLayout>
}
