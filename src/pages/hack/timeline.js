import { Chrono } from "react-chrono";
import React from "react";
const items = [
  // Define your timeline events here
  {
    title: "Nov 2",
    cardTitle: "Call for abstract",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: ["paragraph1", "paragraph2"],
    
  },
  {
    title: "Nov 15",
    cardTitle: "Deadline for abstract submission",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: ["paragraph1", "paragraph2"],
    
  },
  {
    title: "Nov 20 ",
    cardTitle: "Selection of abstracts",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: ["paragraph1", "paragraph2"],
    
  },
  {
    title: "Nov 22 ",
    cardTitle: "Conformation ",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: ["paragraph1", "paragraph2"],
    
  },
  {
    title: "Nov 24",
    cardTitle: "Conformation ",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: ["paragraph1", "paragraph2"],
    
        
  }
  
  // Add more events as needed
];

const Timeline = () => {
return (
  <div style={{ width: '500px', height: '950px' }}>
<Chrono items={items} mode="VERTICAL" cardHeight="0px" hideControls='true' 
  
  slideShow
  slideItemDuration={450}
  slideShowType="reveal" />  

</div>
) ;
};
export default Timeline;