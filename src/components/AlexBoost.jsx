import React from 'react'


{/* Alexboost Component*/}
export default function AlexBoost() {
  return (
 
   <>
<div className=' p-3.5 min-h-screen flex flex-col 
gap-6 items-center justify-center text-center max-w-[750px] w-full mx-auto'>

  <div className='gap-4 flex flex-col '>
  <p> <span class="text-slate-500 font-serif font-extrabold text-3xl sm:text-2xl md:text-4xl lg:text-4xl">AlexFit  </span> </p>
<p> <span class="text-slate-700 font-semibold "> LET'S DO THIS </span> </p>

<div class="bg-image-container">
  <h1 class="font-extrabold text-6xl sm:text-5xl md:text-8xl lg:text-8xl">
  <span className='text-slate-100' >BOOST YOUR </span>  <span class="text-green-300">STRENGTH </span>
   AND <span class="text-green-300">FITNESS</span>
  </h1>
</div>

</div>

<p className='font-light '>At <strong className='font-serif'>AlexFit </strong> , we believe in <span className='text-green-300' >transforming </span> lives through <span className='text-green-300' > fitness </span>. 
Our state-of-the-art facilities, experienced trainers, and supportive community are here to help you achieve your health and wellness goals. Whether you’re a beginner or a seasoned athlete, we offer a variety of classes and personalized training programs to suit your needs.

 <span className='text-green-300'>Join us </span> today and start your journey to a healthier, stronger you! </p>

    <button className=" bg-black hover:bg-slate-800
    text-white px-9 py-6  rounded border-[2.5px]
     duration-700 border-x-purple-200 border-solid stoneShadow"> Get started</button>
    
 
    </div>

    </>
    


  )
}
