function ButtonAction({ label, actionHandler }){
  return (
    <button onClick={actionHandler}>{ label }</button>
  )
}

export default ButtonAction
