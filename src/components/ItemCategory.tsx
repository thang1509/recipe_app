import { View, Text, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../constant/Constant'
import { style } from './Style'

type PROPS = {
  url: string
  title: string
  desc: string
}

export default function ItemCategory({ url, title, desc }: PROPS) {
  return (
    <View style={style.itemContainerCategory}>
      <Image
        resizeMode='contain'
        style={style.itemCategoryImage}
        source={{ uri: url }}
      />
      <View style={style.itemCategoryWrapper}>
        <Text style={style.itemCategoryTitle}>{title}</Text>
        <Text numberOfLines={1}>{desc}</Text>
      </View>
    </View>
  )
}
