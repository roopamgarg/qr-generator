import * as React from 'react';
import "./TextInput.css";

export interface ITextInputProps {
    type: string;
    value: string | number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
}
export function TextInput (props: ITextInputProps) {
  return (
    <div className='textInput__container'>
      <div>
        {props.placeholder}
      </div>
      <div>
        <input className='textInput' value={props.value} type={props.type} onChange={props.onChange}/>
      </div>
    </div>
  );
}
