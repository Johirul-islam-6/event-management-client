
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://event-managment-jade.vercel.app/api/v1/',
  }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => '/event-booking/64e8762a999a7fc8dcfde383',
    }),

    updateEvent: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `post/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

// Generate hooks for the defined endpoints
export const { useGetEventsQuery, useUpdateEventMutation } = apiSlice;

// Now you can use the useGetEventsQuery and useUpdateEventMutation hooks
