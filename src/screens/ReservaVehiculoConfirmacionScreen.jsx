import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addReserva } from "../Redux/slices/reservaSlice";
import colors from "../theme/colors";

export default function ReservaVehiculoConfirmacionScreen({ route, navigation }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const reserva = route?.params || {};

    const destinoLat = reserva.destino?.lat || "-";
    const destinoLng = reserva.destino?.lng || "-";

    const fecha = reserva.fecha || "-";
    const hora = reserva.hora || "-";
    const vehiculo = reserva.vehiculo || "-";
    const pasajeros = reserva.pasajeros || "-";
    const conductor = reserva.conductor || "-";

    const handleConfirmar = () => {
        const nuevaReserva = {
            id: Date.now(),
            ...reserva,
            usuario: `${user.nombre} ${user.apellido}`,
            email: user.email,
            fechaCreacion: new Date().toISOString(),
        };

        dispatch(addReserva(nuevaReserva));
        navigation.replace("App");
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Confirmar Reserva</Text>
                <View style={styles.card}>
                    <Text style={styles.label}>Vehículo:</Text>
                    <Text style={styles.value}>{vehiculo}</Text>

                    <Text style={styles.label}>Pasajeros:</Text>
                    <Text style={styles.value}>{pasajeros}</Text>

                    <Text style={styles.label}>Día y horario:</Text>
                    <Text style={styles.value}>{fecha} - {hora}</Text>

                    <Text style={styles.label}>Conductor:</Text>
                    <Text style={styles.value}>{conductor}</Text>

                    <Text style={styles.label}>Destino:</Text>
                    <Text style={styles.value}>{destinoLat}, {destinoLng}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
                    <Text style={styles.buttonText}>Confirmar Reserva</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.secondaryButton]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.secondaryText}>Volver atrás</Text>
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
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: "Poppins_700Bold",
        marginBottom: 20,
        textAlign: "center",
        color: colors.primary,
    },
    card: {
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 12,
        elevation: 4,
        marginBottom: 25,
    },
    label: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 15,
        color: colors.secondary,
        marginTop: 10,
    },
    value: {
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
        color: colors.text,
    },
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 12,
    },
    buttonText: {
        color: colors.background,
        fontFamily: "Poppins_700Bold",
        fontSize: 16,
    },
    secondaryButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.primary,
    },
    secondaryText: {
        color: colors.primary,
        fontFamily: "Poppins_600SemiBold",
        fontSize: 15,
    },
});

