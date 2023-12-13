import { Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { style } from './Style'
import { useNavigation } from '@react-navigation/native'
import { PropsPush } from '../navigations/TypeCheck'
import { SCREENS } from '../constant/Constant'

type props = {
  title?: string
  style?: ViewStyle
  navigationToHome?: Function
}

export const PrimaryButton = (props: props) => {
  const navigation = useNavigation<PropsPush>()
  const pushToHome = () => {
    navigation.push(SCREENS.TAB)
  }
  return (
    <TouchableOpacity
      onPress={() => {
        pushToHome()
      }}
      style={[style.btnPrimary, props.style]}
    >
      <Text style={style.btnTextColorWhite}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export const OutLineButton = (props: props) => {
  return (
    <TouchableOpacity style={[style.btnOutline, props.style]}>
      <Text style={style.btnTextColorWhite}>{props.title}</Text>
    </TouchableOpacity>
  )
}
