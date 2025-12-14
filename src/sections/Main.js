import logo from "../assets/peg4logo.png";

export const Main = () => {
  return (
    <section
      id="section1"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-white">
        <img
          src={logo}
          alt="logo"
          id="peg4logo"
          className="h-[160px] md:h-[200px] object-contain mt-20"
        />

        <h1
          className="md:text-5xl text-3xl font-bold font-BrunoAce mt-4 tracking-widest"
          style={{
            color: "#FFFFFF", // bright white
            opacity: 0.9,
            WebkitTextStroke: "0.5px #D71015",
          }}
        >
          HACKATHON
        </h1>

        <h2
          className="py-5 font-BrunoAce md:text-2xl text-center"
          style={{
            color: "#FFFFFF", // soft pink
            WebkitTextStroke: "0.5px #D71015",
          }}
        >
          THEME : INCLUSIVE TECHNOLOGIES AND INNOVATION
        </h2>

        <button
          className="px-9 py-3 rounded-xl text-lg font-semibold tracking-wider
         text-red-100
         bg-[#5B1515]
         border border-red-600
         shadow-[0_0_14px_rgba(255,0,0,0.25)]
         transform transition-all duration-300 ease-out
         hover:-translate-y-1
         hover:bg-transparent
         hover:text-red-300
         hover:shadow-[0_0_36px_rgba(255,0,0,0.6)]"
        >
          <span className="text-xl md:text-2xl">REGISTER HERE</span>
        </button>

        <a
          href="https://registration.ieeesbmits.in/login"
          className="mt-4 text-white"
        >
          Already Registered? <span className="text-[#D71015]">Login</span>
        </a>
      </div>
    </section>
  );
};
