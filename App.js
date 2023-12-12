import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './src/screens/HomeScreen';
import SendScreen from './src/screens/SendScreen.js';
import store from './src/redux/store.js'
import { Provider } from 'react-redux';
import PayScreen from './src/screens/PayScreen.js';
import TransferSuccess from './src/screens/TransferSuccess.js';

function BottomTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "#000",
        tabBarLabelStyle: {
          fontSize: 14
        },
        tabBarStyle:  {height: 70,elevation:10},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'black'
          }else if(route.name === 'Send') {
              iconName = 'share';
              size = focused ? 30 : 25;
              color = focused ? 'blue' : 'black'
            }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })
    }
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Send" component={SendScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Send"
          component={SendScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Pay"
          component={PayScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Success"
          component={TransferSuccess}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
