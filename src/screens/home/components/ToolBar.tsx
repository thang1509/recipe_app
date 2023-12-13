import { View, Text, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../../../constant/Constant'
import { style } from '../Style'

export default function ToolBar() {
  return (
    <View style={style.toolBar}>
      <View>
        <Text style={style.tbTitle}>Hello byProgrammers</Text>
        <Text style={style.tbSubTitle}>What do you want today ?</Text>
      </View>
      <Image style={style.avatar} source={IMAGES.avatar} />
    </View>
  )
}
