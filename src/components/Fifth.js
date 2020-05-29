import React from 'react'
import Button from '@material-ui/core/Button'
import {useState} from 'react'

function Fifth()
{
const[add,setadd]=useState(0);


return(
    <div>
       <Button> {add}</Button>
        <Button onClick={()=>setadd(add+1)}>
          +
        </Button>
        <Button onClick={()=>setadd(add-1)}>
            -
        </Button>
        <Button onClick={()=>setadd(add==0)}>Delete</Button>
        
    </div>
)


}
export default Fifth;