import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { style } from './Style'
import { IMAGES } from '../constant/Constant'
import { useGetTrendingMealQuery } from '../api/FoodApi'

export const InputWithIcon = () => {
  const [text, setText] = React.useState('')
  const { data, isLoading, error } = useGetTrendingMealQuery(text)
  const onChangeText = (text: string) => {
    setText(text)
  }

  return (
    <View style={style.containerSearch}>
      <Image style={style.icon} source={IMAGES.iconSearch} />
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder='Search'
        style={style.searchInput}
      />
    </View>
  )
}
