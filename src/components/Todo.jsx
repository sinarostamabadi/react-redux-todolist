import React from 'react'
import { useSelector , useDispatch } from "react-redux";
import DeleteImage from '../assets/DeleteImage';
import Color from './Color';
import { useState } from 'react';
import { removeTodoActionFunction } from '../App';

export let colors=["green" , "blue" , "orange" , "purple" , "red"];

export default function Todo({title , id , completed , elementColor}) {

    let todos=useSelector(state => state.todos);
    let dispatch=useDispatch();


    let cemColor=colors.map((color) => {
        return <Color selectedColor={elementColor} color={color} />
    })


    function setColor(id , color) {
        dispatch({
            type:"SET-COLOR",
            payload:{
                id,
                color
            }
        })
    }


  return (
    <div class="todo-wrapper">
                    <div class="todo-right">
                        <div class="delete" onClick={() => dispatch(removeTodoActionFunction(id))}>
                            <DeleteImage />
                        </div>
                        <div class="color">
                            <select style={{color:elementColor}} onChange={(event) => {
                                setColor(id , event.target.value)
                            }} name="" id="">
                                <option value="none" selected={elementColor ? false : true} disabled>Color</option>
                                {cemColor}
                            </select>
                        </div>
                    </div>
                    <div class="todo-left">
                        <input onChange={(event) => {
                            dispatch({
                                type:'TOGGLE-TODO',
                                payload:{
                                    id,
                                    status:event.target.checked
                                }
                            })
                        }} type="checkbox" name="todo-done" id="todo-done" checked={completed} />
                        <div class="todo-title">
                            {title}
                        </div>
                    </div>
                </div>
  )
}
