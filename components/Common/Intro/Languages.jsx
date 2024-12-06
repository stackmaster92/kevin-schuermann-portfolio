import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [german, setGerman] = useState(0);
  const [english, setEnglish] = useState(0);
  const [japanese, setJapanese] = useState(0);
  const [thai, setThai] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (german < 88) setGerman((prevCount) => prevCount + 1);
      if (english < 98) setEnglish((prevCount) => prevCount + 1);
      if (japanese < 60) setJapanese((prevCount) => prevCount + 1);
      if (thai < 60) setThai((prevCount) => prevCount + 1);
    }, 30);

    return () => clearInterval(timer);
  }, [german, english, japanese, thai]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-lg font-bold">Languages</span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={english}
              size={75}
            />
            <span className="text-sm font-bold text-Snow">English</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={german}
              size={75}
            />
            <span className="text-sm font-bold text-Snow">German</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={japanese}
              size={75}
            />
            <span className="text-sm font-bold text-Snow">Japanese</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={thai}
              size={75}
            />
            <span className="text-sm font-bold text-Snow">Thai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
