import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Campaign = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{uri:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80'}}
      />

      <Text style={styles.textcontainer}>
        <Text style={styles.midText}>Category</Text>
        <Text style={styles.description}>Location</Text>
      </Text>

      <Text style={styles.textcontainer}>
        <Text style={styles.Maintext}>Title</Text>
        <Text style={styles.midText}>date</Text>
      </Text>
      
      <Text style={styles.description}>description</Text>

      <Text style={styles.textcontainer}>
        <Text style={styles.Maintext}>Donations raised</Text>
        <Text style={styles.midText}>donations needed</Text>
      </Text>
      
      <Text style={styles.midText}>participants</Text>
      <Text style={styles.midText}>owner</Text>



    </View>
  )
}
  
export default Campaign

const styles = StyleSheet.create({

    image:{
        width:'100%',
        aspectRatio:3/2,
        resizeMode:'cover',
        borderRadius:7,

    }



})