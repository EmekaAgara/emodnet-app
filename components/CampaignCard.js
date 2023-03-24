import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'



const CampaignCard = ({id,image,category,description,raised,title}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Campaign', {id, image, category, title, description, raised})}>
        <Image
        style={styles.image}
        source={{uri:image}}
      />

      <Text style={styles.textcontainer}>{category}</Text>
      <Text style={styles.Maintext}>{title}</Text>   
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.midText2}>{raised}</Text>

    </TouchableOpacity>

  )
}

export default CampaignCard

const styles = StyleSheet.create({
  descText1:{
    color:'#898A8B',
    fontSize:14,
    fontWeight:300,
    textAlign:'left',
    paddingBottom:20
  },
  
  image:{
    width:'100%',
    aspectRatio:3/1.5,
    resizeMode:'cover',
    borderRadius:7,
  },
  
  Maintext:{
    fontWeight:700,
    fontSize:18
  },
  
  midText2:{
    fontWeight:500,
    paddingBottom:30
  },
  
  textcontainer:{
    paddingVertical:5,
    fontWeight:700,
    color:'#528CFD'  
  },
  
  description:{
    paddingVertical:5,
    color:'gray'
  },
})