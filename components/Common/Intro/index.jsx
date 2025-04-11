import Link from "next/link";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Tools from "./Tools";
import Skills from "./Skills";
import Image from "next/image";
import { NAME, DESIGNATION, SOCIAL_LINKS } from "../../../constants/constants";
import Kevin from "../../../public/images/kevin.jpg";

const Intro = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      {/* fixed at top */}
      <div
        className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4"
        style={{ height: "13rem" }}
      >
        <Link href="/">
          <Image
            className="w-28 h-28 rounded-full"
            src={Kevin}
            alt="profile picture"
          />
        </Link>
        <div className="flex flex-col items-center justify-center">
          <span className="text-gray-300 text-lg font-bold break-normal">
            {NAME}
          </span>
          {/* <span className='text-sm text-LightGray text-center mt-2'>{DESIGNATION}</span> */}
        </div>
      </div>

      {/* middle components */}
      <div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-20 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
        <Location />
        <Contact />
        <Languages />
        <Download icon={<FaDownload />} />
      </div>
    </div>
  );
};

export default Intro;
