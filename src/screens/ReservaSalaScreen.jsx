// src/screens/ReservaSalaScreen.jsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function ReservaSalaScreen({ navigation }) {
const [fecha, setFecha] = useState("");
const [hora, setHora] = useState("");
const [personas, setPersonas] = useState("");
const [error, setError] = useState("");

const handleNext = () => {
    setError("");

    if (!fecha || !hora || !personas) {
    setError("Por favor completa todos los campos.");
    return;
    }

    navigation.navigate("ReservaSalaConfirmacion", {
    fecha,
    hora,
    personas,
    });
};

return (
    <View style={styles.container}>
    <View style={styles.box}>
        <Text style={styles.title}>Reserva Sala de Capacitación</Text>

        <TextInput
        style={styles.input}
        placeholder="Fecha (DD/MM/AAAA)"
        placeholderTextColor={colors.placeholder}
        value={fecha}
        onChangeText={setFecha}
        />

        <TextInput
        style={styles.input}
        placeholder="Hora (Ej: 14:00)"
        placeholderTextColor={colors.placeholder}
        value={hora}
        onChangeText={setHora}
        />

        <TextInput
        style={styles.input}
        placeholder="Cantidad de personas"
        placeholderTextColor={colors.placeholder}
        value={personas}
        onChangeText={setPersonas}
        keyboardType="numeric"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continuar</Text>
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
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    marginBottom: 30,
    color: colors.primary,
},
input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontFamily: "Poppins_400Regular",
    color: colors.text,
},
error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
},
button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
},
buttonText: {
    color: colors.background,
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
},
});

