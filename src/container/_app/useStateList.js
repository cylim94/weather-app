import { useState } from "react";

//initialiaze all state at this file
const useStateList = () => {
  //history list
  const [historyRecord, setHistoryRecord] = useState([]);
  //current search result
  const [currentResult, setCurrentResult] = useState({});
  //page loading when user click search
  const [pageLoading, setPageLoading] = useState(false);
  return {
    historyRecord,
    currentResult,
    pageLoading,
    setCurrentResult,
    setHistoryRecord,
    setPageLoading,
  };
};

export { useStateList };
