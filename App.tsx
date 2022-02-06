import { ToastProvider } from 'react-native-fast-toast'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// info - feather (PI || CI)
// attach-money - material (Purchase || Sales)
// file-invoice-dollar - FA5 (Contract)
// ignore authentice screen

import Styles from './theme/styles';
import Colors from './theme/colors';

// Importing Screens
import Info from './components/screen-handlers/Info';
import Money from './components/screen-handlers/Money';
import Authenticate from './screens/Authenticate';
import ContractHistory from './screens/ContractHistory';


const Tab = createBottomTabNavigator();

export default function App() {

  // Configure fonts
  const loaded = useFonts({
    MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    BebasNeueRegular: require('./assets/fonts/BebasNeue-Regular.ttf')
  });

  if (!loaded)
    return null

  return (
    <ToastProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let c = focused ? Colors.primary : Colors.secondary;
              let rn = route.name

              if (rn == "ContractHistory")
                return <FontAwesome5 name={'file-invoice-dollar'} size={24} color={c} />
              else if (rn == "Info")
                return <Feather name={'info'} size={24} color={c} />
              else if (rn == "Money")
                return <MaterialIcons name={'attach-money'} size={24} color={c} />
            },
            tabBarButton: [
              "Authenticate",
            ].includes(route.name)
              ? () => {
                return null
              }
              : undefined,
            tabBarShowLabel: false,
            headerShown: false,
            // tabBarStyle: Styles.navBar
          })
          }
          initialRouteName={"Authenticate"}
        >
          <Tab.Screen
            name="Authenticate"
            component={Authenticate}
            options={{
              tabBarStyle: { display: "none" },
            }}
          />

          <Tab.Screen name="ContractHistory" component={ContractHistory} />
          <Tab.Screen name="Info" component={Info} />
          <Tab.Screen name="Money" component={Money} />
        </Tab.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}