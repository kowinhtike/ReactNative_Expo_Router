import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const UserPage = () => {
  const {id} = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.link}> UserPage {id}</Text>
    </View>
  )
}

export default UserPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:12
  },
  link:{
    fontSize:20
  }
})