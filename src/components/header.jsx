import { useScrollPosition } from "./hooks/useScrollPosition";
import Search from "./search";
import Clock from "./clock";
function Header({ setCity }) {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  let datetime_str = new Date().toLocaleString("en-US", {
    timeZone: timeZone,
  });

  const scrollPosition = useScrollPosition();
  let position =
    scrollPosition > 40 ? "transitionheader" : "transitionheaderrev";

  const attachment = `w-full fixed top-0  bg-headerimg bg-cover bg-white transition-all z-10 h-[5rem]   ${position}`;

  const handleOnsearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");
    setCity({ lat: latitude, lon: longitude });
  };

  return (
    <div className={attachment}>
      <div className=" h-full bg-black/50 text-white w-full  grid grid-cols-3 px-10 transition-all">
        <div className="flex align-middle ">
          <div className="items-center flex   hover:cursor-pointer">
            <h1 className="text-2xl font-sans ml-1 font-bold">Weather</h1>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <Search onSearchChange={handleOnsearchChange} />
        </div>
        <div className="flex items-center justify-end ">
          <Clock date={datetime_str.split(",")[0]} timeZone={timeZone} />
        </div>
      </div>
    </div>
  );
}

export default Header;
