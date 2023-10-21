import * as React from 'react';
import * as QRCodeMaker from 'qrcode';
import "./QRCode.css"
import { rgbaToHex } from '../../utils/colorUtils';
export interface IQRCodeProps {
    id: string;
    value: string;
    color? : string;
    outsideQRColor?: string;
    insideQRColor?: string;
    scale?: number;
    shouldHide?: boolean;
}

export function QRCode (props: IQRCodeProps) {
    React.useEffect(() => {
        console.log(props)
        QRCodeMaker.toCanvas(document.getElementById(props.id), props.value || "ViralEngine.in", {
            scale: Math.min(100, props.scale || 12),
            color: {
                dark:  props.insideQRColor ? rgbaToHex(props.insideQRColor) : "#ffffff00",
                light: props.outsideQRColor ? rgbaToHex(props.outsideQRColor) : "#000000ff"
            }
        });
    }, [props.value, props.outsideQRColor, props.insideQRColor, props.scale])
  return (
    <canvas id={props.id} style={{background: props.color || "#00000000", display: props.shouldHide? "none" : "block"}}>
    
    </canvas>
  );
}
