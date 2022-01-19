import React,{useState} from 'react';
import Form from './Form';
import Tracker from './Tracker';

const App = ()=>{
  const [track,settrack] = useState([]);
  return <>
          {/* <h1>Track: {JSON.stringify(track)}</h1> */}
          <Form track={track} settrack={settrack}/>
          <Tracker track={track}/>
         </>;
}

export default App;
