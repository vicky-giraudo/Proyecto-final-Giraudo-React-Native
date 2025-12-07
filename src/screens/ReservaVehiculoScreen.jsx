// src/screens/ReservaVehiculoScreen.jsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function ReservaVehiculoScreen({ navigation }) {
const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);
const [pasajeros, setPasajeros] = useState("");
const [error, setError] = useState("");

  // Lista de vehículos
const vehiculos = [
    { id: 1, nombre: "Vehículo 1", capacidad: 5 },
    { id: 2, nombre: "Vehículo 2", capacidad: 2 },
    { id: 3, nombre: "Vehículo 3", capacidad: 2 },
    { id: 4, nombre: "Vehículo 4", capacidad: 5 },
    { id: 5, nombre: "Camioneta", capacidad: 5 },
];

const validar = () => {
    setError("");

    if (!vehiculoSeleccionado) {
    setError("Debes seleccionar un vehículo.");
    return;
    }

    const capacidad = vehiculos.find(v => v.id === vehiculoSeleccionado).capacidad;

    if (!pasajeros) {
    setError("Ingresa la cantidad de pasajeros.");
    return;
    }

    if (parseInt(pasajeros) > capacidad) {
    setError(`Capacidad excedida. Máximo permitido: ${capacidad}.`);
    return;
    }

    navigation.navigate("ReservaVehiculoDetalles", {
    vehiculo: vehiculoSeleccionado,
    pasajeros: parseInt(pasajeros),
    });
};

return (
    <View style={styles.container}>
    <View style={styles.contentBox}>
        <Text style={styles.title}>Reservar Vehículo</Text>

        <Text style={styles.subtitle}>Elige un vehículo</Text>

        <View style={styles.optionsContainer}>
        {vehiculos.map(v => (
            <TouchableOpacity
            key={v.id}
            style={[
                styles.option,
                vehiculoSeleccionado === v.id && styles.selected
            ]}
            onPress={() => setVehiculoSeleccionado(v.id)}
            >
            <Text
                style={[
                styles.optionText,
                vehiculoSeleccionado === v.id && styles.optionTextSelected
                ]}
            >
                {v.nombre}
            </Text>
            </TouchableOpacity>
        ))}
        </View>

        <Text style={styles.subtitle}>Cantidad de pasajeros</Text>

        <TextInput
        style={styles.input}
        value={pasajeros}
        onChangeText={setPasajeros}
        placeholder="Ej: 3"
        keyboardType="numeric"
        placeholderTextColor={colors.placeholder}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={validar}>
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

contentBox: {
    width: "100%",
    maxWidth: 400,
},

title: {
    fontSize: 26,
    fontFamily: "Poppins_700Bold",
    marginBottom: 20,
    color: colors.primary,
    textAlign: "center",
},

subtitle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 10,
    marginBottom: 10,
    color: colors.primary,
},

optionsContainer: {
    flexDirection: "column",
    gap: 10,
},

option: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
},

selected: {
    backgroundColor: colors.primary,
},

optionText: {
    fontFamily: "Poppins_400Regular",
    color: colors.primary,
},

optionTextSelected: {
    color: colors.background,
},

input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 12,
    marginTop: 5,
    fontFamily: "Poppins_400Regular",
    color: colors.text,
},

error: {
    color: "red",
    marginTop: 10,
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
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
},
});
