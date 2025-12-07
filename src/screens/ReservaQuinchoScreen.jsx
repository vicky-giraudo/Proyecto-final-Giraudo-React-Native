// src/screens/ReservaQuinchoScreen.jsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../theme/colors";


export default function ReservaQuinchoScreen({ navigation }) {
const [fecha, setFecha] = useState("");
const [hora, setHora] = useState("");
const [personas, setPersonas] = useState("");
const [motivo, setMotivo] = useState("");
const [error, setError] = useState("");

const handleContinuar = () => {
    setError("");

    if (!fecha || !hora || !personas || !motivo) {
    setError("Por favor completa todos los campos.");
    return;
    }

    navigation.navigate("ReservaQuinchoConfirmacion", {
    fecha,
    hora,
    personas,
    motivo,
    });
    
};

return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Reservar Quincho</Text>

            <TextInput
                style={styles.input}
                placeholder="Fecha (DD/MM/AAAA)"
                placeholderTextColor={colors.placeholder}
                value={fecha}
                onChangeText={setFecha}
            />

            <TextInput
                style={styles.input}
                placeholder="Hora (HH:MM)"
                placeholderTextColor={colors.placeholder}
                value={hora}
                onChangeText={setHora}
            />

            <TextInput
                style={styles.input}
                placeholder="Cantidad de personas"
                placeholderTextColor={colors.placeholder}
                keyboardType="numeric"
                value={personas}
                onChangeText={setPersonas}
            />

            <TextInput
                style={styles.input}
                placeholder="Motivo del evento"
                placeholderTextColor={colors.placeholder}
                value={motivo}
                onChangeText={setMotivo}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleContinuar}>
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
    marginBottom: 20,
    textAlign: "center",
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
button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
},
buttonText: {
    color: colors.background,
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
},
error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
},
});
