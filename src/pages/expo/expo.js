import React, { useEffect } from "react";
import Background from "../../common/Background";
import styles from "../../constants/style";
import { Link } from "react-router-dom";
import Myfooter from "../../constants/footer";
import { Main } from "../../sections/Main";
import Team from "../../sections/Team";
import Time from "../../sections/Time";
import About from "../../sections/About";
import Workshops from "../../sections/Workshops";
import Marquee1 from "../../constants/Marquee1";
import Marquee2 from "../../constants/Marquee2";
import PreEvents from "../../sections/PreEvents";
import Partners from "../../sections/Partners";
import logo from "../../assets/logo/mitsnew.png";

const Expo = () => {
    useEffect(() => {
        const myBtn = document.getElementById("maindiv");

        const mousemoveHandler = (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            myBtn.style.setProperty("--x", x + "deg");
        };

        if (myBtn) {
            myBtn.addEventListener("mousemove", mousemoveHandler);

            return () => {
                myBtn.removeEventListener("mousemove", mousemoveHandler);
            };
        }
    }, []);

    return (
        <div id="maindiv">
            <Main />
            <Partners />
            <About />

            <Marquee1 />
            <Marquee2 />

            <Time />

            <section id="section4">
                <div className="relative w-full flex flex-col justify-center items-center md:pt-10 pb-14">
                    <PreEvents />
                </div>
            </section>

            <section id="section4.5">
                <div className="relative w-full flex flex-col justify-center items-center md:pt-10 pb-24">
                    <Workshops />
                </div>
            </section>
            <section id="section5">
                <div className="relative w-full flex flex-col justify-center items-center md:pt-10 pb-14">
                    <h1 className="text-4xl md:text-5xl font-bold font-ITCMedium tracking-wide">CONTACT US</h1>
                    <div className="lg:hidden text-md">( Tap the card to contact )</div>
                </div>
                <Team />
            </section>

            <section className={`h-[20vh]`}></section>

            <Myfooter />
        </div>
    );
};

export default Expo;
