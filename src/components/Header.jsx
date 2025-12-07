// src/components/Header.jsx
import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; 
import colors from "../theme/colors";

export default function Header({ navigation }) {

    const nav = navigation || useNavigation();

    return (
        <SafeAreaView edges={["top"]} style={styles.safe}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => nav.navigate("PerfilCompleto")}
                    style={styles.iconButton}
                >
                    <Ionicons name="person-sharp" size={26} color="black" />
                </TouchableOpacity>

                <Image
                    source={require("../Assets/Icons/LOGO-ANODAL.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: colors.background,
    },
    container: {
        height: 70,
        paddingHorizontal: 25,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 4,
    },
    iconButton: {
        padding: 10,
    },
    logo: {
        width: 120,
        height: 40,
    },
});
