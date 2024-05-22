import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [showMadal, setShowMadal] = useState({
    show: false,
    todoId: "",
  })

  function innpa(e) {
    e.preventDefault();

    let date = new Date()

    let newTado = {
      id: date.getTime(),
      text,
      completed: false,
    };


    setTodos((prev) => [...prev, newTado])
    setText("");
  }
  console.log(todos);

  function deleteItem(itemId) {
    setTodos((prev) => prev.filter((todo) => todo.id !== itemId))
  }

  return (
    <>
      <div className='add sec-add'>
        <form onSubmit={innpa}>
          <input value={text} required type='text' onChange={(e) => {
            setText(e.target.value)
          }} />
          <button className='btn1' type='submit'>Submit</button>
        </form>
        <ul className='tod-lis'>
          {todos.length
            ? todos.map(({ id, text, completed }, ind) => {
              return <li key={id} className='ull1'>
                <p className='app1'>{text}</p>
              </li>

            }) : " :("
          }

        </ul>

      </div>
      {showMadal.show && <Modal setTodos={setTodos} itemId={showMadal.todoId} closeModal={setShowMadal} />}
    </>
  )
}

export default App
