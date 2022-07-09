import ProductInterface, { ProductImage } from '@/ts/interfaces/Product.interface'
import { Button, Card, Image, Stack, Text, useMantineTheme } from '@mantine/core'

export const ProductCard = ({
    product: { name, supply, price, images },
}: {
    product: ProductInterface
}) => {
    const theme = useMantineTheme()

    return (
        <Card withBorder p="lg" radius="md">
            {images && images.length && (
                <Card.Section>
                    {images.map((img: ProductImage, i: number) => (
                        <Image
                            key={i}
                            src={process.env.NEXT_PUBLIC_API_URL + img.url}
                            height={225}
                            alt="Norway"
                        />
                    ))}
                </Card.Section>
            )}

            <Stack mt="sm" spacing={3}>
                <Text weight={700}>{name}</Text>

                <Text>${price}</Text>

                <Text color="dimmed" size="sm">
                    Current supply: {supply}
                </Text>

                <Button
                    mt="sm"
                    variant="light"
                    color="blue"
                    fullWidth
                    style={{ borderRadius: 9999 }}
                >
                    View details
                </Button>
            </Stack>
        </Card>
    )
}
