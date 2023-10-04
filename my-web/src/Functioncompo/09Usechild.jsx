import React from 'react'
import { memo } from 'react'

function Usechild() {
    return (
        console.log("called Usechild")
    )

}


export default memo(Usechild)