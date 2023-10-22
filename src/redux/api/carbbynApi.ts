import { baseApi } from "./baseApi";

export interface LinkedApp {
  name: string;
  logo: string;
}

export interface HistoryItem {
  linkedApp: LinkedApp;
  cc: number;
  date: string;
}

interface GetHistoryResponse {
  email: string;
  cc: number;
  history: HistoryItem[];
  spentCC: unknown[];
}

export const carbbynApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ message: string }, void>({
      query: () => "/ping",
    }),
    getCC: builder.query<number, void>({
      query: () => "/self/cc",
    }),
    getHistory: builder.query<GetHistoryResponse, void>({
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

export const {
  useLoginMutation,
  useGetCCQuery,
  useGetHistoryQuery,
  useGetLinkedAppQuery,
} = carbbynApi;
