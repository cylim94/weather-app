//file to store all static configuration
import { AiOutlineSearch, AiOutlineDelete } from "react-icons/ai";

//all text list
const staticList = {
  todayWeather: "Today's Weather",
  city: "City",
  country: "Country",
  search: "Search",
  clear: "Clear",
  searchHistory: "Search History",
  description: "Description",
  temperature: "Temperature",
  humidity: "Humidity",
  time: "Time",
};

//all icon to display
const staticIcon = {
  search: (props) => <AiOutlineSearch {...props} />,
  delete: (props) => <AiOutlineDelete {...props} />,
  clouds: <div className={`cloudIcon`}></div>,
  haze: <div className={`hazeIcon`}></div>,
  clear: <div className={`clearIcon`}></div>,
  rain: <div className={`rainIcon`}></div>,
  snow: <div className="snowIcon"></div>,
};

//openweather api
const openWeatherKey = {
  OPEN_WEATHER_API_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
  OPEN_WEATHER_KEY: "c5618cd55892e3dd068cf64fa25eb82c",
  OPEN_WEATHER_API: function (city = "", country = "") {
    return `${this.OPEN_WEATHER_API_URL}${city},${country}&appid=${this.OPEN_WEATHER_KEY}&units=metric`;
  },
};

export { staticList, openWeatherKey, staticIcon };
