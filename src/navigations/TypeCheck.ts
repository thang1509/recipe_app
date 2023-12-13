import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SCREENS } from '../constant/Constant'
import { RouteProp } from '@react-navigation/native'

type MainStackParams = {
  HOME: undefined
  SPLASHSCREEN: undefined
  TAB: undefined
  DETAIL: undefined
}

export type PropsPush = NativeStackNavigationProp<MainStackParams, SCREENS.HOME>

export type PropsRoute = RouteProp<MainStackParams, SCREENS.HOME>
