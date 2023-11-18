import React, { useEffect } from "react";
import './preloader.css'
import { PreLoaderAnim } from "./animations";

const Preloader = () => {
    useEffect(()=>{
        PreLoaderAnim()
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Innovate,</span>
                <span>Create,</span>
                <span>Inspire.</span>
            </div>
        </div>
    );
};

export default Preloader;
