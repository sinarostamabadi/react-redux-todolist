import React from 'react'
import { useSelector , useDispatch } from "react-redux";

export default function ActionFilter() {

    let state=useSelector((state) => state);
    let dispatch=useDispatch();

  return (
    <div class="actions">
                    <div class="action-title">
                        actions
                    </div>
                    <button onClick={() => dispatch({
                        type:"MARK-ALL-COMPLETED"
                    })} class="mark-all-completed">mark all completed</button>
                    <button onClick={() => dispatch({
                        type:"CLEAR-COMPLETED"
                    })} class="clear-completed">clear completed</button>
                </div>
  )
}
