import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  tagTypes: ["Names", "Name"],

  endpoints: (builder) => ({
    getNames: builder.query<Record<string, unknown>, void>({
      query: () => "/todos",
      providesTags: ["Names"],
    }),

    getName: builder.query<Record<string, unknown>, { id: number }>({
      query: ({ id }) => `/todos/${id}`,
      providesTags: (result, error, arg) => [
        {
          type: "Name",
          id: arg.id,
        },
      ],
    }),

    postName: builder.mutation({
      query: (data) => ({
        url: "/query-to-post-data",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Names"],
    }),
  }),
});

export const { useGetNamesQuery, useGetNameQuery, usePostNameMutation } =
  apiSlice;
