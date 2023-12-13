import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constant/Constant'

export const style = StyleSheet.create({
  home: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  toolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.paddingSmall,
  },
  avatar: {
    height: 42,
    width: 42,
    borderRadius: 21,
  },
  tbTitle: {
    fontSize: FONTS.fontMedium,
    color: COLORS.primary,
    fontWeight: '700',
  },
  tbSubTitle: {
    color: COLORS.blackGray,
  },
  search: {
    paddingLeft: SIZES.paddingSmall,
    paddingRight: SIZES.paddingSmall,
  },
  containerHintReciept: {
    backgroundColor: COLORS.greenLight,
    borderRadius: 8,
    padding: SIZES.paddingSmall,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.marginSmall,
  },
  hintRecieptLink: {
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: SIZES.marginSmall,
  },
  borderRecieptLink: {
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
    width: 80,
  },
  containerTrending: {
    paddingLeft: SIZES.paddingSmall,
  },
  trendingTitle: {
    fontSize: FONTS.fontMedium,
    fontWeight: '700',
    marginBottom: SIZES.marginSmall,
    marginTop: SIZES.marginSmall,
  },
  containerCategory: {
    padding: SIZES.paddingSmall,
  },
  containerCategoryTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: FONTS.fontMedium,
    fontWeight: '700',
  },
})
