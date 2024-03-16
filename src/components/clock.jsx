import { useEffect, useState } from "react";

function Clock({ date, timeZone }) {
  const [time, setTime] = useState(false);
  const [usertime, setUserime] = useState();
  useEffect(() => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    setUserime(timeZone);
  }, []);

  useEffect(() => {
    setInterval(() => {
      let datetime_str = new Date().toLocaleString("en-US", {
        timeZone: usertime,
      });
      let timee = datetime_str.split(",")[1];

      setTime(timee);
    }, 1000);
  }, []);
  return (
    <div className="transition-all">
      {time ? (
        <div className="flex transition-all flex-col items-center justify-center">
          <div className="text-sm flex w-full justify-between font-bold text-white  ">
            <h1>{date}</h1>
            <h1>{timeZone}</h1>
          </div>

          <div className="grid grid-cols-4 bg-[#00000080] transition-all  rounded-md text-white text-xl px-3 py-1 border-2 border-white">
            <div className="border-r flex justify-center items-center border-white ">
              {time.split(":")[0]}
            </div>
            <div className="border-r border-white  flex justify-center items-center">
              {time.split(":")[1]}
            </div>
            <div className="border-r border-white flex justify-center items-center">
              {time.split(":")[2].split(" ")[0]}
            </div>
            <div className="pl-3">{time.split(":")[2].split(" ")[1]}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Clock;
