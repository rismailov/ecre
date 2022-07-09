import { CreateProductFormValues } from '@/ts/interfaces/Product.interface'
import {
    Button,
    Group,
    InputWrapper,
    LoadingOverlay,
    NumberInput,
    Stack,
    TextInput,
} from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import { useFocusTrap } from '@mantine/hooks'
import { ChangeEvent } from 'react'
import { CirclePlus } from 'tabler-icons-react'

interface Props {
    isLoading: boolean
    form: UseFormReturnType<CreateProductFormValues>
    onSubmit: (value: CreateProductFormValues) => void
}

export const CreateProductForm = ({ isLoading, form, onSubmit }: Props) => {
    const focusTrapRef = useFocusTrap()
    const handleImageSet = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files.length) return

        form.setFieldValue('image', e.target.files[0])
    }
    // const handleImagesSet = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (!e.target.files || !e.target.files.length) return

    //     form.setFieldValue('images', e.target.files)
    // }

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <LoadingOverlay visible={isLoading} />

            <Stack>
                <TextInput
                    ref={focusTrapRef}
                    required
                    id="name"
                    label="Product name"
                    placeholder="Beats by DRE."
                    {...form.getInputProps('name')}
                />

                <Group grow>
                    <NumberInput
                        required
                        id="supply"
                        label="Supply"
                        placeholder="1000"
                        {...form.getInputProps('supply')}
                    />

                    <NumberInput
                        required
                        id="price"
                        label="Price"
                        placeholder="15.33"
                        precision={2}
                        step={0.05}
                        {...form.getInputProps('price')}
                    />
                </Group>

                <InputWrapper
                    required
                    id="image"
                    label="Product image"
                    description="Primary image for the product"
                    error={form.errors.image}
                >
                    <input type="file" name="image" multiple onChange={handleImageSet} />
                </InputWrapper>
            </Stack>

            <Button
                type="submit"
                fullWidth
                mt="xl"
                loading={isLoading}
                color="green"
                sx={{ height: 40 }}
                rightIcon={<CirclePlus size="18" />}
            >
                Create
            </Button>
        </form>
    )
}
