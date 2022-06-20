import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Todo from './Components/Todo';
import { useState, useEffect} from 'react';
function App() {

  //state: variables for saved state of the application // event => update realtime 
  const [name, setName] = useState('BerNardTran');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    {id:'todo1', title:'learn react', type:'bernard'},
    {id:'todo2', title:'doing something', type:'bernard'},
    {id:'todo3', title:'doing something 2',type:'bear'},
    {id:'todo4', title:'doing something 4',type:'bearbear'}
  ]);
  
  useEffect(()=>{
    console.log('>>>> run useEffect');
  })
  const handleEventClick = () => {
    // setName(address);
    // console.log('>>>>> Click me', name);
    // hook not merge state 
    // ... spread syntax
    if(!address) {
      alert('empty input title');
      return;
    }
    let newTodo = {id: Math.floor((Math.random() *10 + 1)), title: address, type:'bernard'};
    setTodos([...todos, newTodo]);
    setAddress('');
  };

  const handleAddressOnChange = (event) => {
    setAddress(event.target.value);
    console.log('>>>>> Click me: ', event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodo = todos;
    currentTodo = todos.filter((item)=> item.id !== id);
    setTodos(currentTodo);
  }
  //re-render  
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with react and {name} </h1>

        <Todo 
          // myData={todos}
          todos={todos}
          title='all todos'
          deleteDataTodo={deleteDataTodo}
        />

        <Todo 
          // myData={todos}
          todos={todos.filter((todo) => todo.type === 'bernard')}
          title={`bernard's type`}
          deleteDataTodo={deleteDataTodo}
        />
        <input type='text' value={address} onChange={(event) => handleAddressOnChange(event)}/>
        {/* <input type='text' value="bernard" onClick={(event)=>{handleEventClick(event)}}/> */}
        <button type="button" onClick={(event)=>{handleEventClick(event)}}>Click Me</button>
      

        {/* <p>{JSON.stringify(obj)}</p> */}
        {/* <a href="https://github.com/BerNardTran" target="_blank">Click here</a> */}
      </header>
    </div>
  );
}

export default App;
