import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constant/Constant'

export const style = StyleSheet.create({
  mtLarge: {
    marginTop: SIZES.marginLarge,
  },
  mtSmall: {
    marginTop: SIZES.marginSmall,
  },
  container: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  containerContent: {
    height: 420,
    bottom: 0,
    padding: SIZES.paddingLarge,
  },
  title: {
    color: COLORS.white,
    fontSize: FONTS.fontLarge,
    fontWeight: '700',
  },
  subTitle: {
    color: COLORS.grey,
    marginTop: SIZES.marginLarge,
  },
})
