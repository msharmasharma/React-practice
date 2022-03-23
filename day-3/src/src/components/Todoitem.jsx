export function Todoitem({todo}){
    return (
        <div>
            {todo.title } - {todo.status ? "DONE" : "NOT DONE"} 
            <button onClick> Toggle </button>
        </div>
    )
}