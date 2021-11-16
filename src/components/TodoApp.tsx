import React ,{useState} from 'react'
import { Todo } from '../models/Todo';
import TodoList from './TodoList';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState<Todo[]>([]);

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(input.length){
      const newItem:Todo = {
        title: input,
        id: new Date().getTime()
      }
      setList([...list,newItem]);
      setInput('')
    }


  }

  return (
    <div className="TodoApp">
        <h2>TODO</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="newTodo"> What do you need to do?</label>
          <br/>
          <input
            onChange={({target: {value}})=>setInput(value)}
            value={input}
          
           type="text"/>
          <button>Add Item</button>
        </form>
        <TodoList list={list} />
    </div>
  )
}

export default TodoApp;