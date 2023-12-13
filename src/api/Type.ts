export type Meal = {
  idMeal: string
  strMeal: string
  strDrinkAlternate: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string
  strYoutube: string
}

export type Categories = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export type ResponseMeal = {
  meals: Meal[]
}

export type ResponseCategories = {
  categories: Categories[]
}
