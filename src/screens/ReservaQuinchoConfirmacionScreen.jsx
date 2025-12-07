import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { addReserva } from "../Redux/slices/reservaSlice";

export default function ReservaQuinchoConfirmacionScreen({ route, navigation }) {
const dispatch = useDispatch();
const user = useSelector((state) => state.user);

const { fecha, hora, personas, motivo } = route.params;

const handleConfirm = () => {
    dispatch(
        addReserva({
            id: Date.now(),
            tipo: "Quincho",
            fecha,
            hora,
            personas,
            motivo,
            usuario: `${user.nombre} ${user.apellido}`,
            fechaCreacion: new Date().toISOString(),
        })
    );

    alert("Reserva realizada con éxito 🎉");
    navigation.replace("App");
};

return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.title}>Confirmar Reserva</Text>

            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.value}>{fecha}</Text>

            <Text style={styles.label}>Hora:</Text>
            <Text style={styles.value}>{hora}</Text>

            <Text style={styles.label}>Personas:</Text>
            <Text style={styles.value}>{personas}</Text>

            <Text style={styles.label}>Motivo:</Text>
            <Text style={styles.value}>{motivo}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirmar Reserva</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: 20,
},
card: {
    backgroundColor: colors.cardBackground,
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    marginBottom: 30,
},
title: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    marginBottom: 20,
    color: colors.primary,
},
label: {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: colors.secondary,
},
value: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginBottom: 12,
    color: colors.primary,
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

