import * as ColorPickerInputfrom from "./ColorPicker";

export interface IColorPickerInputProps {
    value: string;
    text: string;
    onChange: (value: string) => void;
    hideGradientControls?: boolean;
}

export function ColorPickerInput (props: IColorPickerInputProps) : JSX.Element
