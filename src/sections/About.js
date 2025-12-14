import React from "react";

const About = () => {
  return (
    <section
      id="section2"
      className="min-h-screen w-full flex items-center justify-center px-6 md:px-16 relative pb-40"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT : TITLE BLOCK */}
        <div className="text-white">
          <h1 className="font-ITCMedium text-3xl md:text-5xl tracking-wide mb-4">
            ABOUT THE EVENT
          </h1>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-[#D71015] mb-6" />

          <p className="font-ProductSans text-md md:text-lg text-gray-300 leading-relaxed">
            Introducing PEGASUS 4.0, the fourth edition of the flagship technical
            event organized by IEEE SB MITS. This two-day fest promises an exciting
            blend of workshops, a 24-hour hackathon, competitions, and technical
            sessions that foster creativity, learning, and innovation.
          </p>
        </div>

        {/* RIGHT : DESCRIPTION */}
        <div className="text-gray-300 font-ProductSans text-md md:text-lg leading-relaxed text-justify">
          <p>
            Prepare for an exceptional experience where talent meets opportunity,
            pushing the boundaries of innovation to new heights. PEGASUS 4.0 brings
            together creative minds, problem solvers, and innovators to collaborate,
            compete, and grow in an environment designed to inspire real-world
            impact and technical excellence.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
