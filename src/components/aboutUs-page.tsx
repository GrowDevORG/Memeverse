import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-[#FFCA7A] flex flex-col relative">
      <div className="flex flex-col content-center mt-10">
        <div className=" my-[43px] mx-[162px]">
          <div className="lg:justify-between mb-0 flex flex-col lg:flex-row items-center justify-center">
            <div className=" flex relative">
              <div className="bg-[#FF9900] h-[350px] w-[350px] rounded-3xl items-center justify-center flex shadow-[#e6b85c] shadow-xl ">
                <Image
                  src={"/image/pepeCry-image.png"}
                  height={240}
                  width={240}
                  alt="Pepe-Cry image"
                />
              </div>
              <div className="hidden absolute top-[-50px] right-[-120px] lg:flex flex-col items-center justify-center">
                <Image
                  src={"/image/cloud.png"}
                  height={150}
                  width={176}
                  alt="cloud image"
                />
                <div className=" absolute flex items-center justify-center text-center">
                  <span className="jaro-regular text-[16px] ">
                    Finally someone <br />
                    wants to know
                    <br />
                    about us
                  </span>
                </div>
              </div>
            </div>

            <div className=" p-2 w-3/5 ml-20 flex items-center justify-center">
              <div className="flex flex-col items-start ">
                <div className="relative p-2   text-center flex flex-col items-center justify-center mr-14 ">
                  <span className="text-4xl creepster-regular text-white text-shadow-gray">
                    <span className="creepster-regular text-[#FF9900] text-shadow-gray tracking-wide">
                      About Us
                    </span>{" "}
                    – Who We Are?
                  </span>
                  <br />

                  <span className="jaro-regular text-[20px] text-white text-shadow-gray-large">
                    At Memeverse, we believe that laughter is the best way to
                    connect people! Our platform lets you create, customize, and
                    share memes effortlessly— whether you&apos;re a casual scroller
                    or a meme lord.
                  </span>
                  <br />
                  <br />
                  <span className="jaro-regular text-[20px] text-white text-shadow-gray-large">
                    We started with a simple idea: to give everyone a fun, easy,
                    and free way to express themselves through memes. Today,
                    we’re a growing community of meme enthusiasts, creators, and
                    internet humor lovers.
                  </span>
                  <br />
                  <br />
                  <span className="jaro-regular text-[20px] text-white text-shadow-gray-large">
                    Why? Because the internet needs more laughs, and we’re here
                    to deliver them!
                  </span>
                </div>
                <Image
                  src={"/image/crazy-scientistt.png"}
                  height={295}
                  width={215}
                  alt="crazy scientist"
                  className="mt-2 hidden md:block absolute right-[70px] top-[190px] opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
