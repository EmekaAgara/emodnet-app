import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'


const Campaign = () => {
  const {
    params:{
      id,image,category,title,description,raised,
    },
  } = useRoute();


  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default Campaign

const styles = StyleSheet.create({})