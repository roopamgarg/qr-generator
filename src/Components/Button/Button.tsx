import * as React from 'react';
import "./Button.css"

export interface IButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    text: string;
}

export function Button (props: IButtonProps) {
  return (
    <button className="button" onClick={props.onClick}>{props.text}</button>
  );
}
