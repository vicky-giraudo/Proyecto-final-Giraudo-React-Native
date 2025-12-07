// src/screens/ReservaVehiculoDetallesScreen.jsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function ReservaVehiculoDetallesScreen({ route, navigation }) {
const { vehiculo, pasajeros } = route.params;

const [fecha, setFecha] = useState("");
const [hora, setHora] = useState("");
const [conductor, setConductor] = useState("");
const [acompanantes, setAcompanantes] = useState("");
const [error, setError] = useState("");

const handleContinuar = () => {
if (!fecha || !hora || !conductor) {
    setError("Completa todos los campos obligatorios.");
    return;
}

navigation.navigate("ElegirUbicacion", {
    vehiculo,
    pasajeros,
    fecha,
    hora,
    conductor,
    acompanantes,
});
};


return (
    <View style={styles.container}>
    <View style={styles.box}>
        <Text style={styles.title}>Detalles de la reserva</Text>

        {/* FECHA */}
        <Text style={styles.label}>Fecha</Text>
        <TextInput
        style={styles.input}
        value={fecha}
        onChangeText={setFecha}
        placeholder="DD/MM/AAAA"
        placeholderTextColor={colors.placeholder}
        />

        {/* HORA */}
        <Text style={styles.label}>Horario</Text>
        <TextInput
        style={styles.input}
        value={hora}
        onChangeText={setHora}
        placeholder="HH:MM"
        placeholderTextColor={colors.placeholder}
        />

        {/* CONDUCTOR */}
        <Text style={styles.label}>Conductor</Text>
        <TextInput
        style={styles.input}
        value={conductor}
        onChangeText={setConductor}
        placeholder="Nombre y apellido"
        placeholderTextColor={colors.placeholder}
        />

        {/* Acompañantes */}
        <Text style={styles.label}>Acompañantes (opcional)</Text>
        <TextInput
        style={styles.input}
        value={acompanantes}
        onChangeText={setAcompanantes}
        placeholder="Separados por coma"
        placeholderTextColor={colors.placeholder}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

<TouchableOpacity style={styles.button} onPress={handleContinuar}>
<Text style={styles.buttonText}>Seleccionar ubicación</Text>
</TouchableOpacity>

    </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
},
box: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
},
title: {
    fontSize: 26,
    fontFamily: "Poppins_700Bold",
    marginBottom: 20,
    color: colors.primary,
    textAlign: "center",
},
label: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 15,
    marginBottom: 5,
    color: colors.primary,
},
input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary,
    padding: 12,
    fontFamily: "Poppins_400Regular",
    color: colors.text,
},
error: {
    color: "red",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "Poppins_400Regular",
},
button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
},
buttonText: {
color: colors.background,
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
},
});

