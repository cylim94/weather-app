import { useRef, useEffect } from "react";
import { staticList } from "./static";
import { InputSet } from "./subComponents";
import Button from "../../components/button";
import { useStateList } from "./useStateList";
import {
  renderHistoryRecord,
  renderWeatherStatus,
  triggerWeatherAPI,
} from "./_app.logic";

const App = () => {
  //all state
  const {
    currentResult,
    historyRecord,
    pageLoading,
    setCurrentResult,
    setHistoryRecord,
    setPageLoading,
  } = useStateList();

  //all Ref
  const cityInputRef = useRef("");
  const countryInputRef = useRef("");

  //useEffect
  useEffect(() => {
    //change DOM title in this page
    document.title = `Today’s Weather`;
  }, []);

  return (
    <>
      <div className="2xl:m-auto mx-3 max-w-screen-2xl">
        <div>
          <p className="text-xl mr-3 mb-1 mt-3 font-bold">
            {staticList.todayWeather}
          </p>
          <hr className="bg-black border-0" style={{ height: 1 }} />
          <div className="flex mt-2 flex-wrap gap-x-2 gap-y-2">
            <InputSet text={staticList.city} refs={cityInputRef} />
            <InputSet text={staticList.country} refs={countryInputRef} />
            <div className="flex flex gap-x-2">
              <Button
                text={staticList.search}
                onClick={() =>
                  triggerWeatherAPI({
                    setHistoryRecord,
                    setCurrentResult,
                    setPageLoading,
                    city: cityInputRef.current.value,
                    country: countryInputRef.current.value,
                  })
                }
              />
              <Button
                text={staticList.clear}
                onClick={() => {
                  cityInputRef.current.value = "";
                  countryInputRef.current.value = "";
                }}
              />
            </div>
          </div>

          {renderWeatherStatus({
            currentResult,
            pageLoading,
            city: cityInputRef.current.value,
            country: countryInputRef.current.value,
          })}
        </div>
        <div>
          <p className="text-xl mr-3 my-1 font-bold">
            {staticList.searchHistory}
          </p>
          <hr className="bg-black border-0" style={{ height: 1 }} />
          {renderHistoryRecord({
            setHistoryRecord,
            setCurrentResult,
            setPageLoading,
            historyRecord,
          })}
        </div>
      </div>
    </>
  );
};

export default App;
