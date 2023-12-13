import { View, Text, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../../../constant/Constant'
import { style } from '../Style'
import { BlurView } from '@react-native-community/blur'

export default function Header() {
  return (
    <View>
      <Image
        resizeMode='cover'
        style={{ height: 200 }}
        source={IMAGES.backgroundSplashScreen}
      />
      <View style={style.headerAbsolute}>
        <View style={style.headBack}>
          <Image
            style={[style.icon24, style.iconBack]}
            source={IMAGES.iconBack}
          />
          <Image
            style={[style.icon24, style.iconBookMark]}
            source={IMAGES.iconBookMark}
          />
        </View>
        <BlurView style={style.containerHeaderTitle}>
          <Image style={style.iconAvatar} source={IMAGES.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={style.subTitleHeader}>Recipe by:</Text>
            <Text style={style.titleHeader}>Maria</Text>
          </View>
          <Image
            style={[style.icon24, style.iconArrow]}
            source={IMAGES.iconArrowRight}
          />
        </BlurView>
      </View>
    </View>
  )
}
