import React, { useEffect } from "react";
import styles from "../../constants/style";
import {
  logo,
  ball,
  aboutusImg,
  person,
  call,
  mail,
  chair,
  viceChair,
  ann,
} from "../../assets";

const Hack = () => {
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
      <section
        className={`h-screen ${styles.hackColor} z-10 flex flex-col items-center justify-center`}
        id="section1"
      >
        <div className="relative h-full w-full px-10 md:p-0 lg:p-0 overflow-hidden">
          <img
            src={ball}
            alt=""
            className="absolute h-2/6 md:h-full lg:h-3/5  -left-12 spinner"
          />
          <img
            src={ball}
            alt=""
            className="absolute h-2/6 md:h-1/2 lg:h-1/2  -right-24 bottom-4 spinner"
          />
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div id="logo">
              <img src={logo} alt="logo" className="" />
            </div>
            <div id="text" className="text-center my-3">
              <h1 className="text-6xl font-bold">Hackathon</h1>
            </div>
            <a href="#" id="myRegBtn" className="m-6">
              <i></i>
              <i></i>
              <span>REGISTER</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className={`h-screen ${styles.hackColor} animate-section`}
        id="section2"
      >
        <div className="h-full w-full flex flex-col md:flex-row md:justify-evenly justify-center items-center relative">
          <div id="left" className="w-1/2">
            <img
              src={aboutusImg}
              alt=""
              className="absolute md:h-[90%] lg:h-[90%] h-[30%] w-1/2  top-0 spinner"
            />
          </div>
          <div
            id="right"
            className="w-1/2 h-full md:p-10 p-0 flex flex-col justify-center"
          >
            <h1 className="text-3xl font-bold text-center">About the Event</h1>
            <div className="my-6 md:px-6  md:text-xl text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              totam blanditiis iusto asperiores porro corporis voluptate
              assumenda impedit natus sed eum voluptatem temporibus tempore,
              veniam inventore voluptatum ullam quas voluptatibus quidem tenetur
              odio omnis aut! Dolorem expedita numquam veniam sint esse quod
              nemo culpa rerum molestiae, tempora alias, sapiente vitae.{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-green-900" id="section3">
          <div>
              <h1>Timeline</h1>
          </div>
      </section>
      <section className="h-screen bg-yellow-900">
        <div>
          <h1>Gallery</h1>
        </div>
      </section>
      <section
        className={`md:h-screen lg:h-screen h-[200vh] ${styles.hackColor} overflow-hidden`}
        id="section5"
      >
        <div className="w-full flex justify-center md:pt-10">
          <h1 className="text-2xl">Contact Us</h1>
        </div>
        <div className="h-full w-full flex flex-col md:flex-row lg:flex-row items-center justify-center">
          <div className="card mx-10 my-10">
            <img src={chair} className="card-img" alt="" />
            <div className={`card-body p-4`}>
              <h1 className="card-title pt-4">Akshay sanjeev</h1>
              <p className="card-sub-title">chair</p>
              <div className="w-full h-full flex flex-row items-center justify-center">
                <div className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
                  <img
                    src={call}
                    alt=""
                    className="w-[30%]"
                    style={{ filter: "invert(20)" }}
                  />
                </div>
                <div className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
                  <img
                    src={mail}
                    alt=""
                    className={`w-[30%] `}
                    style={{ filter: "invert(20)" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card mx-10 my-10">
            <img src={viceChair} className="card-img" alt="" />
            <div className={`card-body `}>
              <h1 className="card-title " style={{ lineHeight: "70px" }}>
                karthik u
              </h1>
              <p className="card-sub-title">vice-chair</p>
              <div className="w-full h-full flex flex-row items-center justify-center">
                <div className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
                  <img
                    src={call}
                    alt=""
                    className="w-[30%]"
                    style={{ filter: "invert(20)" }}
                  />
                </div>
                <div className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
                  <img
                    src={mail}
                    alt=""
                    className={`w-[30%] `}
                    style={{ filter: "invert(20)" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card mx-10 my-10">
            <img src={ann} className="card-img" alt="" />
            <div className={`card-body p-4`}>
              <h1 className="card-title">ann sara baby</h1>
              <p className="card-sub-title">chair</p>
              <div className="w-full h-full flex flex-row items-center justify-center">
                <div className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
                  <img
                    src={call}
                    alt=""
                    className="w-[30%]"
                    style={{ filter: "invert(20)" }}
                  />
                </div>
                <div className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
                  <img
                    src={mail}
                    alt=""
                    className={`w-[30%] `}
                    style={{ filter: "invert(20)" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card mx-10 my-10">
            <img src={person} className="card-img" alt="" />
            <div className={`card-body ${styles.flexCenter} p-4`}>
              <h1 className="card-title">Rohit</h1>
              <p className="card-sub-title">chair</p>
              <div className="w-full h-full flex flex-row items-center justify-center">
                <div className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
                  <img
                    src={call}
                    alt=""
                    className="w-[30%]"
                    style={{ filter: "invert(20)" }}
                  />
                </div>
                <div className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
                  <img
                    src={mail}
                    alt=""
                    className={`w-[30%] `}
                    style={{ filter: "invert(20)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hack;
