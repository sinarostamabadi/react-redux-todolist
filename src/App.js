import React from 'react'
import Main from './components/Main'
import { combineReducers } from '@reduxjs/toolkit';
import { produce } from "immer";

// function todos(state=[] , action) {
//     switch (action.type) {
//         case "ADD-TODO":
//             let {todo}=action.payload;

//             return [...state , todo]

//         case "REMOVE-TODO":
//             let {id}=action.payload;

//             return state.filter((todo) => {
//                 return todo.id!==id
//             })

//         case "TOGGLE-TODO": {
//             let {status , id}=action.payload;

//             return state.map((todo) => {
//                 if(todo.id!==id) {
//                     return todo
//                 }
//                 return {
//                     ...todo,
//                     completed:status
//                 }
//             })

//         }

//         case "SET-COLOR":{
//             let {color , id}=action.payload;

//             return state.map((todo) => {
//                 if(todo.id!==id) {
//                     return todo
//                 }
//                 return {
//                     ...todo,
//                     color
//                 }
//             })

//         }

//         case "MARK-ALL-COMPLETED":

//         return state.map((todo) => {
//             return {
//                 ...todo,
//                 completed:true
//             }
//         })

//         case "CLEAR-COMPLETED":

//         return state.map((todo) => {
//             return {
//                 ...todo,
//                 completed:false
//             }
//         })

//         default:
//             return state;
//     }
// }


export let todos=produce((state , action) => {
    switch (action.type) {
        case "ADD-TODO": {
            let {todo}=action.payload;
            state.push(todo);
            break;
        }

        case "REMOVE-TODO": {
            let {id}=action.payload;
            let index=state.findIndex((todo) => {
                return todo.id===id
            })
            state.splice(index , 1);
            break;
        }

        case "TOGGLE-TODO": {
            let {id}=action.payload;
            state.forEach((todo) => {
                if(todo.id===id) {
                    todo.completed=!todo.completed
                }
            })
            break;
        }

        case "SET-COLOR": {
            let {id , color}=action.payload;
            state.forEach((todo) => {
                if(todo.id===id) {
                    todo.color=color;
                }
            })
            break;
        }

        case "MARK-ALL-COMPLETED":{
            state.forEach((todo) => {
                todo.completed=true;
            })
            break;
        }

        case "CLEAR-COMPLETED": {
            state.forEach((todo) => {
                todo.completed=false;
            })
            break;
        }
    }
} , [])


// function completedFilter(state="SHOW-ALL" , action) {
//     switch (action.type) {
//         case "SET-FILTER":
//             let {filter}=action.payload;

//             return filter;

//             break;
    
//         default:
//             return state;
//     }
// }


export let completedFilter=produce((state , action) => {
    switch (action.type) {
        case "SET-FILTER": {
            let {filter}=action.payload;
            state.status=filter;
            break;
        }    
    }
} , {status:"SHOW-ALL"})

console.log(completedFilter);

export function colorFilter(state=[] , action) {
    switch (action.type) {
        case "ADD-FILTER-COLOR":
            let {color}=action.payload;

            return [...state , color];

        case "REMOVE-FILTER-COLOR":{
            let{color}=action.payload;

            return state.filter((colorItem) => {
                return colorItem!==color;
            })

        }
    
        default:
            return state;
    }
}


export function addTodoActionFunction(todo) {
    return {
        type:"ADD-TODO",
        payload:{
            todo
        }
    }
}


export function removeTodoActionFunction(id) {
    return {
        type:"REMOVE-TODO",
        payload:{
            id
        }
    }
}


export let reducer=combineReducers({
    todos,
    completedFilter,
    colorFilter
})

export default function App() {
  return (
    <Main />
  )
}
