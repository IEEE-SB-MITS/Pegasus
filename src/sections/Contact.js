import React from 'react'

const Contact = () => {
    <section
    className={`md:h-screen lg:h-[120vh] h-[360vh] ${styles.expoColor}`}
    id="section5"
  >
    <div>
      <div className="w-full flex flex-col justify-center items-center md:pt-10">
        <h1 className="text-4xl event-heading">Contact Us</h1>
        <div className="lg:hidden text-md">( Tap the card to contact )</div>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row lg:flex-row items-center justify-center">
        {/* cards */}
        {peopleData.map((person, index) => (
          <ContactCard
            key={index}
            img={person.img}
            name={person.name}
            position={person.position}
            number={person.number}
            mail={person.mail}
          />
        ))}
      </div>
      <div className="h-full w-full flex flex-col md:flex-row lg:flex-row items-center justify-center">
        {/* cards */}

        <div className="md:hidden my-10 lg:hidden">
          -- EXPO COORDINATORS --
        </div>
        {peopleDataExpo.map((person, index) => (
          <ContactCard
            key={index}
            img={person.img}
            name={person.name}
            position={person.position}
            number={person.number}
            mail={person.mail}
          />
        ))}
        <div className="md:hidden my-10 lg:hidden">
          -- HACK COORDINATORS --
        </div>
        {peopleDataHack.map((person, index) => (
          <ContactCard
            key={index}
            img={person.img}
            name={person.name}
            position={person.position}
            number={person.number}
            mail={person.mail}
          />
        ))}
        <div className="card mx-10 my-3">
          <img src="https://i.imgur.com/hxLi7a4.jpg" className="card-img" alt="" />
          <div className="card-body p-4">
            <p className="card-sub-title w-1/2">Coordinator</p>
            <h1 className={` pt-4`}>
              <span className="text-[45px] ">BASIL</span>{" "}
              <span className="text-[1.85rem] font-normal capitalize">
                THANKACHAN
              </span>
            </h1>
            <div className="w-full h-full flex flex-row items-center justify-center">
              <a
                href={`tel:9562951685`}
                className="card-button mx-4 py-4 w-[35%] flex items-center justify-center"
              >
                <img
                  src={call}
                  alt=""
                  className="w-[30%]"
                  style={{ filter: "invert(20)" }}
                />
              </a>
              <a
                href={`mailto:basilthankachan861@gmail.com`}
                className="card-button mx-4 py-4 w-[35%] flex items-center justify-center"
              >
                <img
                  src={mail}
                  alt=""
                  className="w-[30%]"
                  style={{ filter: "invert(20)" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
}

export default Contact