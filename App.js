
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import WebView from 'react-native-webview';
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen';
import SplashScreen1 from './screens/SplashScreen1';
import SplashScreen2 from './screens/SplashScreen2';
import SplashScreen3 from './screens/SplashScreen3';
import SplashScreen4 from './screens/SplashScreen4';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import CreateCampaign from './screens/CreateCampaign';
import Campaigns from './screens/Campaigns';
import CampaignSuccessfull from './screens/CampaignSuccessfull';
import Campaign from './screens/Campaign';


export default function App() {
  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>

        <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='SplashScreen1'
            component={SplashScreen1}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='SplashScreen2'
            component={SplashScreen2}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='SplashScreen3'
            component={SplashScreen3}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='SplashScreen4'
            component={SplashScreen4}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='Login'
            component={Login}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='Home'
            component={Home}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='CreateCampaign'
            component={CreateCampaign}
            options={{
            headerShown:true,
            title: 'Create Campaign',
            headerStyle: {
              backgroundColor: '#fff'
            },
            headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='Campaigns'
            component={Campaigns}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='CampaignSuccessfull'
            component={CampaignSuccessfull}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='Campaign'
            component={Campaign}
            options={{
            headerShown:false,
            }}
          />


        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}