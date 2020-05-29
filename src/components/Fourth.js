import React from 'react'
import {useState} from 'react'
import Button from '@material-ui/core/Button'

function Hello()
{
const [c,sc]=useState(0);

return (
    <div>
        <h1>{c}</h1>
        <Button onClick={()=>sc(c+1)}>
            click me
        </Button>

    </div>
)

}
export default Hello;