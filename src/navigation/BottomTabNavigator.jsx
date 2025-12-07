// src/navigation/BottomTabNavigator.jsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../theme/colors";

// ICONOS
import Entypo from "@expo/vector-icons/Entypo";

// SCREENS
import NuevaReservaScreen from "../screens/NuevaReservaScreen";
import HistorialScreen from "../screens/HistorialScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
    }}
    >

      {/* NUEVA RESERVA */}
    <Tab.Screen
        name="NuevaReserva"
        component={NuevaReservaScreen}
        options={{
        tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
            <Entypo
                name="plus"
                size={focused ? 28 : 28}
                color={focused ? "white" : "grey"}
            />
            </View>
        ),
        }}
    />

      {/*  HISTORIAL */}
    <Tab.Screen
        name="Historial"
        component={HistorialScreen}
        options={{
        tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
            <Entypo
                name="back-in-time"
                size={focused ? 28 : 28}
                color={focused ? "white" : "grey"}
            />
            </View>
        ),
        }}
    />

    </Tab.Navigator>
);
}

const styles = StyleSheet.create({
tabBar: {
    height: 90,
    paddingBottom: 50,
    paddingTop: 10,
    backgroundColor: "#ffffffff",
    borderTopWidth: 0,
    elevation: 5,
},

  // Contenedor para íconos NO seleccionados
iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
},

  // Contenedor para íconos seleccionados — círculo negro
iconContainerFocused: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: 70,
    height: 70,
    borderRadius: 70,
},
});

