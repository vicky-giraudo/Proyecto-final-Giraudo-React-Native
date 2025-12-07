import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import colors from "../theme/colors";
import Header from "../components/Header";

export default function HistorialScreen({ navigation }) {
    const reservas = useSelector((state) => state.reservas.lista);

    const dataOrdenada = [...reservas].sort((a, b) => {
        const fechaA = new Date(a.fechaCreacion || a.fecha || 0);
        const fechaB = new Date(b.fechaCreacion || b.fecha || 0);
        return fechaB - fechaA;
    });

    const renderItem = ({ item }) => {
        const tipo = item.tipo || (item.vehiculo ? "Vehículo" : "Reserva");

        const titulo =
            tipo === "Vehículo"
                ? item.vehiculo
                : tipo === "Quincho"
                ? "Quincho"
                : "Sala de capacitación";

        const fechaTexto =
            item.fecha && item.hora
                ? `${item.fecha} - ${item.hora}`
                : item.fecha || "Sin fecha";

        const detalle =
            tipo === "Vehículo"
                ? `Conductor: ${item.conductor}`
                : tipo === "Quincho"
                ? `Personas: ${item.personas}`
                : `Personas: ${item.personas}`;

        return (
            <View style={styles.card}>
                <Text style={styles.tipo}>{titulo}</Text>
                <Text style={styles.linea}>{fechaTexto}</Text>
                <Text style={styles.linea}>{detalle}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            {!reservas.length ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyTitle}>Historial vacío</Text>
                    <Text style={styles.emptyText}>
                        Cuando confirmes reservas, van a aparecer acá.
                    </Text>
                </View>
            ) : (
                <View style={styles.content}>
                    <Text style={styles.title}>Historial de reservas</Text>

                    <FlatList
                        data={dataOrdenada}
                        keyExtractor={(item, index) =>
                            String(item.id || `${item.tipo}-${index}`)
                        }
                        renderItem={renderItem}
                        contentContainerStyle={styles.listContent}
                    />
                </View>
            )}
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
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        fontFamily: "Poppins_700Bold",
        textAlign: "center",
        marginBottom: 10,
        color: colors.primary,
    },
    listContent: {
        paddingVertical: 10,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
        elevation: 3,
    },
    tipo: {
        fontFamily: "Poppins_700Bold",
        fontSize: 16,
        color: colors.primary,
        marginBottom: 4,
    },
    linea: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        color: colors.text,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    emptyTitle: {
        fontFamily: "Poppins_700Bold",
        fontSize: 20,
        color: colors.primary,
        marginBottom: 8,
    },
    emptyText: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        color: colors.text,
        textAlign: "center",
    },
});
