import moment from "moment";
import { openWeatherKey } from "./static";
import { WeatherStatus, HistoryRow } from "./subComponents";
import Loading from "../../components/loading";

//render list of history record
const renderHistoryRecord = (props) => {
  const { historyRecord, setHistoryRecord } = props;
  if (historyRecord.length < 1)
    return (
      <div className="text-center mt-5 font-bold text-gray-500">No Record</div>
    );

  return (
    <div>
      {historyRecord
        .slice(0)
        .reverse()
        .map((record, reverseIndex) => {
          return (
            <HistoryRow
              key={reverseIndex}
              record={record}
              index={reverseIndex}
              length={historyRecord.length}
              {...props}
              deleteClicked={({ selectedRecord }) =>
                deletedHistoryRecord({
                  selectedRecord,
                  setHistoryRecord,
                  historyRecord: historyRecord,
                })
              }
            />
          );
        })}
    </div>
  );
};

//delete selected history record
const deletedHistoryRecord = (props) => {
  const { selectedRecord, setHistoryRecord, historyRecord } = props;
  let clonedHistoryRecord = [...historyRecord];
  clonedHistoryRecord.splice(selectedRecord, 1);
  setHistoryRecord(clonedHistoryRecord);
};

//condition check and render result
const renderWeatherStatus = (props) => {
  const { currentResult, city, country, pageLoading } = props;

  if (pageLoading) {
    return (
      <div className="w-60 flex justify-center h-40 items-center">
        <Loading />
      </div>
    );
  }

  if (Object.keys(currentResult).length === 0) {
    return (
      <div className="pl-3 py-1 mt-3 bg-blue-200 border-blue-400 border">
        Please search city or country
      </div>
    );
  }

  if (currentResult.apiStatus === "fail") {
    if (city === "" && country === "") {
      return (
        <div className="bg-red-200 pl-3 py-1 mt-3 border-red-400 border">
          Plase enter at least city or country
        </div>
      );
    }
    return (
      <div className="bg-red-200 pl-3 py-1 mt-3 border-red-400 border">
        {currentResult.data.statusText}
      </div>
    );
  }

  if (Object.keys(currentResult).length !== 0) {
    return <WeatherStatus {...currentResult} />;
  }
};

//clicked search
const triggerWeatherAPI = (props) => {
  const {
    city,
    country,
    setPageLoading = () => {},
    setCurrentResult = () => {},
    setHistoryRecord = () => {},
  } = props;
  fetch(openWeatherKey.OPEN_WEATHER_API(city, country))
    .then((response) => {
      setPageLoading(true);
      if (response.ok) return response.json();
      throw response;
    })
    .then((data) => {
      //add the search time to the response data for display purpose
      let currentTime = moment();
      let addedTimeData = { ...data, searchTime: currentTime };
      //set record on current result
      setCurrentResult({ apiStatus: "success", data: addedTimeData });
      //set on history record
      setHistoryRecord((prevData) => {
        prevData.push(addedTimeData);
        return prevData;
      });
    })
    .catch((e) => setCurrentResult({ apiStatus: "fail", data: e }))
    .finally(() => setPageLoading(false));
};

export { renderHistoryRecord, triggerWeatherAPI, renderWeatherStatus };
