import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ToolBar from './components/ToolBar'
import Search from './components/Search'
import { style } from './Style'
import Trending from './components/Trending'
import Category from './components/Category'

export default function Home() {
  return (
    <SafeAreaView style={style.home}>
      <ToolBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 70 }}
      >
        <Search />
        <Trending />
        <Category />
      </ScrollView>
    </SafeAreaView>
  )
}
