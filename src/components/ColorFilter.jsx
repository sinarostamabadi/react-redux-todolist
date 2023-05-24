import React from 'react'
import { colors } from './Todo'
import ColorFilterItem from './ColorFilterItem'

export default function ColorFilter() {

    let cemColorFilter=colors.map((color) => {
        return <ColorFilterItem color={color} />
    })

  return (
    <div class="filter-by-color">
                    <div class="filter-by-color-title">
                        filter by color
                    </div>
                    <div class="colors-filter">
                        {cemColorFilter}
                    </div>
                </div>
  )
}
