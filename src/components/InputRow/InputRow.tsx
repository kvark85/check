import './InputRow.css'
import {ReactNode} from "react";

type InputRowProps = {
    children: ReactNode
}

function InputRow({children}: InputRowProps) {
  return (<div className="input-row">{children}</div>)
}

export default InputRow
