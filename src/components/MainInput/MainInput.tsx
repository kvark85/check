import './MainInput.css'

type MainInputProps = {
    id: string
    label: string
}

function MainInput(props: MainInputProps) {
  const {id, label} = props
  return (
    <div className="styled-input">
      <label className="styled-input-label" htmlFor={id}>{label}</label>
      <input className="styled-input-input" type="text" id={id} placeholder={id} />
    </div>
  )
}

export default MainInput
