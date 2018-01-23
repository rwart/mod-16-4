import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props =>
  <ul className={style.TodoList}>
    {props.List.map(item =>
      <Todo
        key={item.id}
        item={item}
        HandleRemoveTodo={props.HandleRemoveTodo}
      />)}
  </ul>;

export default TodoList;
