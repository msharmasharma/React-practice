import { useState } from "react"

export function Todoinput({getTodo}){
    const [text , setText] = useState("")
    return(
        <>
        <input type="text" placeholder="add todo"  onChange={(e)=>{
                setText(e.target.value)
        }}/>
        <button onClick={()=>getTodo(text)}>Add</button>
        </>
    )
}
