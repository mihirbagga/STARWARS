import React, { useEffect } from 'react';

import War from './components/Starwars'
import TODO from './TODO/TODO'
import Header from './Uber/Header'
import Bottom from './Uber/Bottom';


function App() {
  

  useEffect(() => {
    document.title = `Star Wars`;
  });

  return (
    <div>
  
    <War/>
    
     
    </div>
  );
}
export default App;