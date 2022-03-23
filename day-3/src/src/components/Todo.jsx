import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { Todoitem } from "./Todoitem";
import { nanoid } from "nanoid";

export function Todo (){
    const [todos , setTodo] = useState([])

    const addTodo = (data)=>{
        const t = {
            id:nanoid(),
           title:data ,
           status:false,
        }
        setTodo([...todos , t])
    }
    return (

        <div>
                <Todoinput getTodo = {addTodo} />
                {todos.map((e)=><Todoitem todo = {e} key={e.id} />)}
        </div>
    )
}