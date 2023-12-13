import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constant/Constant'

export const style = StyleSheet.create({
  icon24: {
    width: 32,
    height: 32,
  },
  iconBack: {
    tintColor: COLORS.white,
  },
  iconBookMark: {
    tintColor: COLORS.primary,
  },
  headerAbsolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: SIZES.marginSmall,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
  },
  headBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: SIZES.marginSmall,
  },
  containerHeaderTitle: {
    flexDirection: 'row',
    padding: SIZES.paddingSmall,
    alignItems: 'center',
  },
  titleHeader: {
    color: COLORS.white,
    fontWeight: '700',
  },
  subTitleHeader: {
    color: COLORS.grey,
    opacity: 0.6,
  },
  iconArrow: {
    tintColor: COLORS.white,
    width: 24,
    height: 24,
  },
})
