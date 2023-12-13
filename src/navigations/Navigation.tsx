import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home/Home'
import SplashScreen from '../screens/splashscreen/SplashScreen'
import { IMAGES, SCREENS } from '../constant/Constant'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from '../screens/search/Search'
import BookMark from '../screens/bookmark/BookMark'
import Settings from '../screens/settings/Settings'
import { Image } from 'react-native'
import { TabIcon } from '../components/TabIcon'
import Detail from '../screens/detail/Detail'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SplashScreen} />
    <Stack.Screen name={SCREENS.TAB} component={TabNavigation} />
    <Stack.Screen name={SCREENS.DETAIL} component={Detail} />
  </Stack.Navigator>
)

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 1, // đổ bóng tab bar
          height: 56,
        },
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={IMAGES.iconHome} />
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={IMAGES.iconSearch} />
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.BOOKMARK}
        component={BookMark}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={IMAGES.iconBookMark} />
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.SETTINGS}
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={IMAGES.iconSetting} />
          },
        }}
      />
    </Tab.Navigator>
  )
}
