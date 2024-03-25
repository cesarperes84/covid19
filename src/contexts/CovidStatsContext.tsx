import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  Dispatch,
  useCallback,
} from "react";

import { getStats, getDailyStats } from "../services/contentServices";

import csv2JSON from "../utility/csv2JSON";

import initialState from "./initialStateCovidStats";
import {
  ActionType,
  reducer,
  StateType,
  Types,
} from "../reducers/reducersCovidStats";
interface CovidStatsContextData extends StateType {
  dispatchCovidStats: Dispatch<ActionType>;
  loadData: any;
  loadTotalData: any;
}
interface Props {
  children: React.ReactNode;
}

const CovidStatsContext = createContext<CovidStatsContextData>({
  ...initialState,
  dispatchCovidStats: ({}) => {},
  loadData: () => {},
  loadTotalData: () => {},
} as unknown as CovidStatsContextData);

const CovidStatsProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatchCovidStats] = useReducer(reducer, initialState);

  const loadData = useCallback(() => {
    dispatchCovidStats({ type: Types.SetStatusResult, payload: "loading" });
    getStats()
      .then((response: { data: any }) => {
        dispatchCovidStats({ type: Types.SetResults, payload: response.data });
      })
      .catch(() => {
        dispatchCovidStats({ type: Types.SetStatusResult, payload: "error" });
      });
  }, []);

  const loadTotalData = useCallback(() => {
    const dates = 
    dispatchCovidStats({
      type: Types.SetStatusTotalResults,
      payload: "loading",
    });
    getDailyStats()
      .then((response: { data: any }) => {
        let data = csv2JSON(response.data);
        
        data = data.filter(
          // @ts-ignore
          ({ date, state }) =>
            state === "TOTAL" &&
            (date === "2020-03-01" ||
              date === "2020-04-01" ||
              date === "2020-05-01" ||
              date === "2020-06-01" ||
              date === "2020-07-01" ||
              date === "2020-08-01" ||
              date === "2020-09-01" ||
              date === "2020-10-01" ||
              date === "2020-11-01" ||
              date === "2020-12-01" ||
              date === "2021-01-01" ||
              date === "2021-02-01" ||
              date === "2021-03-01" ||
              date === "2021-04-01" ||
              date === "2021-05-01" ||
              date === "2021-06-01" ||
              date === "2021-07-01" ||
              date === "2021-08-01" ||
              date === "2021-09-01" ||
              date === "2021-10-01" ||
              date === "2021-11-01" ||
              date === "2021-12-01" ||
              date === "2022-01-01" ||
              date === "2022-02-01" ||
              date === "2022-03-01" ||
              date === "2022-04-01" ||
              date === "2022-05-01" ||
              date === "2022-06-01" ||
              date === "2022-07-01" ||
              date === "2022-08-01" ||
              date === "2022-09-01" ||
              date === "2022-10-01" ||
              date === "2022-11-01" ||
              date === "2022-12-01" ||
              date === "2023-01-01" ||
              date === "2023-02-01" ||
              date === "2023-03-01"
              )
        );
        console.log("data", data);
        dispatchCovidStats({ type: Types.SetTotalResults, payload: data });
      })
      .catch(() => {
        dispatchCovidStats({
          type: Types.SetStatusTotalResults,
          payload: "error",
        });
      });
  }, []);

  const providerValue = useMemo(
    () => ({
      ...state,
      dispatchCovidStats,
      loadData,
      loadTotalData,
    }),
    [loadTotalData, state]
  );

  return (
    <CovidStatsContext.Provider value={providerValue}>
      {children}
    </CovidStatsContext.Provider>
  );
};

export const useCovidStatsContext = (): CovidStatsContextData =>
  useContext(CovidStatsContext);

export { CovidStatsProvider, CovidStatsContext };
