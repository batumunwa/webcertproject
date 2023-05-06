import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://173.225.103.131/stroreapi/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movies/getall`,
    }),

    getMovieByID: builder.query({
      query: (id) => `movies/get/${id}`,
    }),

    getEvents: builder.query({
        query: () => `events`,
      }),

    createMovie: builder.mutation({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
    }),

    updateMovie: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: updates,
      }),
    }),

    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMoviesQuery,
  useGetMovieByIDQuery,
  useCreateMovieMutation,
  useUpdateMovieMutation,
  useDeleteMovieMutation,
  useGetEventsQuery,
} = movieApi
