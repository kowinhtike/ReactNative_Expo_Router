import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

const TabsLayout = () => {
  return (
    //to replace more icons  visit this website https://ionic.io/ionicons
    <Tabs>
        <Tabs.Screen name='index' options={{headerTitle:"Home Page",headerStyle:{backgroundColor:"red"},headerTitleStyle:{
            color:"white"
        },title:"Home",tabBarIcon:({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        )}} />
        <Tabs.Screen name='users/[id]' options={{headerTitle:"User Page",headerStyle:{backgroundColor:"red"},headerTitleStyle:{
            color:"white"
        },title:"User Page Naw",tabBarIcon:({ color, focused }) => (
          <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} />
        )}} />
    </Tabs>
    
  )
}

export default TabsLayout

const styles = StyleSheet.create({})