import React from 'react'
import { useSelector , useDispatch } from "react-redux";

export default function ColorFilterItem({color}) {
    
    let colorFilter=useSelector((state) => state.colorFilter);
    let dispatch=useDispatch();

    console.log(colorFilter);

    let toggleTodo=(event) => {
        if(event.target.checked) {
            dispatch({
                type:"ADD-FILTER-COLOR",
                payload:{
                    color
                }
            })} else if(!event.target.checked) {
                dispatch({
                    type:"REMOVE-FILTER-COLOR",
                    payload:{
                        color
                    }
                })
            }
    }

  return (
    <div class="colors-filter-box green">
                            <input onChange={toggleTodo} type="checkbox" name={color} id={color} />
                            <div style={{backgroundColor:color}} class="color-show green-color"></div>
                            <label for={color}>{color}</label>
                        </div>
  )
}
