import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { WEATHER_API } from "./api";
import brokenclouds from "./images/Ani-icons/brokenclouds.svg";
import clearsky from "./images/Ani-icons/clearsky.svg";
import fewclouds from "./images/Ani-icons/fewclouds.svg";
import mist from "./images/Ani-icons/mist.svg";
import lightrain from "./images/Ani-icons/rain.svg";
import scatteredclouds from "./images/Ani-icons/scatteredclouds.svg";
import showerrain from "./images/Ani-icons/showerrain.svg";
import snow from "./images/Ani-icons/snow.svg";
import thunderstorm from "./images/Ani-icons/thunderstorm.svg";
import { useScrollPosition } from "./hooks/useScrollPosition";

function MainPage({ city, headerani }) {
  const [style, setStyle] = useState(false);
  const [url, setUrl] = useState("");
  // const [nasa, setNasa] = useState();
  const stylz = style ? "transition" : "transition2";
  const moreInfoStyle = `drop-shadow-lg flex justify-center items-center shadow-lg h-48 shadow-slate-600 transition-all ${stylz}`;

  const scrollPosition = useScrollPosition();
  let position = scrollPosition > 40 || headerani ? "mt-[15rem]" : "mt-96";

  const mainclasses = `transition-all duration-1000 h-[100rem] ${position}`;

  const makeStuffVisible = () => {
    style ? setStyle(false) : setStyle(true);
  };

  const [currentWeather, setCurrentWeather] = useState(null);
  const [todayWeather, setTodayWeather] = useState("nope");

  const weather = [
    brokenclouds,
    clearsky,
    fewclouds,
    mist,
    lightrain,
    scatteredclouds,
    showerrain,
    snow,
    thunderstorm,
  ];

  useEffect(() => {
    if (city) {
      const response = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${WEATHER_API}&units=metric`
      );
      new Promise(() => {
        response.then(async (res) => {
          const stuff = await res.json();
          setCurrentWeather(stuff);
          let item = stuff.list.splice(0, 1)[0];
          setTodayWeather(item);
        });
      });
    }
    console.log("thing 1");
  }, [city]);

  useEffect(() => {
    if (todayWeather != "nope") {
      const name = todayWeather.weather[0].description;

      setUrl(eval(name.replace(" ", "")));
    }
    console.log("thing 2");
  }, [todayWeather]);

  console.log(weather);
  // console.log(nasa);

  // useEffect(() => {
  //   fetch(
  //     "https://api.nasa.gov/planetary/apod?api_key=AIzXIp6BfnLPByyVa32Shl9fKwGZtOCxfDoX6Log"
  //   )
  //     .then((json) => {
  //       return json.json();
  //     })
  //     .then((res) => setNasa(res));

  //   console.log("thing 3");
  // }, []);

  function getDayName(dateStr) {
    var date = new Date(dateStr);
    return date.toLocaleDateString("en-us", { weekday: "long" });
  }

  return (
    <div className={mainclasses}>
      <div className="transition-all grid grid-cols-2 gap-x-4  px-48">
        <div className="transition-all drop-shadow-lg shadow-lg shadow-slate-600 flex justify-center items-center bg-sky-600 rounded-xl ">
          {currentWeather ? (
            <div className=" grid  grid-cols-2 w-96 h-48 transition-all  text-white -ml-14">
              <div className="transition-all col-span-2 h-1 w-full mt-4 justify-between flex text-xl">
                <p>Current weather</p>
                <p>{currentWeather.city.name}</p>
              </div>
              <div className=" flex justify-center -mt-12 items-center">
                <button
                  className=" hover:text-black absolute bottom-2 right-2 font-semibold  transition-all duration-500 p-[3px] text-sm rounded-md "
                  onClick={() => makeStuffVisible()}
                >
                  More info
                </button>

                <div className=" w-full  transition-all text-lg">
                  <p className="transition-all capitalize    font-medium">
                    {todayWeather.weather[0].description}
                  </p>
                  <p className="transition-all capitalize    font-medium">
                    Feels like {todayWeather.main.feels_like}
                  </p>
                  <p className="transition-all capitalize    font-medium">
                    Humidity {todayWeather.main.humidity}
                  </p>
                </div>
              </div>
              <div className="transition-all flex justify-center -mt-12 w-full items-center">
                <img src={url} alt="" className="transition-all w-32 h-32" />
                <div className="transition-all mt-3 text-7xl font-semibold flex pb-4">
                  <p>{Math.round(todayWeather.main.temp)} </p>
                  <p className="flex flex-col text-xl">
                    <span> °</span> <span className="mt-5"> C</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="transition-all flex py-20 justify-center text-3xl font-serif font-semibold text-white">
              <p>Let's check the weather!</p>
            </div>
          )}
        </div>

        <div>
          <div className={moreInfoStyle}>
            {currentWeather ? (
              <div className="transition-all w-full px-10 flex flex-col  text-white text-xl ">
                <p className="transition-all flex justify-between     ">
                  <p>Pressure</p>
                  <span>{todayWeather.main.pressure}</span>
                </p>

                <p className="transition-all flex justify-between     ">
                  <p>Sea level</p>
                  <span>{todayWeather.main.sea_level}</span>
                </p>
                <p className="transition-all flex justify-between     ">
                  <p>Wind speed</p>
                  <span>{todayWeather.wind.speed}</span>
                </p>
                <p className="transition-all flex justify-between     ">
                  <p>Visibility</p>
                  <span>{todayWeather.visibility}</span>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="transition-all mt-20 flex px-48">
        <Accordion allowZeroExpanded>
          {currentWeather
            ? currentWeather.list.map((x) => {
                if (x.dt_txt.slice(11, 13) == "03") {
                  console.log(x, "accor");
                  const icon1 = x.weather[0].icon;
                  const weatherIcon = `https://openweathermap.org/img/wn/${icon1}@2x.png`;
                  return (
                    <AccordionItem key={x.dt}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <div className="transition-all grid grid-cols-8 w-full text-white gap-x-7">
                            <div className="transition-all w-24 h-18 flex  drop-shadow-lg shadow-lg shadow-slate-600 mt-10  bg-sky-600 rounded-xl ">
                              <img
                                src={weatherIcon}
                                alt=""
                                className="  transition-all"
                              />
                            </div>
                            <div className="transition-all flex drop-shadow-lg shadow-lg shadow-slate-600 mt-10 py-3 bg-sky-600 rounded-xl col-span-7">
                              <div className="text-2xl border-r-2 w-48 flex flex-col items-center justify-center border-black">
                                <p>{getDayName(x.dt_txt.slice(0, 11))}</p>
                                <p className="text-xs">
                                  {x.dt_txt.slice(0, 11)}
                                </p>
                              </div>
                              <div className="transition-all mt-3 text-xl pl-10  items-center flex pb-4">
                                <p className="text-4xl ">
                                  {Math.round(x.main.temp)}
                                  <span> °</span>
                                </p>
                                <div>
                                  <p className="text-2xl capitalize ml-14 font-semibold ">
                                    {x.weather[0].main}
                                  </p>
                                  <p className="text-xl capitalize ml-14 font-semibold ">
                                    {x.weather[0].description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                  );
                }
              })
            : null}
        </Accordion>
      </div>
    </div>
  );
}

export default MainPage;
