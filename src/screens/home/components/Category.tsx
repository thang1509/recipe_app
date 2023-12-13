import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ItemCategory from '../../../components/ItemCategory'
import { style } from '../Style'
import { useGetCategoriesQuery } from '../../../api/FoodApi'

export default function Category() {
  const data = useGetCategoriesQuery().data?.categories ?? []

  return (
    <View style={style.containerCategory}>
      <View style={style.containerCategoryTitleWrapper}>
        <Text style={style.categoryTitle}>Categories</Text>
        <Text>View all</Text>
      </View>
      {data.map((item, index) => {
        return (
          <ItemCategory
            title={item.strCategory}
            desc={item.strCategoryDescription}
            url={item.strCategoryThumb}
            key={index}
          />
        )
      })}
    </View>
  )
}
