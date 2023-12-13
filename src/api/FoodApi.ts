import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseCategories, ResponseMeal } from './Type'

export const FoodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),
  endpoints: (builder) => ({
    getTrendingMeal: builder.query<ResponseMeal, string>({
      query: (name) => `search.php?s=${(name = '' ? name : 'rice')}`,
    }),
    getCategories: builder.query<ResponseCategories, void>({
      query: () => 'categories.php',
    }),
  }),
})
export const { useGetTrendingMealQuery, useGetCategoriesQuery } = FoodApi
