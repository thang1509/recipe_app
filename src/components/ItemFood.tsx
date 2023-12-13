import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGES, SIZES } from '../constant/Constant'
import { BlurView } from '@react-native-community/blur'
import { style } from './Style'

type Props = {
  url: string
  category: string
  title: string
  tag: string
  onPress?: Function
}
export default function ItemFood(props: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.onPress != null) {
          props.onPress()
        }
      }}
      style={style.item}
    >
      <Image
        style={style.itemImage}
        resizeMode='cover'
        source={{ uri: props.url }}
      />
      <View style={style.itemContent}>
        <BlurView style={style.itemContainerContent}>
          <Text style={[style.itemText, style.itemTitle]}>
            {props.category}
          </Text>
        </BlurView>
        <BlurView style={style.itemContainerContent}>
          <View style={style.itemContainerContentLeft}>
            <Text style={[style.itemText, style.itemTitle]}>{props.title}</Text>
            <Text style={style.itemText}>{props.tag}</Text>
          </View>
          <Image style={style.itemIcon} source={IMAGES.iconBookMark} />
        </BlurView>
      </View>
    </TouchableOpacity>
  )
}
