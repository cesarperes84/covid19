import { createContext, useContext, useMemo, useReducer, Dispatch, useCallback, } from 'react';

import {
  getStats,
  getDailyStats,
} from '../services/contentServices';

import initialState from './initialStateContext';
import { ActionType, reducer, StateType, Types } from '../reducers/reducersContent';
interface ContentContextData extends StateType {
  dispatchContent: Dispatch<ActionType>,
  loadData: any,
  loadTotalData: any,
};
interface Props {
  children: React.ReactNode;
}

const ContentContext = createContext<ContentContextData>({
    ...initialState,
    dispatchContent: ({ }) => { },
    loadData: () => { },
    loadTotalData: () => { },
  } as unknown as ContentContextData);

const ContentProvider = ({children}: Props): JSX.Element => {
  const [state, dispatchContent] = useReducer(reducer, initialState);

  const loadData = useCallback(() => {
   dispatchContent({ type: Types.SetStatusResult, payload: 'loading' });
    getStats()
      .then((response: { data: any; }) => {
        dispatchContent({ type: Types.SetResults, payload: response.data  });
      })
      .catch(() => {
        dispatchContent({ type: Types.SetStatusResult, payload: 'error' });
      });
  }, []);

  const loadTotalData = useCallback(() => {
    dispatchContent({ type: Types.SetStatusTotalResults, payload: 'loading' });
    getDailyStats()
      .then((response: { data: any; }) => {
        dispatchContent({ type: Types.SetTotalResults, payload: response.data  });
      })
      .catch(() => {
        dispatchContent({ type: Types.SetStatusTotalResults, payload: 'error' });
      });
  }, []);


  const providerValue = useMemo(() => ({
    ...state,
    dispatchContent,
    loadData,
    loadTotalData,
  }), [loadTotalData, state]);

  return (
    <ContentContext.Provider
      value={providerValue}
    >
      {children}
    </ContentContext.Provider>
  );
}

export const useContentContext = (): ContentContextData => useContext(ContentContext);

export { ContentProvider, ContentContext };
