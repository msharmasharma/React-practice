export function Counter(props){
    console.log(props.obj)
    return <div> <h1>Props are :- {props.age} {props.work } {props.tech}</h1> 
    <h1>{props.number}</h1>
    <h1>isMarried :- {props.isMarried}</h1>
    </div>
}