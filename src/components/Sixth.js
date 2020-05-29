import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'





export default function Sixth()
{ 
    useEffect( ()=>
    {
     alert("Something Changed")
     document.title="Hello";
    });
    const [mail,setmail]=React.useState('');
return(
    <div>
    <TextField id="outlined-basic" label="My Name" variant="outlined" onChange={(event)=>setmail(event.target.value)} />
    {mail}
    </div>
)

}