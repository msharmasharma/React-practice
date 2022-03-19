import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { Todoitem } from "./Todoitem";

export function Todo (){
    const [todos , setTodo] = useState([])

    const addTodo = (data)=>{
        setTodo([...todos , data])
    }
    return (

        <div>
                <Todoinput getTodo = {addTodo} />
                {todos.map((e)=><Todoitem todo = {e} />)}
        </div>
    )
}