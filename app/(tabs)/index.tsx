import { StyleSheet, Text, View,Pressable} from 'react-native'
import { Link,router } from 'expo-router'
import React from 'react'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.link} href="users/1">Go To User 1</Link>
      <Pressable onPress={()=>{
        router.push("users/2")
      }}>
        <Text style={styles.link}>
          Go To User 2
        </Text>
      </Pressable>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:12
  },
  link:{
    fontSize:20
  }
})