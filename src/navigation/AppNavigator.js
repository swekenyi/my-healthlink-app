// navigation/AppNavigator.js

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* Add more screens as needed */}
  </Stack.Navigator>
);

export default AppNavigator;
