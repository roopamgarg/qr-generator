import * as React from 'react';
import { TextInput } from '../../Components/Input/TextInput/TextInput';
import { QRCode } from '../../Components/QRCode/QRCode';
import { ColorPickerInput } from '../../Components/Input/ColorPicker/ColorPicker';
import "./QRStudio.css"
import { captureDivAsPNG, downloadCanvasAsPNG } from '../../utils/canvasUtils';
import { Button } from '../../Components/Button/Button';

export interface IQRStudioProps {
}

export function QRStudio(props: IQRStudioProps) {

    const [userInput, setUserInput] = React.useState("");
    const [qrColor, setQrColor] = React.useState("linear-gradient(125deg, rgba(0,102,255,1) 0%, rgba(0,255,255,1) 100%)");
    const [outsideQRColor, setOutsideQRColor] = React.useState("rgba(0,0,0,0");
    const [insideORColor, setInsideORColor] = React.useState("rgba(255,255,255,1");
    const [scale, setScale] = React.useState("12");

    function onTextChangeHandler(event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setUserInput(value);
    }
    function onScaleChangeHandler(event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setScale(value);
    }

    function onColorChangeHandler(value: string) {
        setQrColor(value)
    }
    function downloadPNG() {
        captureDivAsPNG("qr-container")
    }

    return (
        <div>
            <div>
                <h1>URL To QR Code</h1>
            </div>
            <div className='qrstudio__section__input'>

            </div>
            <div className='qrstudio__section__settings'>
                <div className='qrstudio__qrcontainer'>
                    <div id="qr-container">
                    <QRCode id="qr-canvas" scale={parseInt(scale)} value={userInput} color={qrColor} outsideQRColor={outsideQRColor} insideQRColor={insideORColor} />
                    </div>
                </div>
                <div className='qrstudio__buttons'>

                    <TextInput placeholder='URL' type="text" value={userInput} onChange={onTextChangeHandler} />
                    <TextInput placeholder='Scale' type="number" value={scale} onChange={onScaleChangeHandler} />

                    <ColorPickerInput value={qrColor} onChange={onColorChangeHandler} text={"Background"} />
                    <ColorPickerInput value={outsideQRColor} onChange={setOutsideQRColor} hideGradientControls={true} text={"outside"} />
                    <ColorPickerInput value={insideORColor} onChange={setInsideORColor} hideGradientControls={true} text={"inside"} />
                    {/* <img src={(QRContainerId && captureDivAsPNG(QRContainerId)) || ""} alt="hello"/> */}
                    <Button onClick={downloadPNG} text={"Download PNG"}/>
                    {/* <button onClick={downloadPNG}></button> */}
                </div>

            </div>
        </div>
    );
}
