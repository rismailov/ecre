import { LogoSizes } from '@/ts/enums/Logo.enums';

type Props = {
    size?: LogoSizes;
    style?: object;
};

export const Logo = ({ size = LogoSizes.SM, style = {} }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            style={style}
            viewBox="0 0 474 474"
            fill="none"
        >
            <path
                d="M237 0.210007C106.23 0.210007 0.210007 106.23 0.210007 237C0.210007 367.77 106.23 473.79 237 473.79C367.77 473.79 473.79 367.77 473.79 237C473.794 106.23 367.78 0.210007 237 0.210007ZM283.094 97.296L260.516 155.015H213.496L190.914 97.296H283.094ZM264.942 203.226L270.52 243.48H202.887L208.465 203.226H264.942ZM209.454 196.121L214.169 162.121H259.263L263.97 196.121H209.454ZM271.509 250.582L277.079 290.835L196.341 290.839L201.912 250.585L271.509 250.582ZM236.712 375.611L196.345 345.296H277.068L236.712 375.611ZM189.786 338.197L195.356 297.952H278.071L283.642 338.197H189.786Z"
                fill="url(#paint0_linear_1_2)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1_2"
                    x1="89.5"
                    y1="40"
                    x2="399"
                    y2="415"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#15AABF" />
                    <stop offset="1" stopColor="#40C057" />
                </linearGradient>
            </defs>
        </svg>
    );
};
