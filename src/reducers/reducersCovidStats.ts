export enum Types {
  SetTotalResults = "setTotalResults",
  SetStatusTotalResults = "setStatusTotalResults",
  SetStatusResult = "setStatusResult",
  SetResults = "SetResults",
}

export type ResultType = {
  state: string;
  newCases: string;
  totalCases: string;
  newDeaths: string;
  deaths: string;
  vaccinated: string;
}

export type TotalType = {
  newCases: string;
  totalCases: string;
  newDeaths: string;
  deaths: string;
  vaccinated: string;
}

export type StateType = {
  total: TotalType[];
  results: ResultType[];
  statusTotal: string;
  statusResult: string;
}

export type ActionType = {
  type: Types,
  payload?: any,
}

export function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
      case Types.SetResults:
        return {
          ...state,
          results: action.payload,
          statusResult: 'loaded',
        };
      case Types.SetTotalResults:
        return { 
          ...state,
          total: action.payload,
          statusTotal: 'loaded',
         };
      case Types.SetStatusTotalResults:
        return { 
          ...state,
          statusTotal: action.payload,
         };
      case Types.SetStatusResult:
        return { 
          ...state,
          statusResult: action.payload
         };
      default:
        throw new Error(`Unhandled  action type ${action.type}`)
    }
  };
