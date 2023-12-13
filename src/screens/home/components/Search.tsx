import { View, Text, Image } from 'react-native'
import React from 'react'
import { InputWithIcon } from '../../../components/CustomInput'
import { style } from '../Style'
import { IMAGES, SIZES } from '../../../constant/Constant'

export default function Search() {
  return (
    <View style={style.search}>
      <InputWithIcon />
      <View style={style.containerHintReciept}>
        <Image
          style={{ height: 80, width: 80 }}
          source={IMAGES.recieptBookMark}
        />
        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text>You have 12 recipes that you haven't tried yet</Text>
          <View>
            <Text style={style.hintRecieptLink}>See recipes</Text>
            <View style={style.borderRecieptLink}></View>
          </View>
        </View>
      </View>
    </View>
  )
}
