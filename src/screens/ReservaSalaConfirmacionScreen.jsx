import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

export default function ReservaSalaConfirmacionScreen() {
    const navigation = useNavigation();

    const handleFinish = () => {
        navigation.navigate("App");
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>¡Reserva Exitosa! 🎉</Text>

                <Text style={styles.text}>
                    Tu reserva para la sala de capacitaciones ha sido registrada con éxito.
                </Text>

                <Text style={styles.text}>
                    Recordá llegar unos minutos antes para preparar todo.
                </Text>

                <Text style={[styles.text, styles.thanks]}>
                    ¡Que tengas una excelente reunión!
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.buttonText}>Volver al Inicio</Text>
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
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 25,
        elevation: 5,
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontFamily: "Poppins_700Bold",
        textAlign: "center",
        marginBottom: 15,
        color: colors.primary,
    },
    text: {
        fontSize: 16,
        fontFamily: "Poppins_400Regular",
        textAlign: "center",
        marginBottom: 10,
        color: colors.text,
    },
    thanks: {
        marginTop: 10,
        fontFamily: "Poppins_600SemiBold",
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
