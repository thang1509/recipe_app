import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constant/Constant'

export const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  btnPrimary: {
    padding: SIZES.paddingMedium,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  btnTextColorWhite: {
    color: COLORS.white,
    fontWeight: '700',
    textAlign: 'center',
  },
  btnOutline: {
    padding: SIZES.paddingMedium,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  tabIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconSelected: {
    tintColor: COLORS.primary,
  },
  tabIconUnSelected: {
    tintColor: COLORS.grey,
  },
  tabBottomLine: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  containerSearch: {
    flexDirection: 'row',
    height: 42,
    backgroundColor: COLORS.ligthGray,
    padding: SIZES.paddingSmall,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    color: COLORS.black,
    height: 42,
  },
  item: {
    marginRight: SIZES.marginSmall,
  },
  itemImage: {
    borderRadius: 10,
    width: 230,
    height: 300,
  },
  itemContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: SIZES.paddingSmall,
  },
  itemText: {
    color: COLORS.white,
  },
  itemIcon: {
    tintColor: COLORS.primary,
  },
  itemContainerContent: {
    flexDirection: 'row',
    padding: SIZES.paddingExtraSmall,
    borderRadius: 10,
  },
  itemContainerContentLeft: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
  },
  itemContainerCategory: {
    flexDirection: 'row',
    padding: SIZES.paddingSmall,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    marginTop: SIZES.marginSmall,
  },
  itemCategoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemCategoryWrapper: {
    marginRight: SIZES.marginSmall,
    marginLeft: SIZES.marginSmall,
    flex: 1,
    justifyContent: 'space-between',
  },
  itemCategoryTitle: {
    fontSize: FONTS.fontSmallMedium,
    fontWeight: '500',
  },
})
