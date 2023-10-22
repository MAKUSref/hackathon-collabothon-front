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

interface GetCCBySolutionResponse {
  solutionName: string;
  cc: number;
}

export const carbbynApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ message: string }, void>({
      query: () => "/ping",
    }),
    getCC: builder.query<number, void>({
      query: () => "/self/cc",
      providesTags: ["cc"],
    }),
    getHistory: builder.query<GetHistoryResponse, void>({
      query: () => "/self/history",
      providesTags: ["cc"],
    }),
    getLinkedApps: builder.query<LinkedApp[], void>({
      query: () => "/linkedApp",
    }),
    getLinkedApp: builder.query<LinkedApp[], string>({
      query: (id) => `/linkedApp/${id}`,
    }),
    getCCBySolution: builder.query<GetCCBySolutionResponse, string>({
      query: (solutionName) => `/self/solution?solutionName=${solutionName}`,
      providesTags: ["cc"],
    }),
    spentCC: builder.mutation<void, string>({
      query: (solutionName) => ({
        method: "POST",
        url: "/self/cc",
        body: { solutionName },
      }),
      invalidatesTags: ["cc"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetCCQuery,
  useGetHistoryQuery,
  useGetLinkedAppsQuery,
  useGetCCBySolutionQuery,

  useSpentCCMutation,
} = carbbynApi;
