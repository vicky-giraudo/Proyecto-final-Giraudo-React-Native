// src/screens/PerfilUsuarioScreen.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import colors from "../theme/colors";
import Header from "../components/Header";

export default function PerfilUsuarioScreen({ navigation }) {
    const user = useSelector((state) => state.user);

    const nombreCompleto = `${user.nombre || ""} ${user.apellido || ""}`.trim() || "-";

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            <Text style={styles.title}>Mi perfil</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Nombre y apellido</Text>
                <Text style={styles.value}>{nombreCompleto}</Text>

                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{user.email || "-"}</Text>

                <Text style={styles.label}>Área</Text>
                <Text style={styles.value}>{user.area || "-"}</Text>

                <Text style={styles.label}>Cargo</Text>
                <Text style={styles.value}>{user.cargo || "-"}</Text>
            </View>

            <Text style={styles.note}>
                Estos datos se completan en el primer ingreso y se usan para las reservas.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: "Poppins_700Bold",
        textAlign: "center",
        marginBottom: 20,
        color: colors.primary,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        elevation: 4,
    },
    label: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 14,
        color: colors.secondary,
        marginTop: 10,
    },
    value: {
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
        color: colors.text,
    },
    note: {
        marginTop: 20,
        textAlign: "center",
        fontFamily: "Poppins_400Regular",
        fontSize: 13,
        color: colors.secondary,
    },
});

