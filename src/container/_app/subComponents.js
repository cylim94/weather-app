// reuseable & sub component only used in _app page
import Input from "../../components/input";
import { staticList, staticIcon } from "./static";
import { triggerWeatherAPI } from "./_app.logic";

//Input with Title
const InputSet = (props) => {
  const { text, mainClassName, refs, onChange } = props;
  return (
    <div className={`${mainClassName} flex`}>
      <div className="text-base mr-2 font-bold">{text}:</div>
      <Input className="rounded px-1 " reference={refs} onChange={onChange} />
    </div>
  );
};

//Result of weather based on search
const WeatherStatus = (props) => {
  const { name, sys, weather, main, searchTime } = props?.data;

  return (
    <div className="my-3 ml-5">
      <p className="text-xs">{`${name}, ${sys?.country}`}</p>
      <div className="flex">
        <p className="text-3xl font-bold">{`${weather[0]?.main}`}</p>
        <div className="transform-scale-1 -mt-2">
          {staticIcon[weather[0]?.main.toLowerCase()]}
        </div>
      </div>
      <div className="flex mt-2 text-xs">
        <div className="text-gray-500">
          <p>{staticList.description}:</p>
          <p>{staticList.temperature}:</p>
          <p>{staticList.humidity}:</p>
          <p>{staticList.time}:</p>
        </div>
        <div className="ml-9">
          <p>{`${weather[0]?.description}`}</p>
          <p>{`${main.temp_min}°C ~ ${main?.temp_max}°C`}</p>
          <p>{`${main.humidity}%`}</p>
          <p>{`${searchTime.format("YYYY-MM-DD hh:mm A")}`}</p>
        </div>
      </div>
    </div>
  );
};

//Row of History Result
const HistoryRow = (props) => {
  const { record, index, deleteClicked, length } = props;
  const { name, sys, searchTime } = record;
  return (
    <>
      <div className="flex py-3">
        <p className="self-center">{index + 1}.</p>
        <p className="ml-1 self-center">{`${name}, ${sys.country}`}</p>
        <p className="ml-auto mr-2 self-center">{`${searchTime?.format(
          "hh:mm:ss A"
        )}`}</p>
        <div
          onClick={() =>
            triggerWeatherAPI({ ...props, city: name, country: sys.country })
          }
          className="bg-gray-200 rounded-full py-1 px-1 cursor-pointer mr-2 self-center"
        >
          {staticIcon.search({ className: "w-6 h-6" })}
        </div>
        <div
          onClick={() => deleteClicked({ selectedRecord: length - index - 1 })}
          className="bg-gray-200 rounded-full py-1 px-1 cursor-pointer self-center"
        >
          {staticIcon.delete({ className: "w-6 h-6" })}
        </div>
      </div>
      <hr />
    </>
  );
};

export { InputSet, WeatherStatus, HistoryRow };
