// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const api = createApi({
    reducerPath : 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://event-managment-jade.vercel.app/api/v1',
  }),

 // and points
  endpoints: (builder) => ({
    getProduct : builder.query({
        query : () => `/users`
    })
  }),
})
// getEventBookingUser

export const {useGetProductQuery } = api