import * as React from 'react';
import ColorPicker, {useColorPicker} from 'react-best-gradient-color-picker' ;
import "./ColorPicker.css"
import OutsideClickHandler from '../../Wrappers/OutsideClickHandler/OutsideClickHandler';


export function ColorPickerInput (props) {
    // const [color, setColor] = React.useState('linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)');
    const [hideColorPicker, setHideColorPicker] = React.useState(true);
    // const { setSolid, setGradient } = useColorPicker(color, setColor);

    function handleOutsideClick() { 
        setHideColorPicker(true)
    }
  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>

    <div className='color-picker-container'>
      {!hideColorPicker && <div className='color-picker'>
        <ColorPicker value={props.value} onChange={props.onChange} hideGradientControls={props.hideGradientControls} hideControls={props.hideGradientControls}/>
      </div>}
      <div >
        
        <button className='color-picker-button' onClick={() => {setHideColorPicker(!hideColorPicker)}}>
          <div>
            <div style={{height:"2rem", width:"2rem", background:props.value, borderRadius:"1rem"}}>
            </div>
          </div>
          <div>
          {props.text}
          </div>
          </button>
          
    </div>
    </div>
    </OutsideClickHandler>

 
  );
}
