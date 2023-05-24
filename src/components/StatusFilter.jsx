import React from 'react'
import { useSelector , useDispatch } from "react-redux";

export default function StatusFilter() {

    let state=useSelector(state => state.completedFilter.status);
    console.log(state);
    let dispatch=useDispatch();
    
    function setFilter(filter) {
        dispatch({
            type:"SET-FILTER",
            payload:{
                filter
            }
        })
    }

  return (
    <div class="filter-by-status">
                    <div class="filter-by-status-title">
                        filter by status
                    </div>
                    <div class="filters">
                        <button onClick={() => setFilter("SHOW-ALL")}>all</button>
                        <button onClick={() => setFilter("ACTIVE")}>active</button>
                        <button onClick={() => setFilter("COMPLETED")}>completed</button>
                    </div>
                </div>  )
}
