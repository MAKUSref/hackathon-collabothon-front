import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, void>({
      query: () => '/ping',
      invalidatesTags: ['example']
    })
  })
});

export const { useLoginMutation } = authApi;