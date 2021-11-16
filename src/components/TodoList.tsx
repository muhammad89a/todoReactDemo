import React from 'react';
import { Todo } from '../models/Todo';

interface ITodoListProps{
  list:Todo[]
}

function TodoList(props:ITodoListProps) {
  let {list} = props;
  return (
    <ul className="TodoList">
      {list.map((item)=>(
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
