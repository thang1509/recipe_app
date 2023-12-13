import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemFood from '../../../components/ItemFood'
import { style } from '../Style'
import { useGetTrendingMealQuery } from '../../../api/FoodApi'
import { useNavigation } from '@react-navigation/native'
import { PropsPush } from '../../../navigations/TypeCheck'
import { SCREENS } from '../../../constant/Constant'

export default function Trending() {
  const { data, isLoading, error } = useGetTrendingMealQuery('')
  const navigate = useNavigation<PropsPush>()

  const onSendToDetailPage = () => {
    navigate.push(SCREENS.DETAIL)
  }

  return (
    <View style={style.containerTrending}>
      <Text style={style.trendingTitle}>Trending Recipe</Text>
      <FlatList
        horizontal
        data={data?.meals ?? []}
        renderItem={({ item }) => (
          <ItemFood
            url={item.strMealThumb}
            category={item.strCategory}
            tag={item.strArea}
            title={item.strMeal}
            onPress={onSendToDetailPage}
          />
        )}
      />
    </View>
  )
}
