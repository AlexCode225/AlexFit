import React from 'react';
import SectionWrapper from './SectionWrapper';
 import { WORKOUTS, SCHEMES } from '../features/Instructions'

function Header (props){
  const { index, title, description } = props
  return ( 
      <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-2'>
              <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
              <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
          </div>
          <p className='text-sm sm:text-base mx-auto'>{description}</p>
   
      </div>
  ) 
  
}


 
export default function Provider() {

    return (

      <SectionWrapper id={'generate'} header={"Create your workout"}
       title={['It\'s', 'Huge', 'o\'clock']}>
       {/*first header */}
          <Header index={'01'} title={'Pick your excercise'} 
   description={"Select the workout you wish to endure."} />
    <div className='grid grid-cols-4 sm:grid-cols-2 gap-2'>

  {Object.keys(WORKOUTS).map((type, typeIndex) => {

                    return (
                        <button className=' bg-black hover:bg-indigo-950
    text-white rounded border-[0.2px]
     duration-300 border-y-fuchsia-300 border-solid py-4 ExcersiseShadow' key={typeIndex}>
                           <p>   {type} </p>
                          
                        </button>
                    )

                })}

</div>
             
{/*second header */}

<Header index={'02'}  title={'Lock on targets'} description={"Select the muscles judged for annihilation."} />
    <div className='bg-indigo-900 py-3 border border-solid border-purple-200 rounded-lg flex flex-col'>

    <button className='relative p-2 flex items-center justify-center'>
                    <p className='capitalize'>{  'Select muscle groups'   } </p>
                    <i className="fa-solid absolute right-2 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>


</div>

















         
      </SectionWrapper>

  )
}


  

