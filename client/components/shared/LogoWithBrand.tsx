import Link from 'next/link'
import Image from 'next/image'
import { UnstyledButton } from '@mantine/core'

const LogoWithBrandSizes = {
    sm: { w: '80px', h: '20px' },
    md: { w: '120px', h: '30px' },
}

export const LogoWithBrand = ({
    size = 'sm',
}: {
    size?: keyof typeof LogoWithBrandSizes
}) => (
    <Link href="/" passHref>
        <UnstyledButton
            component="a"
            sx={{
                position: 'relative',
                width: LogoWithBrandSizes[size].w,
                minHeight: LogoWithBrandSizes[size].h,
                '&:hover': { opacity: 0.8 },
            }}
        >
            <Image
                src="/logo/logo-horizontal.svg"
                layout="fill"
                objectFit="cover"
                alt="Logotype"
            ></Image>
        </UnstyledButton>
    </Link>
)
