import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SwiggyHome from "../components/SwiggyHome";
import SwiggyFood from "../components/SwiggyFood";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Dineout from "../components/Dineout";
import CreditCard from "../components/CreditCard";
import Instamart from "../components/Instamart";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#545454",
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: 500,
            fontFamily: "Verdana",
          },
          tabBarStyle: {
            paddingVertical: "10px",
          },
        })}
      >
        <Tab.Screen
          name="Swiggy"
          component={SwiggyHome}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="fast-food-outline" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Food"
          component={SwiggyFood}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bowl-mix-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Instamart"
          component={Instamart}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="food-takeout-box-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Dineout"
          component={Dineout}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="user" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Credit Card"
          component={CreditCard}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Octicons name="credit-card" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default MainScreen;
