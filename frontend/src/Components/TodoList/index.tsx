import './TodoList.css'

function TodoList({children}: {children: React.ReactNode}) {
  return (
    <ul className="TodoList">
      {children}
    </ul>
    )
}

export {TodoList};