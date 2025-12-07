//NuevaReservaScreen.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";
import ButtonBase from "../components/ButtonBase";
import Header from "../components/Header"; // 

export default function NuevaReservaScreen({ navigation }) {
return (
    <View style={styles.container}>

      {/* HEADER */}
    <Header />

      {/* CONTENIDO PRINCIPAL */}
    <View style={styles.content}>
        <Text style={styles.title}>Nueva Reserva</Text>

        <View style={styles.buttonsContainer}>
        <ButtonBase
            title="Vehículo"
            style={styles.option}
            onPress={() => navigation.navigate("ReservaVehiculo")}
        />

        <ButtonBase
            title="Quincho"
            style={styles.option}
            onPress={() => navigation.navigate("ReservaQuincho")}
        />

        <ButtonBase
            title="Sala de capacitación"
            style={styles.option}
            onPress={() => navigation.navigate("ReservaSala")}
        />
        </View>
    </View>

    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.background,
},

content: {
    flex: 1,
    padding: 20,
    justifyContent: "center", 
},

title: {
    fontSize: 28,
    fontFamily: "Poppins_700Regular",
    textAlign: "center",
    marginBottom: 40,
    color: colors.primary,
},


buttonsContainer: {
    gap: 20,
},

option: {
    paddingVertical: 20,
    borderRadius: 12,
},
});
