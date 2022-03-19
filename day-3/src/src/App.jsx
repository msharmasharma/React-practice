import { useState } from 'react'
import './App.css'
import { Todo } from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

    // const getData = (data)=>{
    //   console.log(data)
    //   setCount(data)
    // }

  return (
    <div className="App">
      {/* <First data={getData} />
      <Right data = {count} />      */}

      <Todo/>
    </div>
  )
}
// function First({data}){
//   const counter = 10
//     data(counter)
//   return <div>
//     Left:- {counter}
//   </div>
// }
// function Right({data}){
//    return <div>
//      Right:{data}
//      </div>
// }
export default App

// passing data from child to parent 
// passing data from sibling to sibling