import React from 'react'
import "./styles/reduxTodo-1.css";
import Header from './Header';
import AddTodo from './AddTodo';
import Todo from './Todo';
import ActionFilter from './ActionFilter';
import StatusFilter from './StatusFilter';
import ColorFilter from './ColorFilter';
import { useSelector , useDispatch } from "react-redux";
import RemainingTodo from './RemainingTodo';
import { createSelector } from 'reselect';
import { completedFilter } from '../App';

export default function Main() {


    let todos=state => state.todos;
    let statusFilter=state => state.completedFilter.status;
    let colorFilter=state => state.colorFilter;
    let dispatch=useDispatch();
    let state=useSelector(state => state);


    let finalTodos=createSelector(
        todos ,
        statusFilter,
        colorFilter,
    (todos , statusFilter , colors) => {

        let applyColorFilter=colors.length > 0 ? todos.filter((todo) => colors.includes(todo.color)) : todos;

            switch (statusFilter) {
                case "SHOW-ALL":
    
                    return applyColorFilter;
                case "ACTIVE":
    
                return applyColorFilter.filter((todo) => {
                    return !todo.completed
                })
    
                case "COMPLETED":
    
                return applyColorFilter.filter((todo) => {
                    return todo.completed
                })
            
                default:
                    break;
            }
        }
    )


    let cemTodos=finalTodos(state).map((todo) => {
        return <Todo title={todo.title} id={todo.id} completed={todo.completed} elementColor={todo.color} />
    })


  return (
    <div class="container">
        <Header header={"Todos"} />
        <div class="todo-container">
            <AddTodo />
            <div class="todo-box">
                {cemTodos}
            </div>
            <div class="footer">
                <ActionFilter />
                <RemainingTodo />
                <StatusFilter />
                <ColorFilter />
            </div>
        </div>
    </div>
  )
}
