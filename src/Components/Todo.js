const Todo = (props) => {
    // const todos = props.myData;
    // const todos= props.todos;
    // console.log('>>>> check props', props);
    const {todos, title, deleteDataTodo} = props;

    const handleDelete = (id) =>{
        deleteDataTodo(id);
        // alert(id);
    }
    
  return (
    <div className="todos-container">
        <div className="title">
            {title}
        </div>
      {todos.map((todo, index) => {
        return (
            <div key={todo.id}>
                <li className="todo-child" id={index}>
                    {todo.title}
                    &nbsp; &nbsp; <span onClick={()=>handleDelete(todo.id)}>x</span>
                </li>
               
            </div>
        );
      })}
      <hr></hr>
    </div>
  );
};

export default Todo;
