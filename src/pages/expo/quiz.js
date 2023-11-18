import React from 'react'
// import styles from "../../constants/style";
import  Events  from "../../assets/quiz.svg";
// import  Rbt  from "../../assets/rbt.svg";
// import  Rb1  from "../../assets/rb1.svg";
// import  Rb2  from "../../assets/rb2.svg";
export const Event = () => {
  return (
  
   
    <div className="h-full w-full flex  flex-col text-black md:flex-row md:justify-evenly justify-center items-center relative">
 <div className="group before:hover:scale-100 before:hover:h-[25rem] before:hover:w-[20rem] before:hover:h-70 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-48 before:rounded-t-2xl before:bg-gradient-to-bl from-indigo-300 via-red-400 to-indigo-700 before:absolute before:top-0 md:w-[20rem] w-[13rem] md:h-[25rem] h-[19rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <img className="w-38 h-28  mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500" src={Events} alt='event'/>
  <div className="z-10  group-hover:-translate-y-10 transition-all  duration-500">   <span className="md:text-3xl text-indigo-900  text-[18px] font-extrabold mt-4 ">Quizzizz</span>
    <p className='font-semibold text-purple-900 md:text-[16px]  text-[9px]'> Quiz on Autonomous self-driving cars   <br/></p>
  <p className='font-semibold text-purple-900 md:text-[16px]  text-[9px]'>   21st November 2023
</p>
    
  </div>
  <a href="https://bit.ly/Autominds" class="relative w-[10rem] text-purple-900 py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 hover:text-red-900" >REGISTER now</a>
</div>

  </div>
    
  )
};
export default Event;
