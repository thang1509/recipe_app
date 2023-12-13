import { Image, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES } from '../constant/Constant'
import { style } from './Style'

type Props = {
  focused: boolean
  icon: any
}

export const TabIcon = ({ focused, icon }: Props) => {
  return (
    <View style={style.tabIconContainer}>
      <Image
        style={focused ? style.tabIconSelected : style.tabIconUnSelected}
        source={icon}
      />
      {focused && <View style={style.tabBottomLine} />}
    </View>
  )
}
