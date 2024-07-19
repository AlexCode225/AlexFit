import React from 'react'
import AlexBoost from './components/AlexBoost'
import Provider from './components/Provider'
import Workout from './components/Workout'
import SectionWrapper from './components/SectionWrapper'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alexfitheader from './components/Alexfitheader'
import ButtonTop from './components/ButtonTop'




export default function App() {
  return (
    <> 

<main className='min-h-screen flex flex-col bg-gradient-to-r
 from-indigo-950 to-slate-950 text-white text-sm sm:text-base'>

<Alexfitheader/>  {/*  header and nav and search */} 


<AlexBoost /> {/*  main page*/} 


<Provider/>  



<Workout />


<Footer/>

<ButtonTop /> {/*  Button that takes user top page */}

</main>





    </>

    
  )
}
