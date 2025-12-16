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
            md:text-6xl text-3xl
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
        <a href="https://registration.ieeesbmits.in">
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
        </a>

        {/* Login */}
        <a
          href="https://registration.ieeesbmits.in/login"
          className="mt-5 text-sm text-gray-400"
        >
          Already Registered?{" "}
          <span className="text-[#D71015] hover:underline">
            Login
          </span>
        </a>
      </div>

    </section>
  );
};
