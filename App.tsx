import { Provider as PaperProvider } from 'react-native-paper';
import Home from 'screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

