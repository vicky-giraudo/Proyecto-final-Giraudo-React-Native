// src/screens/LoginScreen.jsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/slices/userSlice";

export default function LoginScreen({ navigation }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const dispatch = useDispatch();
const perfilCompleto = useSelector((state) => state.user.perfilCompleto);

const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

const handleLogin = () => {
    setError("");

    if (!email) {
    setError("Debes ingresar un correo electrónico.");
    return;
    }

    if (!validateEmail(email)) {
    setError("El formato del correo no es válido.");
    return;
    }

    if (!password) {
    setError("Debes ingresar una contraseña.");
    return;
    }

    dispatch(setUser({ email }));

    if (perfilCompleto === false) {
    navigation.replace("PerfilCompleto");
    } else {
    navigation.replace("App");
    }
};

return (
    <View style={styles.container}>

      {/* LOGO SUPERIOR */}
    <Image
        source={require("../Assets/Icons/LOGO-ANODAL.png")}
        style={styles.logo}
        resizeMode="contain"
    />

      {/* BLOQUE DE LOGIN MÁS ABAJO */}
    <View style={styles.loginBox}>

        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor={colors.placeholder}
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        />

        <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor={colors.placeholder}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

    </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    paddingTop: 60, 
},

logo: {
    width: 180,
    height: 90,
    marginBottom: 60, 
},

loginBox: {
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 80,
},

title: {
    fontSize: 28,
    fontFamily: "Poppins_700Regular",
    textAlign: "center",
    marginBottom: 40,
    color: colors.primary,
},

input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    fontFamily: "Poppins_400Regular",
    color: colors.text,
},

error: {
    color: "red",
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
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
});
