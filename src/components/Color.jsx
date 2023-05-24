import React from 'react'

export default function Color({color , selectedColor}) {
  return (
    <option style={{color:color}} value={color} selected={color == selectedColor ? true : false} >{color[0].toLocaleUpperCase().concat(color.slice(1))}</option>
  )
}
