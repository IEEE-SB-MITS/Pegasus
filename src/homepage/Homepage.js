import styles from "../constants/style";
import { logo } from "../assets";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={wie} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

          <img
            src={logo}
            alt="billing"
            className="w-[60%] block lg:hidden md:hidden relative z-[5]"
          />
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The <br className="sm:block hidden" />{" "}
              <span className="text-gradient">EXPO and HACK</span>{" "}
            </h1>
            {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"></h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            perspiciatis minus possimus voluptatibus incidunt repellat
            dignissimos. Possimus, asperiores ut. Vitae!
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-8 sm:my-5 my-10 relative`}
        >
          <img
            src={logo}
            alt="billing"
            className="w-[60%] hidden lg:block md:block relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
      </section>
      <div className="lg:flex lg:justify-center lg:p-0 px-6 ">
        <div
          className="mybtn lg:m-0  my-10"
          style={{
            backgroundImage:
              "linear-gradient(144deg, #180719 -5.79%, #210022 20.26%, #67122B 97.19%, #000 121.39%)",
          }}
        >
          EXPO
        </div>

        <div
          className="mybtn lg:m-0 my-10"
          style={{
            backgroundImage:
              "linear-gradient(-144deg, #180719 -5.79%, #210022 20.26%, #67122B 97.19%, #000 121.39%)",
          }}
        >
          HACK
        </div>
      </div>

      <div className="lg:hidden md:hidden block my-5 mx-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus neque
        facere tenetur. Id iure exercitationem modi iste, doloribus accusamus
        veritatis cum obcaecati sunt? Consectetur debitis voluptates odit
        dolorem tempora nostrum ab, omnis est ratione molestias accusantium amet
        accusamus nemo numquam. Harum, minima excepturi consectetur eius maiores
        natus dolorem. Esse, inventore.
      </div>
    </>
  );
};

export default Hero;
