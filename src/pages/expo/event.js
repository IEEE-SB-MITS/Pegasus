import React from 'react'
// import styles from "../../constants/style";
import  Events  from "../../assets/Events.svg";
import  Rbt  from "../../assets/rbt.svg";
// import  Rb1  from "../../assets/rb1.svg";
// import  Rb2  from "../../assets/rb2.svg";
export const Event = () => {
  return (
  
   
    <div className="h-full w-full flex flex-col md:flex-row md:justify-evenly justify-center items-center relative">
 
              <span className='top-[8rem] md:text-[54px] absolute font-[cyberjunkies] md:left-[14rem]  md:top-[25rem] z-[1]' >Govind S Nath <br/>
            {/* <span className='text-[14px] absolute font-[cyberjunkies]' >Embedded Software Engineer</span> */}
            </span>
    <div id="left" className="w-1/2 ">
      <img
        src={Events}
        alt=""
        className="absolute md:h-[85%] lg:h-[85%] h-[25%] w-1/2  top-0 "
      />

    </div>
    <div
      id="right"
      className="w-[65%] lg:w-1/2 md:w-1/2 h-full md:p-10 p-0 flex flex-col justify-center"
    > 
      <h1 className="text-2xl font-bold text-center">Robot Operating System  </h1>
      <div className="my-6 md:px-6 px-0 md:text-lg text-sm text-justify">
      <div className=""/>
      <ol className="list-disc  list-inside">
      <li>  Introduction to ROS.</li>
      <li> Familiarization of ROS terminoloies</li>
      <li> Use ROS concepts using a model -turtle sim.</li>
      <li> Familiarization  of Gazebo, Rviz-ROS tools</li>
        </ol>
                                
      </div>
      <a
                href="#WS"
                id="evntreg"
                className="m-6"
              > <button class="relative w-[10rem] py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
REGISTER
</button>
</a>
 <img
        src={Rbt}
        alt=""
        className="absolute md:h-[10%] lg:h-[10%] h-[5%]  md:left-[190vh]  md:top-[54vh] lg:left-[140vh]  lg:top-[55vh] left-[37vh] top-[60vw]  "
      />

    </div>
  </div>
  
    
  )
};
export default Event;