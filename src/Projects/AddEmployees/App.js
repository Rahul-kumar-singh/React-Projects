import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Form from './Components/Form';

const  App = ()=>{
    const [Age,setAge]=useState();
    const empData = (data,sAge)=>{
        setAge(sAge)
    }
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Form' element={<Form empData={empData} Age={Age}/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
