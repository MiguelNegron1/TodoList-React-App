import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}: {setOpenModal: (updater: (state: boolean) => boolean) => void}) {
  return (
    <button className='CreateTodoButton'onClick={() => {
      setOpenModal((state: boolean) => !state)}}>+</button>
  )
}

export {CreateTodoButton};