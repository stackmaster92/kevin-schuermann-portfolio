import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";

const Banner = () => {
  const str = `Senior Software Engineer | AI/ML Specialist | Effective Communicator`;

  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex md:justify-around items-center w-full h-full truncate">
            <div className="sm:w-full xl:w-[65%]">
              <div className="py-4 font-cascadia-normal text-Snow text-xs lg:h-auto w-full">
                <span className="text-Snow text-2xl font-bold">
                  <Typewriter
                    options={{
                      strings: [str],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 100,
                      delay: "natural",
                      onInit: (typewriter) => {
                        typewriter.typeString(str).pauseFor(1000).start();
                      },
                    }}
                  />
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="xl:text-lg lg:base text-Green">
                  <span>
                    - Builds software architectures that can grow and stay
                    stable over time.
                  </span>
                  <br />
                  <span>
                    - Creates user-friendly platforms with fast and secure
                    frontend and backend systems.
                  </span>
                  <br />
                  <span>
                    - Creates user-friendly platforms with fast and secure
                    frontend and backend systems.
                  </span>
                  <br />
                  <span>
                    - Guides teams, promotes innovation, and encourages teamwork
                    to deliver high-quality solutions.
                  </span>
                  <br />
                </p>
              </div>
            </div>
            <div className="w-48 h-52 relative hidden xl:block">
              <img
                className="absolute top-8 w-full h-full -mt-[15px] transform scale-x-[1.5] scale-y-[1.2]"
                src="images/logo.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
