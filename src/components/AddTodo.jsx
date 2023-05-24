import React from 'react'
import { useState } from 'react'
import nextId from "react-id-generator";
import { useSelector , useDispatch } from "react-redux";
import { addTodoActionFunction } from '../App';

export default function AddTodo() {
    const [todo , setTodo]=useState("");

    let state=useSelector((state) => state.todos);
    let dispatch=useDispatch();

    function addTodo() {
        dispatch(addTodoActionFunction({
                    id:nextId(),
                    title:todo,
                    color:null,
                    completed:false
        }))
        setTodo("");
    }

  return (
    <div class="add-todo">
                <input value={todo} onChange={(event) => setTodo(event.target.value)} type="text" placeholder="What needs to be done ?" />
                <button onClick={() => addTodo()} class="add-todo-button">add</button>
            </div>
  )
}
