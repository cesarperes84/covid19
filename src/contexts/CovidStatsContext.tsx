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

import {
  dates
} from "./constants";
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
            (dates.includes(date))
        );
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
