import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, TEXT } from '../../constant/Constant'
import LinearGradient from 'react-native-linear-gradient'
import { style } from './Style'
import { OutLineButton, PrimaryButton } from '../../components/CustomButton'

export default function SplashScreen() {
  const navigationToHome = () => {}
  return (
    <View style={style.container}>
      <Image source={IMAGES.backgroundSplashScreen} resizeMode='repeat' />
      <LinearGradient
        style={style.absolute}
        colors={[COLORS.transparent, COLORS.black]}
      >
        <View style={[style.absolute, style.containerContent]}>
          <Text style={style.title}>Cooking a Delicious Food Easily</Text>
          <Text style={style.subTitle}>
            Discover more than 1200 food reciepts in your hands and cooking it
            Easily !
          </Text>
          <PrimaryButton
            navigationToHome={navigationToHome}
            style={style.mtLarge}
            title={TEXT.LOGIN}
          />
          <OutLineButton style={style.mtSmall} title={TEXT.SIGNUP} />
        </View>
      </LinearGradient>
    </View>
  )
}
