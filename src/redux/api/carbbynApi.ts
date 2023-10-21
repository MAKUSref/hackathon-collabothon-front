import { baseApi } from "./baseApi";

export interface LinkedApp {
  name: string;
  logo: string;
}

export interface HistoryItem {
  linkedApp: LinkedApp;
  CC: number;
  dateTime: string; //DD-MM-YYTHH-mm-ss
}

export const carbbynApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ message: string }, void>({
      query: () => "/ping",
    }),
    getCC: builder.query<{ CC: number }, void>({
      query: () => "/self/cc",
    }),
    getHistory: builder.query<HistoryItem[], void>({
      query: () => "/self/history",
    }),
    getLinkedApps: builder.query<LinkedApp[], void>({
      query: () => "/linkedApp",
    }),
    getLinkedApp: builder.query<LinkedApp[], string>({
      query: (id) => `/linkedApp/${id}`,
    }),
  }),
});

export const { useLoginMutation } = carbbynApi;
