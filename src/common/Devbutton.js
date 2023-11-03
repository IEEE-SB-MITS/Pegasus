import React, { useEffect } from 'react'

const Devbutton = () => {
     useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
    }, []);
  return (
    
    <div><div 
	class="apply-button" 
	data-hackathon-slug="PEGASUS-2" 
	data-button-theme="light"
	style={{height:'44px', width: '312px'}}
></div></div>
  )
}

export default Devbutton