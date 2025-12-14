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
          disabled
          className="relative px-6 md:px-12 py-3 font-bold bg-[#A71F1F] rounded-xl hover:bg-[#D10F0F] transition-all duration-300 disabled:bg-[#888888] disabled:opacity-80"
          style={{
            boxShadow: "2px 2px 0px rgba(255,255,255,0.7)",
          }}
        >
          <span
            className="text-xl md:text-2xl"
            style={{ WebkitTextStroke: "1px #000" }}
          >
            REGISTRATIONS CLOSED
          </span>
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
