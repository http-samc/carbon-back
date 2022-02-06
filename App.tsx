import { ToastProvider } from 'react-native-fast-toast'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import Styles from './theme/styles';
import Colors from './theme/colors';

// Importing Screens
import Info from './components/screen-handlers/Info';
import Money from './components/screen-handlers/Money';
import Authenticate from './screens/Authenticate';
import ContractHistory from './screens/ContractHistory';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';


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
                return <FontAwesome5 name={'info-circle'} size={24} color={c} />
              else if (rn == "Money")
                return <FontAwesome5 name={'money-check-alt'} size={24} color={c} />
              return <FontAwesome5 name={'sign-out-alt'} size={24} color={c} />

            },
            // tabBarButton: [
            //   "Authenticate",
            // ].includes(route.name)
            //   ? () => {
            //     return null
            //   }
            //   : undefined,
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
      <ExpoStatusBar style={'dark'} />
    </ToastProvider>
  );
}