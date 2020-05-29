import React,{useState,useEffect,makeStyles} from 'react'
import axios from 'axios'
import Bacground from '../images/starwars.jpg'
import '../components/Star.css'
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import  Typography from '@material-ui/core/Typography'


function War()

{
    
    const  [number,setNumber] = useState(1);
    const  [movie,setMovie] = useState("");
    useEffect(()=>
    {
        async function getData()
        {
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`)
            console.log(response);
            setMovie(response.data);

        }
        getData();
    },[number]);
    return(
        <div className="container">
     <div>
    <AppBar style={{backgroundColor:'yellow',}} position='static'>
        <ToolBar>
         <Typography style={{color:'black'}}>For Star Wars Fans</Typography>
        </ToolBar>

    </AppBar>
       
    <h1 className="f">Type A Number For movie</h1>
    <input  placeholder="Enter The Number" className="input" variant="outlined" value={number} onChange={event=>setNumber(event.target.value)} />
    <h2 className="f">Release Date:</h2> <h3 className="t">{movie.release_date}</h3>
     <h2 className="f">Movie Name:</h2> <h3 className="t"> {movie.title}</h3>
     
     <h3 className="f">Movie Details:</h3> <p className="t">{movie.opening_crawl}</p>
     <h2 className="f">Producer:</h2> <h3 className="t">{movie.producer}</h3>
     <h2 className="f">Director:</h2> <h3 className="t">{movie.director}</h3>
    
       
       
        
        
    </div>
    </div>

)

}
export default War;