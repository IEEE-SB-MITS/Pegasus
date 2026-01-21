import { Link } from "react-scroll";
import logo from "../assets/p44.webp";

export const Main = () => {
  return (
    <section
      id="section1"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6"
    >
      {/* Background spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,16,21,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white animate-[fadeIn_1s_ease-out]">

        {/* Logo */}
        <img
          src={logo}
          alt="PEGASUS Logo"
          className="h-[200px] md:h-[300px] object-contain md:mb-6 "
        />

        {/* Hackathon Title */}
        <h1
          className="
            font-RobotoSlab
            md:text-5xl text-3xl
            tracking-[0.25em]
            font-bold
            mb-2
          "
          style={{
            textShadow: "0 0 10px rgba(255,255,255,0.15)",
          }}
        >
          HACKATHON
        </h1>

        {/* Theme */}
        <h2
          className="
            font-RobotoSlab
            text-sm md:text-base
            tracking-widest
            text-gray-300
            mb-6
          "
        >
          THEME : OPEN INNOVATION
        </h2>

        {/* Divider */}
        <div className="w-28 h-[2px] bg-red-600/60 mb-8" />

        {/* Register Button */}
        {/* <a href="https://registration.ieeesbmits.in">
          <button
            className="
              font-RobotoSlab
              px-12 py-3
              rounded-lg
              border border-red-600
              text-red-200
              tracking-[0.25em]
              uppercase
              transition-all duration-300 ease-out
              hover:bg-red-600/20
              hover:text-white
              hover:shadow-[0_0_25px_rgba(215,16,21,0.5)]
              active:scale-95
            "
          >
            REGISTER HERE
          </button>
        </a> */}


        {/* Results Strip */}
        <section className="w-full pb-6 px-4 text-center mb-6">
          <p className="text-[#D71015] text-xs tracking-[0.35em] font-semibold mb-2">
            RESULTS ANNOUNCED
          </p>

          <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
            The results of Round 1 have been communicated via email to
            shortlisted participants.
          </p>
        </section>

        <Link to="section4" spy={true} smooth={true} offset={-70} duration={500}>
            <button className="
              group relative px-4 md:px-8 py-3 
              bg-red-600 text-white text-xs tracking-[0.3em] font-bold uppercase
              overflow-hidden transition-all duration-300
              hover:bg-red-700 hover:shadow-[0_0_30px_rgba(215,16,21,0.4)]
              active:scale-95
            ">
              Explore Workshops
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </Link>

        {/* Login */}
        {/* <a
          href="https://registration.ieeesbmits.in/login"
          className="mt-5 text-sm text-gray-400"
        >
          Already Registered?{" "}
          <span className="text-[#D71015] hover:underline">
            Login
          </span>
        </a> */}
      </div>

    </section>
  );
};
