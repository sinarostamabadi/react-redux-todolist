import React from 'react'
import { useSelector , useDispatch } from "react-redux";

export default function RemainingTodo() {

    let todos=useSelector((state) => state.todos);

    let remainTodoCount=todos.filter((todo) => {
        return !todo.completed
    }).length;

  return (
    <div class="remaining-todos">
                    <div class="remaining-todos-title">
                        remaining todos
                    </div>
                    <div class="count-todo-left">
                       {remainTodoCount} todo left
                    </div>
                </div>
  )
}
