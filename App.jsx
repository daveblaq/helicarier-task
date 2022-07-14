import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenWireframe from "./screens/HomeScreenWireframe";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();
const App = () => {

  const [loaded] = useFonts({
    Inter: require('./assets/fonts/Inter.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: "horizontal-inverted",
          detachPreviousScreen: true,
          presentation: "transparentModal",
        }}
      >
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeScreenWireframe" component={HomeScreenWireframe} />
       
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
};

export default App;
