// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, Items } from '../components/Database'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

const CreateCampaign = () => {
  const navigation = useNavigation();

  const onSubmitPressed=()=>{
    navigation.navigate('CampaignSuccessfull')
    
  }
  


  return (
    <View
      style={{
        width:'100%',
        height:'100%',
        backgroundColor:COLORS.white,
      }}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content"/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView
          style={{
            // width:'100%',
            // flexDirection:'row',
            // justifyContent:'space-between',
          }}>

            {/* <TouchableOpacity onPress={() => navigation.goBack('Home')}>
            <Entypo
                name="chevron-small-left"
                style={{
                  fontSize: 32,
                  color: COLORS.backgroundMedium,
                  padding:10,
                  borderRadius:7,
                  borderWidth:0.3,
                  
                  margin:15,

                }}
              />
            </TouchableOpacity> */}
          </SafeAreaView>
        <View style={{
          // marginBottom:10,
          paddingLeft:16,
          paddingTop:16,
        }}>
        <Text style={{
          fontSize:25,
          color:COLORS.black,
          fontWeight:'500',
          letterSpacing:1,
          marginBottom:5,
        }}>
         Create a new Campaign
        </Text>

        <Text style={{
          fontSize:14,
          color:'gray',
          fontWeight:'400',
          letterSpacing:1,
          lineHeight:20,
        }}>
         Fill the form below to create a new ocean & seabed litter cleaaning event
        </Text>
        </View>
        <View style={styles.root}>
        <CustomInput name="Boatname" placeholder="Camoaign Name"/>
        <CustomInput name="Description" maxLength={40} placeholder="Description" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Location" maxLength={40} placeholder="Location Type" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="City" maxLength={40} placeholder="City" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Currency" maxLength={40} placeholder="Preffered Currency" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Price" maxLength={40} placeholder="Price per Hour" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Own" maxLength={40} placeholder="Do you Own the boat ?" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Type" maxLength={40} placeholder="Boat Type" rules={{required:'Enter your Fullname',}}/>
        <CustomInput name="Image" maxLength={40} placeholder="Upload Images" rules={{required:'Enter your Fullname',}}/>
        <CustomButton text="Create Campaign" onPress={(onSubmitPressed)}/>
      </View>


      </ScrollView>
      
    </View>
  )
}

export default CreateCampaign

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    margin:10,
  },

  text:{
    color:'gray',
    marginVertical:10,

  },

  link:{
    color:'#4765A9'

  }

});